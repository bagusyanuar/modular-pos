import * as React from 'react';
import { format } from 'date-fns';
import { LuCalendar as CalendarIcon } from 'react-icons/lu';
import { cn } from '../../utils';
import { GButton } from '../button';
import { GCalendar } from '../calendar';
import { GPopover, GPopoverContent, GPopoverTrigger } from '../popover';
import { GTimePicker } from './GTimePicker';

interface GDateTimePickerProps {
  date?: Date;
  setDate: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function GDateTimePicker({
  date,
  setDate,
  placeholder = 'Pilih tanggal & waktu',
  className,
}: GDateTimePickerProps) {

  // Helper to get HH:mm from Date
  const timeValue = React.useMemo(() => {
    if (!date) return '';
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }, [date]);

  const handleDateSelect = (newDate: Date | undefined) => {
    if (!newDate) {
      setDate(undefined);
      return;
    }
    // Jika tanggal berubah tapi kita punya waktu yang sudah di-set sebelumnya, pertahankan waktunya
    if (date) {
      newDate.setHours(date.getHours());
      newDate.setMinutes(date.getMinutes());
    } else {
      // Waktu default saat tanggal baru dipilih adalah waktu saat ini
      const now = new Date();
      newDate.setHours(now.getHours());
      newDate.setMinutes(now.getMinutes());
    }
    setDate(newDate);
  };

  const handleTimeChange = (timeStr: string) => {
    if (!timeStr) return; // ignore empty clear unless we want to reset to 00:00
    
    // Jika belum ada tanggal, pakai hri ini
    const newDate = date ? new Date(date) : new Date();
    
    const parts = timeStr.split(':');
    const hours = Number(parts[0]) || 0;
    const minutes = Number(parts[1]) || 0;
    
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    
    setDate(newDate);
  };

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
          {date ? format(date, 'MMM dd, yyyy - HH:mm') : <span>{placeholder}</span>}
        </GButton>
      </GPopoverTrigger>
      <GPopoverContent className="w-auto p-0" align="start">
        <GCalendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
        <div className="border-t border-gray-100 p-3 bg-gray-50/50 rounded-b-2xl">
          <GTimePicker
            value={timeValue}
            onChange={handleTimeChange}
            disabled={!date}
          />
        </div>
      </GPopoverContent>
    </GPopover>
  );
}
