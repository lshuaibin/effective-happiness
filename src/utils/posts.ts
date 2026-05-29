import { getCollection } from 'astro:content';

export async function getPosts() {
  const posts = await getCollection('posts');
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPostsByTag(tag: string) {
  const posts = await getPosts();
  return posts.filter((post) => post.data.tags.includes(tag));
}

export type TagCount = [string, number];

export function getAllTags(posts: Awaited<ReturnType<typeof getPosts>>): TagCount[] {
  const tagMap = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }
  return [...tagMap.entries()].sort((a, b) => b[1] - a[1]);
}

export function getReadingTime(body: string): number {
  const wordsPerMinute = 200;
  const words = body.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function groupByYear(posts: Awaited<ReturnType<typeof getPosts>>) {
  const groups: Record<string, typeof posts> = {};
  for (const post of posts) {
    const year = post.data.date.getFullYear().toString();
    (groups[year] ||= []).push(post);
  }
  return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
}
