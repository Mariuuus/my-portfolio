import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: any) => ({ slug: post.slug }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data, content } = getPostBySlug(slug);

  return (
    <main className='w-2xl flex flex-col'>
        <div className='flex justify-between'>
            <h1>{data.title}</h1>
            <p className='italic'>{data.date}</p>
        </div>
      <hr className='mb-4'/>
      <MDXRemote source={content} />
    </main>
  );
}