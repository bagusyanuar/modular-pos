import * as React from 'react';
import { format } from 'date-fns';
import { LuCalendar as CalendarIcon } from 'react-icons/lu';
import { cn } from '../../utils';
import { GButton } from '../button';
import { GCalendar } from '../calendar';
import { GPopover, GPopoverContent, GPopoverTrigger } from '../popover';

interface GDatePickerProps {
  date?: Date;
  setDate: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function GDatePicker({
  date,
  setDate,
  placeholder = 'Pilih tanggal',
  className,
}: GDatePickerProps) {
  return (
    <GPopover>
      <GPopoverTrigger asChild>
        <GButton
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal border-gray-200 hover:border-orange-500 hover:bg-orange-50/10 transition-all',
            !date && 'text-gray-500',
            className
          )}
          prefixIcon={CalendarIcon}
        >
          {date ? format(date, 'PPP') : <span>{placeholder}</span>}
        </GButton>
      </GPopoverTrigger>
      <GPopoverContent className="w-auto p-0" align="start">
        <GCalendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </GPopoverContent>
    </GPopover>
  );
}
