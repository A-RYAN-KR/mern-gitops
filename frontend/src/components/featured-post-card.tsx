import { useNavigate } from 'react-router-dom';
import Post from '@/types/post-type';
import formatPostTime from '@/utils/format-post-time';
import CategoryPill from '@/components/category-pill';
import { createSlug } from '@/utils/slug-generator';
import { TestProps } from '@/types/test-props';

export default function FeaturedPostCard({
  post,
  testId = 'featuredPostCard',
}: { post: Post } & TestProps) {
  const navigate = useNavigate();
  const slug = createSlug(post.title);
  
  return (
    <div
      className="active:scale-click group flex h-auto cursor-pointer flex-col gap-4 rounded-2xl border border-white/5 bg-[#131520]/40 p-4 transition-all duration-300 hover:border-white/10 hover:bg-[#131520]/80 hover:shadow-2xl hover:shadow-brand-violet/5 sm:h-48 sm:flex-row"
      onClick={() => navigate(`/details-page/${slug}/${post._id}`, { state: { post } })}
      data-testid={testId}
    >
      <div className="w-full overflow-hidden rounded-xl sm:w-1/3 h-40 sm:h-full relative border border-white/5">
        <img
          src={post.imageLink}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
      
      <div className="flex h-full w-full flex-col justify-between sm:w-2/3 py-1">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1.5">
            {post.categories.map((category, index) => (
              <CategoryPill key={`${category}-${index}`} category={category} />
            ))}
          </div>
          
          <h2 className="line-clamp-1 text-base font-bold text-white group-hover:text-violet-300 transition-colors">
            {post.title}
          </h2>
          
          <p className="line-clamp-2 text-xs leading-relaxed text-zinc-400">
            {post.description}
          </p>
        </div>
        
        <div className="mt-3 flex items-center text-[10px] font-bold uppercase tracking-wider text-zinc-500">
          {post.authorName} • {formatPostTime(post.timeOfPost)}
        </div>
      </div>
    </div>
  );
}
