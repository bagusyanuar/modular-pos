import { cva } from 'class-variance-authority';

export const calendarVariants = cva(
  'p-4 bg-white select-none',
  {
    variants: {
      showOutsideDays: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      showOutsideDays: true,
    },
  }
);

export const dayPickerClassNames = {
  months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
  month: 'space-y-4',
  month_caption: 'flex justify-center pt-1 relative items-center',
  caption_label: 'text-sm font-semibold text-gray-900',
  nav: 'space-x-1 flex items-center',
  button_previous: 'absolute top-4 left-3 z-10 h-7 w-7 bg-white p-0 opacity-50 hover:opacity-100 flex items-center justify-center rounded-lg transition-all border border-gray-100 hover:bg-gray-50',
  button_next: 'absolute top-4 right-3 z-10 h-7 w-7 bg-white p-0 opacity-50 hover:opacity-100 flex items-center justify-center rounded-lg transition-all border border-gray-100 hover:bg-gray-50',
  month_grid: 'w-full border-collapse space-y-1',
  weekdays: 'flex w-full',
  weekday: 'text-gray-500 rounded-md w-9 font-medium text-[0.8rem] uppercase tracking-wider',
  week: 'flex w-full mt-2',
  day: 'p-0 text-center text-sm focus-within:relative focus-within:z-20 group',
  day_button: 'h-9 w-9 p-0 font-normal rounded-lg transition-all flex items-center justify-center cursor-pointer disabled:opacity-50 hover:bg-orange-50 hover:text-orange-600 group-aria-selected:bg-orange-500 group-aria-selected:text-white group-aria-selected:hover:!bg-orange-600 group-aria-selected:hover:!text-white',
  range_start: 'day-range-start',
  range_end: 'day-range-end',
  selected: '',
  today: 'bg-orange-50 text-orange-600 font-bold',
  outside: 'text-gray-400 opacity-50',
  disabled: 'text-gray-400 opacity-50 cursor-not-allowed',
  range_middle: 'aria-selected:!bg-orange-50 aria-selected:!text-orange-600',
  hidden: 'invisible',
};
