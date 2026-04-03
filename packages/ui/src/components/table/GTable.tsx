import React from 'react';
import { cn } from '../../utils';
import { tableVariants, headerVariants, cellVariants, rowVariants } from './table.variants';

const GTable = React.forwardRef<HTMLTableElement, React.TableHTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn(tableVariants(), className)} {...props} />
    </div>
  )
);
GTable.displayName = 'GTable';

const GTableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('[&_tr]:border-0', className)} {...props} />
  )
);
GTableHeader.displayName = 'GTableHeader';

const GTableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
  )
);
GTableBody.displayName = 'GTableBody';

const GTableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(rowVariants(), className)}
      {...props}
    />
  )
);
GTableRow.displayName = 'GTableRow';

const GTableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(headerVariants(), className)}
      {...props}
    />
  )
);
GTableHead.displayName = 'GTableHead';

const GTableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(cellVariants(), className)}
      {...props}
    />
  )
);
GTableCell.displayName = 'GTableCell';

export {
  GTable,
  GTableHeader,
  GTableBody,
  GTableRow,
  GTableHead,
  GTableCell,
};
