import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import navigateBackWhiteIcon from '@/assets/svg/navigate-back-white.svg';
import ModalComponent from '@/components/modal';
import CategoryPill from '@/components/category-pill';
import { categories } from '@/utils/category-colors';

type FormData = {
  title: string;
  authorName: string;
  imageLink: string;
  categories: string[];
  description: string;
  isFeaturedPost: boolean;
};

function AddBlog() {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const navigate = useNavigate();

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const [modal, setmodal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    authorName: '',
    imageLink: '',
    categories: [],
    description: '',
    isFeaturedPost: false,
  });

  const isValidCategory = (category: string): boolean => {
    return formData.categories.length >= 3 && !formData.categories.includes(category);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryClick = (category: string) => {
    if (isValidCategory(category)) return;

    if (formData.categories.includes(category)) {
      setFormData({
        ...formData,
        categories: formData.categories.filter((cat) => cat !== category),
      });
    } else {
      setFormData({
        ...formData,
        categories: [...formData.categories, category],
      });
    }
  };

  const handleselector = () => {
    setFormData({
      ...formData,
      imageLink: selectedImage,
    });
    setmodal(false);
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, isFeaturedPost: !formData.isFeaturedPost });
  };

  const validateFormData = () => {
    if (
      !formData.title ||
      !formData.authorName ||
      !formData.imageLink ||
      !formData.description ||
      formData.categories.length === 0
    ) {
      toast.error('All fields must be filled out.');
      return false;
    }
    const imageLinkRegex = /\.(jpg|jpeg|png|webp)$/i;
    if (!imageLinkRegex.test(formData.imageLink)) {
      toast.error('Image URL must end with .jpg, .jpeg, .webp or .png');
      return false;
    }
    if (formData.categories.length > 3) {
      toast.error('Select up to three categories.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFormData()) {
      try {
        const response = await axios.post(import.meta.env.VITE_API_PATH + '/api/posts/', formData);

        if (response.status === 200) {
          toast.success('Blog post successfully created!');
          navigate('/');
        } else {
          toast.error('Error: ' + response.data.message);
        }
      } catch (err: any) {
        toast.error('Error: ' + err.message);
      }
    }
  };

  function Asterisk() {
    return <span className="text-brand-pink ml-0.5">*</span>;
  }

  return (
    <div className="flex-grow bg-[#090B11] text-zinc-100 min-h-screen px-6 py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header Navigation */}
        <div className="mb-8 flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            <img
              src={navigateBackWhiteIcon}
              className="h-4 w-6 filter invert"
              alt="back"
            />
          </button>
          
          <h2 className="cursor-text text-xl font-extrabold text-white tracking-tight md:text-2xl">
            Create New Post
          </h2>
        </div>

        {/* Glassmorphic Form Card */}
        <div className="rounded-2xl border border-white/5 bg-[#131520]/45 p-6 md:p-8 backdrop-blur-md shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Featured Post Checkbox */}
            <div className="flex items-center">
              <label className="flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="isFeaturedPost"
                  className="h-5 w-5 rounded border-zinc-800 bg-[#0a0b10]/60 text-brand-violet focus:ring-brand-violet/30 cursor-pointer accent-brand-violet"
                  checked={formData.isFeaturedPost}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-3 text-sm font-semibold text-zinc-300">
                  Feature this blog post on the homepage
                </span>
              </label>
            </div>

            {/* Title Input */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block px-1">
                Blog Title <Asterisk />
              </label>
              <input
                type="text"
                name="title"
                placeholder="Travel Bucket List for this Year"
                autoComplete="off"
                className="w-full rounded-xl border border-white/5 bg-[#0a0b10]/50 p-3.5 text-zinc-100 placeholder:text-zinc-600 focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all outline-none"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            {/* Content Textarea */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block px-1">
                Blog Content <Asterisk />
              </label>
              <textarea
                name="description"
                placeholder="Start writing here..."
                rows={6}
                className="w-full rounded-xl border border-white/5 bg-[#0a0b10]/50 p-3.5 text-zinc-100 placeholder:text-zinc-600 focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all outline-none resize-none leading-relaxed"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            {/* Author Input */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block px-1">
                Author Name <Asterisk />
              </label>
              <input
                type="text"
                name="authorName"
                placeholder="Shree Sharma"
                className="w-full rounded-xl border border-white/5 bg-[#0a0b10]/50 p-3.5 text-zinc-100 placeholder:text-zinc-600 focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all outline-none"
                value={formData.authorName}
                onChange={handleInputChange}
              />
            </div>

            {/* Image Link Input */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block px-1">
                Blog Cover Image Link
                <span className="text-[10px] tracking-wide text-zinc-500 font-medium lowercase">
                  &nbsp;(jpg/png/webp URL only)&nbsp;
                </span>
                <Asterisk />
              </label>
              <div className="flex gap-3">
                <input
                  type="url"
                  id="imagelink"
                  name="imageLink"
                  placeholder="https://images.unsplash.com/photo-..."
                  autoComplete="off"
                  className="flex-grow rounded-xl border border-white/5 bg-[#0a0b10]/50 p-3.5 text-zinc-100 placeholder:text-zinc-600 focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/30 transition-all outline-none"
                  value={formData.imageLink}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white hover:bg-white/10 active:scale-95 transition-all w-28 shrink-0"
                  onClick={() => {
                    setmodal(true);
                  }}
                >
                  Pick Image
                </button>
              </div>
            </div>

            {/* Categories Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block px-1">
                Categories
                <span className="text-[10px] tracking-wide text-zinc-500 font-medium lowercase">
                  &nbsp;(select up to 3)&nbsp;
                </span>
                <Asterisk />
              </label>
              <div className="flex flex-wrap gap-2.5 rounded-xl border border-white/5 bg-[#0a0b10]/30 p-4">
                {categories.map((category, index) => (
                  <span key={`${category}-${index}`} onClick={() => handleCategoryClick(category)}>
                    <CategoryPill
                      category={category}
                      selected={formData.categories.includes(category)}
                      disabled={isValidCategory(category)}
                    />
                  </span>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-brand-violet to-brand-indigo hover:from-brand-violet/90 hover:to-brand-indigo/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-brand-violet/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-center w-full"
            >
              Publish Post
            </button>
          </form>
        </div>
      </div>

      <ModalComponent
        selectedImage={selectedImage}
        handleImageSelect={handleImageSelect}
        handleSelector={handleselector}
        setModal={setmodal}
        modal={modal}
      />
    </div>
  );
}

export default AddBlog;
