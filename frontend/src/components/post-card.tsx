import { useNavigate } from 'react-router-dom';
import Post from '@/types/post-type';
import formatPostTime from '@/utils/format-post-time';
import CategoryPill from '@/components/category-pill';
import { createSlug } from '@/utils/slug-generator';
import { TestProps } from '@/types/test-props';

export default function PostCard({ post, testId = 'postcard' }: { post: Post } & TestProps) {
  const navigate = useNavigate();
  const slug = createSlug(post.title);
  
  return (
    <div
      className="active:scale-click group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#131520]/40 hover:bg-[#131520]/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/10 hover:shadow-2xl hover:shadow-brand-violet/10 flex flex-col h-full"
      onClick={() => navigate(`/details-page/${slug}/${post._id}`, { state: { post } })}
      data-testid={testId}
    >
      <div className="h-48 w-full overflow-hidden relative border-b border-white/5">
        <img
          src={post.imageLink}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B11]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
          {post.authorName} • {formatPostTime(post.timeOfPost)}
        </div>
        
        <h2 className="mb-2 line-clamp-1 text-base font-bold text-white group-hover:text-violet-300 transition-colors">
          {post.title}
        </h2>
        
        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400 flex-grow">
          {post.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.categories.map((category, index) => (
            <CategoryPill key={`${category}-${index}`} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
