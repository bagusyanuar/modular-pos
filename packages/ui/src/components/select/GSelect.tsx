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
  dropdownIndicatorVariants,
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
  isClearable,
  isSearchable,
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
        isClearable={!!isClearable}
        isSearchable={!!isSearchable}
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
              <LuX size={12} className="text-inherit cursor-pointer" />
            </components.ClearIndicator>
          ),
        }}
        classNames={{
          container: () => twMerge('w-full !border-none !cursor-pointer'),
          control: ({ isFocused }) =>
            twMerge(
              '!border-none !shadow-none !rounded-lg !h-fit !min-h-fit !py-0 !px-0 !text-xs',
              isFocused && '!ring-0 shadow-none !rounded-lg border-orange-500'
            ),
          placeholder: () => twMerge('text-gray-400 text-xs !p-0 !m-0'),
          valueContainer: () =>
            cn(
              inputVariants({
                hasPrefixIcon: !!PrefixIcon,
                isSearchable: !!isSearchable,
              })
            ),
          dropdownIndicator: () =>
            cn(
              dropdownIndicatorVariants({
                hasClearIndicator: !!isClearable,
              })
            ),
          clearIndicator: () => twMerge('!ps-2.5 !pe-2.5 !h-fit'),
          menu: () =>
            twMerge(
              '!rounded-lg !mt-1 !shadow-md !border !border-gray-300 !left-0 !px-1.5 !py-1'
            ),
          input: () => twMerge('!p-0 !m-0 !text-xs'),
          option: ({ isSelected, isFocused }) =>
            twMerge(
              '!cursor-pointer !text-xs !rounded-md transition-colors duration-300 ease-in-out',
              isSelected && '!bg-orange-500 !text-white',
              !isSelected && isFocused && '!bg-orange-100 !text-neutral-700',
              !isSelected && !isFocused && '!text-neutral-700'
            ),
          noOptionsMessage: () => twMerge('!text-xs !text-gray-400'),
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
