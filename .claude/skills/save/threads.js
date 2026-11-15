// Threads 글의 본문과 작성자가 이어 쓴 댓글을 출력한다.
// 사용: node .claude/skills/save/threads.js <Threads URL>
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ locale: 'ko-KR' })).newPage();
  await page.goto(process.argv[2], { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(6000);
  const url = page.url().split('?')[0];
  const scripts = await page.evaluate(() =>
    [...document.querySelectorAll('script[type="application/json"]')].map(s => s.textContent));
  await browser.close();

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
  const media = p => {
    const images = p.carousel_media?.length || (p.video_versions?.length ? 0 : p.image_versions2?.candidates?.length ? 1 : 0);
    const videos = p.video_versions?.length ? 1 : 0;
    return [images && `이미지 ${images}장`, videos && '영상 1개'].filter(Boolean).join(', ');
  };
  const link = p => {
    const u = p.text_post_app_info?.link_preview_attachment?.url;
    return u && (new URL(u).searchParams.get('u') || u);
  };
  const print = p => {
    console.log(p.caption?.text || '');
    if (link(p)) console.log(`[링크] ${link(p)}`);
    if (media(p)) console.log(`[읽지 못한 첨부] ${media(p)}`);
  };

  console.log(`URL: ${url}`);
  console.log(`작성자: @${main.user.username}`);
  console.log(`작성일: ${new Date(main.taken_at * 1000).toISOString().slice(0, 10)}`);
  console.log('\n## 본문\n');
  print(main);
  replies.forEach((p, i) => { console.log(`\n## 작성자 댓글 ${i + 1}\n`); print(p); });
})().catch(e => { console.error(`실패: ${e.message}`); process.exit(1); });
