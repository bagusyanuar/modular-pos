import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { cn } from '../../utils';
import { dayPickerClassNames } from './gcalendar.variants';

export type GCalendarProps = React.ComponentProps<typeof DayPicker>;

function GCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: GCalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3 relative', className)}
      classNames={{
        ...dayPickerClassNames,
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          if (orientation === 'left') return <LuChevronLeft className="h-4 w-4" />;
          return <LuChevronRight className="h-4 w-4" />;
        },
      }}
      {...props}
    />
  );
}
GCalendar.displayName = 'GCalendar';

export { GCalendar };
