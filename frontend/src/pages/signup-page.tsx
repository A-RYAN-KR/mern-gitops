import { Link, useNavigate } from 'react-router-dom';
import AddGoogleIcon from '@/assets/svg/google-color-icon.svg';
import AddGithubIcon from '@/assets/svg/github-icon.svg';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { TSignUpSchema, signUpSchema } from '@/lib/types';
import 'react-toastify/dist/ReactToastify.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

function signin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: FieldValues) => {
    if (data.email === 'abc@gamil.com') {
      toast.error('Submitting form is failed');
      return;
    }

    // Server-side validation simulation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex-grow flex items-center justify-center bg-[#090B11] text-zinc-100 px-6 py-12 md:py-16">
      <div className="w-full max-w-md rounded-2xl border border-white/5 bg-[#131520]/45 p-6 md:p-8 backdrop-blur-md shadow-2xl flex flex-col gap-6">
        
        {/* Branding & Headers */}
        <div className="text-center">
          <h1 
            className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500 cursor-pointer hover:opacity-80 transition-opacity inline-block mb-2"
            onClick={() => navigate('/')}
          >
            WANDERLUST
          </h1>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            Create Account
          </h2>
          <p className="mt-1.5 text-xs text-zinc-500 font-semibold">
            Join Wanderlust to share your travel adventures
          </p>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <input
              {...register('username')}
              type="text"
              placeholder="Username"
              className="w-full rounded-xl border border-white/5 bg-[#0a0b10]/60 p-3.5 text-zinc-100 placeholder:text-zinc-600 focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all outline-none text-sm"
            />
            {errors.username && (
              <p className="text-xs text-brand-pink px-1.5 pt-1 font-semibold">{`${errors.username.message}`}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register('email')}
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-white/5 bg-[#0a0b10]/60 p-3.5 text-zinc-100 placeholder:text-zinc-600 focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all outline-none text-sm"
            />
            {errors.email && (
              <p className="text-xs text-brand-pink px-1.5 pt-1 font-semibold">{`${errors.email.message}`}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register('password')}
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-white/5 bg-[#0a0b10]/60 p-3.5 text-zinc-100 placeholder:text-zinc-600 focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all outline-none text-sm"
            />
            {errors.password && (
              <p className="text-xs text-brand-pink px-1.5 pt-1 font-semibold">{`${errors.password.message}`}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register('confirmPassword')}
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-xl border border-white/5 bg-[#0a0b10]/60 p-3.5 text-zinc-100 placeholder:text-zinc-600 focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all outline-none text-sm"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-brand-pink px-1.5 pt-1 font-semibold">{`${errors.confirmPassword.message}`}</p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-brand-violet to-brand-indigo hover:from-brand-violet/90 hover:to-brand-indigo/90 text-white font-bold rounded-xl shadow-lg shadow-brand-violet/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        {/* Footer Redirect */}
        <div className="text-center text-xs text-zinc-400 font-semibold mt-1 flex flex-col gap-4">
          <p>
            Already have an account?{' '}
            <Link to={'/signin'} className="text-brand-violet hover:underline font-bold">
              Log in now
            </Link>
          </p>

          {/* Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink mx-3 text-[9px] font-bold text-zinc-600 uppercase tracking-widest">or continue with</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>
        </div>

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <Link
            to={'/google-auth'}
            className="flex items-center justify-center gap-2.5 rounded-xl border border-white/5 bg-[#0a0b10]/45 p-3.5 text-center text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:border-white/10 active:scale-[0.99] transition-all w-full"
          >
            <img className="h-4 w-4" src={AddGoogleIcon} alt="Google logo" />
            <span>Google</span>
          </Link>

          <Link
            to={'/github-auth'}
            className="flex items-center justify-center gap-2.5 rounded-xl border border-white/5 bg-[#0a0b10]/45 p-3.5 text-center text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:border-white/10 active:scale-[0.99] transition-all w-full"
          >
            <img className="h-4 w-4 filter invert" src={AddGithubIcon} alt="Github logo" />
            <span>Github</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default signin;
