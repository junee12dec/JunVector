// Threads 계정 페이지나 검색 페이지에 보이는 글 목록을 JSON 한 줄씩 출력한다.
// 사용: node .claude/skills/scout/threads-list.js <URL> [<URL> ...]
//   계정: https://www.threads.com/@<계정>
//   검색: https://www.threads.com/search?q=<검색어>&serp_type=default
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ locale: 'ko-KR' })).newPage();
  for (const target of process.argv.slice(2)) {
    try {
      await page.goto(target, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(6000);
      const scripts = await page.evaluate(() =>
        [...document.querySelectorAll('script[type="application/json"]')].map(s => s.textContent));
      const posts = new Map();
      const walk = o => {
        if (!o || typeof o !== 'object') return;
        if (o.pk && o.code && o.user?.username && 'caption' in o) posts.set(o.pk, o);
        Object.values(o).forEach(walk);
      };
      scripts.forEach(s => { try { walk(JSON.parse(s)); } catch {} });
      for (const q of posts.values()) {
        const link = q.text_post_app_info?.link_preview_attachment?.url;
        console.log(JSON.stringify({
          from: target,
          url: `https://www.threads.com/@${q.user.username}/post/${q.code}`,
          author: q.user.username,
          date: new Date(q.taken_at * 1000).toISOString().slice(0, 10),
          likes: q.like_count,
          replies: q.text_post_app_info?.direct_reply_count,
          reposts: q.text_post_app_info?.repost_count,
          text: q.caption?.text || '',
          link: link && (new URL(link).searchParams.get('u') || link),
        }));
      }
    } catch (e) {
      console.error(`실패: ${target} — ${e.message}`);
    }
  }
  await browser.close();
})();
