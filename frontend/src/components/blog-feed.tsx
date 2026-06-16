import axios from 'axios';
import { useEffect, useState } from 'react';
import FeaturedPostCard from '@/components/featured-post-card';
import LatestPostCard from '@/components/latest-post-card';
import { FeaturedPostCardSkeleton } from '@/components/skeletons/featured-post-card-skeleton';
import { LatestPostCardSkeleton } from '@/components/skeletons/latest-post-card-skeleton';
import CategoryPill from '@/components/category-pill';
import { categories } from '@/utils/category-colors';

export default function BlogFeed() {
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const [posts, setPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let categoryEndpoint =
      selectedCategory === 'featured'
        ? '/api/posts/featured'
        : `/api/posts/categories/${selectedCategory}`;

    setLoading(true);
    axios
      .get(import.meta.env.VITE_API_PATH + categoryEndpoint)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedCategory]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_PATH + '/api/posts/latest')
      .then((response) => {
        setLatestPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mx-auto my-6">
      <div className="-mx-4 flex flex-wrap">
        {/* Main Feed */}
        <div className="w-full p-4 md:w-2/3">
          <div className="flex flex-col gap-0.5 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-violet">
              What's hot?
            </span>
            <h1 className="cursor-text text-xl font-bold text-white md:text-2xl">
              {selectedCategory === 'featured'
                ? 'Featured Posts'
                : `Posts related to "${selectedCategory}"`}
            </h1>
          </div>
          
          <div className="flex flex-col gap-6">
            {posts.length === 0 || loading == true
              ? Array(5)
                  .fill(0)
                  .map((_, index) => <FeaturedPostCardSkeleton key={index} />)
              : posts
                  .slice(0, 5)
                  .map((post, index) => <FeaturedPostCard key={index} post={post} />)}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full p-4 md:w-1/3 flex flex-col gap-6">
          {/* Categories Card */}
          <div className="rounded-2xl border border-white/5 bg-[#131520]/30 p-5 backdrop-blur-md">
            <div className="flex flex-col gap-0.5 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-indigo">
                Discover by topic
              </span>
              <h2 className="cursor-text text-lg font-bold text-white">
                Categories
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((category) => (
                <button
                  key={category}
                  aria-label={category}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(selectedCategory === category ? 'featured' : category)
                  }
                  className="transition-transform hover:scale-[1.04] active:scale-95"
                >
                  <CategoryPill category={category} selected={selectedCategory === category} />
                </button>
              ))}
            </div>
          </div>

          {/* Latest Posts Card */}
          <div className="rounded-2xl border border-white/5 bg-[#131520]/30 p-5 backdrop-blur-md">
            <div className="flex flex-col gap-0.5 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-pink">
                What's new?
              </span>
              <h2 className="cursor-text text-lg font-bold text-white">
                Latest Posts
              </h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {latestPosts.length === 0
                ? Array(5)
                    .fill(0)
                    .map((_, index) => <LatestPostCardSkeleton key={index} />)
                : latestPosts
                    .slice(0, 5)
                    .map((post, index) => <LatestPostCard key={index} post={post} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
