import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogFeed from '@/components/blog-feed';
import PostCard from '@/components/post-card';
import Post from '@/types/post-type';
import { PostCardSkeleton } from '@/components/skeletons/post-card-skeleton';
import Header from '@/layouts/header-layout';

function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_PATH + '/api/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-full min-h-screen cursor-default bg-[#090B11] text-zinc-100 pb-16">
      <Header />
      <div className="mx-6 md:mx-16 lg:mx-24">
        <BlogFeed />
        
        <div className="mb-6 mt-12 flex flex-col gap-1.5">
          <span className="text-xs font-bold tracking-widest text-brand-violet uppercase">All Stories</span>
          <h2 className="cursor-text text-2xl font-bold text-white md:text-3xl">
            Explore More Adventures
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {posts.length === 0
            ? Array(8)
                .fill(0)
                .map((_, index) => <PostCardSkeleton key={index} />)
            : posts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
