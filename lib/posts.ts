import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace('.md', '');
      const file = fs.readFileSync(path.join(postsDir, filename), 'utf8');
      const { data } = matter(file);
      return { slug, ...data };
    })
    .sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const file = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf8');
  return matter(file);
}