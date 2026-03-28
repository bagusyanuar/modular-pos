import Select, {
  type Props as Select2Props,
  type GroupBase,
  components,
} from 'react-select';
import { twMerge } from 'tailwind-merge';
import {
  containerVariants,
  inputVariants,
  iconContainerVariants,
} from './gselect.variants';
import { cn } from '../../utils';
import { LuChevronDown, LuX } from 'react-icons/lu';
import type { IconType } from 'react-icons';

interface SelectProps<OptionType> extends Select2Props<
  OptionType,
  false,
  GroupBase<OptionType>
> {
  className?: string;
  isError?: boolean;
  prefixIcon?: IconType;
}

const GSelect = <OptionType,>({
  className,
  prefixIcon: PrefixIcon,
  isError = false,
  ...props
}: SelectProps<OptionType>) => {
  return (
    <div
      className={cn(
        containerVariants({
          isError,
        }),
        className
      )}
    >
      {PrefixIcon && (
        <div className={cn(iconContainerVariants())}>
          <PrefixIcon size={14} />
        </div>
      )}
      <Select<OptionType, false, GroupBase<OptionType>>
        {...props}
        components={{
          DropdownIndicator: (props) => (
            <components.DropdownIndicator {...props}>
              <LuChevronDown
                size={14}
                className="text-inherit cursor-pointer"
              />
            </components.DropdownIndicator>
          ),
          ClearIndicator: (props) => (
            <components.ClearIndicator {...props}>
              <LuX size={14} className="text-inherit cursor-pointer" />
            </components.ClearIndicator>
          ),
        }}
        classNames={{
          container: ({ isFocused }) => twMerge('w-full !border-none'),
          control: ({ isFocused }) =>
            twMerge(
              '!border-none !rounded-lg !h-fit !min-h-fit !py-0 !px-0 !text-xs',
              isFocused && '!ring-0 shadow-none !rounded-lg border-orange-500'
            ),
          placeholder: () => twMerge('text-gray-400 text-xs !p-0 !m-0'),
          valueContainer: () =>
            cn(inputVariants({ hasPrefixIcon: !!PrefixIcon })),
          dropdownIndicator: () => twMerge('!p-0 !h-fit'),
          menu: () => twMerge('!rounded-lg !mt-1 !shadow-md !border !border-gray-100'),
          input: () => twMerge('!p-0 !m-0 !text-xs'),
        }}
        styles={{
          container: (provided) => ({
            ...provided,
            height: 'fit-content',
            position: 'static',
          }),
          indicatorSeparator: () => ({ display: 'none' }),
        }}
      />
    </div>
  );
};

export default GSelect;
