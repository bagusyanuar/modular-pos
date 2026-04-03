import * as React from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { LuCalendar as CalendarIcon } from 'react-icons/lu';
import { cn } from '../../utils';
import { GButton } from '../button';
import { GCalendar } from '../calendar';
import { GPopover, GPopoverContent, GPopoverTrigger } from '../popover';

interface GDateRangePickerProps {
  date?: DateRange;
  setDate: (date: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function GDateRangePicker({
  date,
  setDate,
  placeholder = 'Pilih rentang tanggal',
  className,
}: GDateRangePickerProps) {
  return (
    <div className={cn('grid gap-2', className)}>
      <GPopover>
        <GPopoverTrigger asChild>
          <GButton
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal border-gray-200 hover:border-orange-500 hover:bg-orange-50/10 transition-all',
              !date && 'text-gray-500'
            )}
            prefixIcon={CalendarIcon}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </GButton>
        </GPopoverTrigger>
        <GPopoverContent className="w-auto p-0" align="start">
          <GCalendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </GPopoverContent>
      </GPopover>
    </div>
  );
}
