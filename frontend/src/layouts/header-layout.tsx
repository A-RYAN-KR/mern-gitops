import ThemeToggle from '@/components/theme-toggle-button';
import AddIcon from '@/assets/svg/add-icon-white.svg';
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/hero';

function header() {
  const navigate = useNavigate();

  return (
    <div className="relative -mt-2 h-[480px] bg-[url('./assets/wanderlustbg.webp')] bg-cover bg-fixed bg-center">
      {/* Premium dark gradient overlay fading to the deep dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#090B11]/50 to-[#090B11]"></div>
      
      <div className="absolute inset-0 flex flex-col justify-between px-6 py-8 text-zinc-100 md:px-16 lg:px-24">
        <div className="flex w-full justify-between items-center">
          <div 
            className="flex cursor-pointer items-center text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400 hover:opacity-85 transition-opacity"
            onClick={() => navigate('/')}
          >
            WANDERLUST
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <button
              className="hidden md:inline-block bg-gradient-to-r from-brand-violet to-brand-indigo hover:from-brand-violet/90 hover:to-brand-indigo/90 text-white font-medium px-5 py-2 rounded-full text-sm shadow-lg shadow-brand-violet/20 hover:scale-[1.04] transition-all duration-300"
              onClick={() => {
                navigate('/add-blog');
              }}
            >
              Create Post
            </button>
            
            <button
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 active:scale-95 transition-all"
              onClick={() => {
                navigate('/add-blog');
              }}
            >
              <img className="h-4.5 w-4.5" src={AddIcon} />
            </button>
          </div>
        </div>
        
        <Hero />
      </div>
    </div>
  );
}

export default header;
