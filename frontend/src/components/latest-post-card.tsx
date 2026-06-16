import { useNavigate } from 'react-router-dom';
import linkIcon from '@/assets/svg/link.svg';
import Post from '@/types/post-type';
import formatPostTime from '@/utils/format-post-time';
import CategoryPill from '@/components/category-pill';
import { createSlug } from '@/utils/slug-generator';
import { TestProps } from '@/types/test-props';

export default function LatestPostCard({
  post,
  testId = 'latestpostcards',
}: { post: Post } & TestProps) {
  const navigate = useNavigate();
  const slug = createSlug(post.title);
  
  return (
    <div
      className="active:scale-click group cursor-pointer rounded-xl border border-white/5 bg-[#1a1c28]/35 p-3.5 transition-all duration-300 hover:bg-[#1a1c28]/85 hover:border-white/10 hover:shadow-lg flex flex-col gap-2.5"
      onClick={() => navigate(`/details-page/${slug}/${post._id}`, { state: { post } })}
      data-testid={testId}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-1.5">
          {post.categories.map((category, index) => (
            <CategoryPill key={`${category}-${index}`} category={category} />
          ))}
        </div>
        <img 
          src={linkIcon} 
          alt={post.title} 
          className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 filter invert" 
        />
      </div>
      
      <h3 className="line-clamp-1 text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
        {post.title}
      </h3>
      
      <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
        {post.authorName} • {formatPostTime(post.timeOfPost)}
      </div>
    </div>
  );
}
