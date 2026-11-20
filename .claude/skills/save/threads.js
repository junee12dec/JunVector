// Threads 글의 본문과 작성자가 이어 쓴 댓글을 출력하고, 첨부 이미지를 내려받는다.
// 사용: node .claude/skills/save/threads.js <Threads URL>
const { chromium } = require('playwright');
const fs = require('fs');
const os = require('os');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ locale: 'ko-KR' })).newPage();
  await page.goto(process.argv[2], { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(6000);
  const url = page.url().split('?')[0];
  const scripts = await page.evaluate(() =>
    [...document.querySelectorAll('script[type="application/json"]')].map(s => s.textContent));

  // 페이지 데이터에서 본문 글(data.media)과 작성자가 이어 쓴 댓글(self_thread)을 찾는다.
  // 둘은 서로 다른 데이터 조각에 나뉘어 들어 있다.
  let main, replies = [];
  const find = o => {
    if (!o || typeof o !== 'object') return;
    if (!main && o.media?.user?.username && o.media.caption) main = o.media;
    const edges = o.media?.text_post_app_info?.self_thread?.posts?.edges;
    if (edges?.length) replies = edges.map(e => e.node);
    Object.values(o).forEach(find);
  };
  scripts.forEach(s => { try { find(JSON.parse(s)); } catch {} });
  if (!main) throw new Error('본문을 찾지 못했습니다');
  // 첨부를 내려받는다. 영상은 첫 화면 한 장만 받는다.
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'threads-'));
  let count = 0;
  const media = async p => {
    for (const m of p.carousel_media?.length ? p.carousel_media : [p]) {
      const src = m.image_versions2?.candidates?.[0]?.url;
      if (!src) continue;
      const kind = m.video_versions?.length ? '영상 첫 화면' : '이미지';
      try {
        const res = await page.goto(src); // 브라우저로 받아야 환경의 프록시 설정을 따른다
        if (!res.ok()) throw new Error(res.status());
        const file = path.join(dir, `${++count}.jpg`);
        fs.writeFileSync(file, await res.body());
        console.log(`[${kind}] ${file}`);
      } catch {
        console.log(`[읽지 못한 첨부] ${kind} (${new URL(src).host})`);
      }
    }
  };
  const link = p => {
    const u = p.text_post_app_info?.link_preview_attachment?.url;
    return u && (new URL(u).searchParams.get('u') || u);
  };
  const print = async p => {
    console.log(p.caption?.text || '');
    if (link(p)) console.log(`[링크] ${link(p)}`);
    await media(p);
  };

  console.log(`URL: ${url}`);
  console.log(`작성자: @${main.user.username}`);
  console.log(`작성일: ${new Date(main.taken_at * 1000).toISOString().slice(0, 10)}`);
  console.log('\n## 본문\n');
  await print(main);
  for (const [i, p] of replies.entries()) { console.log(`\n## 작성자 댓글 ${i + 1}\n`); await print(p); }
  await browser.close();
})().catch(e => { console.error(`실패: ${e.message}`); process.exit(1); });
