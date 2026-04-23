import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className='flex flex-col gap-1'>
        {posts.map((post: any) => (
        <div key={post.slug} className='flex justify-between'>
            <div className='pe-4'><Link href={`/blog/${post.slug}`}>{post.title}</Link></div>
            <div className='italic'>{post.date}</div>
        </div>
        ))}
    </main>
  );
}