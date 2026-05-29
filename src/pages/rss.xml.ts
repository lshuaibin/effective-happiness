import rss from '@astrojs/rss';
import { getPosts } from '../utils/posts';

export async function GET() {
  const posts = await getPosts();
  return rss({
    title: '闲敲棋子',
    description: '落子无悔，闲敲棋子落灯花。',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt || post.body?.slice(0, 200),
      link: `/posts/${post.id.replace(/\.md$/, '')}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
