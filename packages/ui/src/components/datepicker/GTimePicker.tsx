import * as React from 'react';
import { LuClock } from 'react-icons/lu';
import { cn } from '../../utils';
import { GPopover, GPopoverContent, GPopoverTrigger } from '../popover';

export interface GTimePickerProps {
  value?: string; // Format "HH:mm"
  onChange?: (time: string) => void;
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
}

export const GTimePicker = React.forwardRef<HTMLButtonElement, GTimePickerProps>(
  ({ className, containerClassName, value, onChange, disabled }, ref) => {
    const defaultHours = value ? value.split(':')[0] : '00';
    const defaultMinutes = value ? value.split(':')[1] : '00';

    const [isOpen, setIsOpen] = React.useState(false);

    // Generate 00-23
    const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    // Generate 00-59
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

    const handleHourSelect = (h: string) => {
      onChange?.(`${h}:${defaultMinutes}`);
    };

    const handleMinuteSelect = (m: string) => {
      onChange?.(`${defaultHours}:${m}`);
    };

    return (
      <div className={cn('relative w-full', containerClassName)}>
        <GPopover open={isOpen} onOpenChange={setIsOpen}>
          <GPopoverTrigger asChild>
            <button
              ref={ref}
              type="button"
              disabled={disabled}
              className={cn(
                'flex w-full h-10 items-center justify-start rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent',
                disabled && 'cursor-not-allowed opacity-50 bg-gray-50',
                className
              )}
            >
              <LuClock className="mr-2 h-4 w-4 text-gray-500 shrink-0" />
              <span className={cn('flex-1 text-left', !value && 'text-gray-500')}>
                {value || 'Pilih Waktu'}
              </span>
            </button>
          </GPopoverTrigger>
          <GPopoverContent className="w-auto p-0 flex rounded-xl border border-gray-100 overflow-hidden shadow-xl" align="start">
            <div className="flex h-56 divide-x divide-gray-100 bg-white">
              {/* Kolom Jam */}
              <div className="w-16 overflow-y-auto px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-1">
                {hours.map((h) => (
                  <button
                    key={`h-${h}`}
                    onClick={() => handleHourSelect(h)}
                    className={cn(
                      'w-full py-2 my-0.5 rounded-md text-sm text-center transition-all hover:bg-orange-50 hover:text-orange-600',
                      defaultHours === h && 'bg-orange-500 text-white font-bold hover:bg-orange-600 hover:text-white'
                    )}
                  >
                    {h}
                  </button>
                ))}
              </div>
              {/* Kolom Menit */}
              <div className="w-16 overflow-y-auto px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-1">
                {minutes.map((m) => (
                  <button
                    key={`m-${m}`}
                    onClick={() => handleMinuteSelect(m)}
                    className={cn(
                      'w-full py-2 my-0.5 rounded-md text-sm text-center transition-all hover:bg-orange-50 hover:text-orange-600',
                      defaultMinutes === m && 'bg-orange-500 text-white font-bold hover:bg-orange-600 hover:text-white'
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </GPopoverContent>
        </GPopover>
      </div>
    );
  }
);
GTimePicker.displayName = 'GTimePicker';
