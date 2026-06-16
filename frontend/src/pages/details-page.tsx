import { useLocation, useNavigate, useParams } from 'react-router-dom';
import navigateBackWhiteIcon from '@/assets/svg/navigate-back-white.svg';
import formatPostTime from '@/utils/format-post-time';
import CategoryPill from '@/components/category-pill';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DetailsPage() {
  const { state } = useLocation();
  const [post, setPost] = useState(state?.post);
  const initialVal = post === undefined;
  const [loading, setIsLoading] = useState(initialVal);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPostById = async () => {
      try {
        await axios.get(import.meta.env.VITE_API_PATH + `/api/posts/${postId}`).then((response) => {
          console.log(response.data);
          setIsLoading(false);
          setPost(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (post === undefined) {
      getPostById();
    }
  }, [post]);

  if (!loading && post)
    return (
      <div className="flex-grow bg-[#090B11] min-h-screen text-zinc-100 pb-16 flex flex-col">
        <div className="relative h-[380px] md:h-[480px] w-full overflow-hidden">
          <img src={post.imageLink} alt={post.title} className="h-full w-full object-cover" />
          {/* Dynamic dark gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#090B11]/40 to-[#090B11]"></div>
          
          {/* Glass back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 md:top-8 md:left-16 lg:left-24 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-md hover:bg-black/50 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200"
          >
            <img
              src={navigateBackWhiteIcon}
              className="h-4 w-6 filter invert"
              alt="back"
            />
          </button>
          
          <div className="absolute bottom-0 left-0 w-full pt-24 pb-6 px-6 md:px-16 lg:px-24">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4 flex flex-wrap gap-1.5">
                {post.categories.map((category: string, idx: number) => (
                  <CategoryPill key={idx} category={category} />
                ))}
              </div>
              <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-3 text-xs md:text-sm text-zinc-400">
                <span className="font-semibold text-zinc-200">{post.authorName}</span>
                <span className="text-zinc-600">•</span>
                <span>{formatPostTime(post.timeOfPost)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mx-auto w-full max-w-4xl px-6 py-10 md:px-16 lg:px-24 flex-grow">
          <article className="prose prose-invert max-w-none">
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg md:leading-loose whitespace-pre-line">
              {post.description}
            </p>
          </article>
        </div>
      </div>
    );
  else 
    return (
      <div className="min-h-screen bg-[#090B11] flex items-center justify-center text-zinc-400 font-medium">
        <div className="flex flex-col items-center gap-3">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-violet border-t-transparent"></span>
          <span className="text-sm tracking-widest uppercase text-zinc-500 font-bold">Loading Details</span>
        </div>
      </div>
    );
}
