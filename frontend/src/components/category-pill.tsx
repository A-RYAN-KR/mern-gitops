import { getCategoryColors } from '@/utils/category-colors';
import { twMerge } from 'tailwind-merge';

interface CategoryPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  category: string;
  selected?: boolean;
  disabled?: boolean;
}

export default function CategoryPill({ category, disabled, selected = false }: CategoryPillProps) {
  const disabledColor: string =
    'opacity-40 bg-zinc-800/20 border-zinc-800 text-zinc-600 cursor-not-allowed';

  const [defaultColor, selectedColor]: [string, string] = getCategoryColors(category);

  const getSelectedColor = (selected: boolean): string => {
    return selected ? selectedColor : defaultColor;
  };

  return (
    <span
      className={twMerge(
        'inline-flex items-center cursor-pointer rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 select-none border border-transparent',
        disabled ? disabledColor : getSelectedColor(selected)
      )}
    >
      {category}
    </span>
  );
}
