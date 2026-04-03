import React from 'react';
import { Table } from '@tanstack/react-table';
import { 
  LuChevronLeft, 
  LuChevronRight, 
  LuChevronsLeft, 
  LuChevronsRight 
} from 'react-icons/lu';
import { GButton } from '../button/GButton';
import { cn } from '../../utils';

interface GPaginationProps<TData> {
  table: Table<TData>;
  className?: string;
  pageSizeOptions?: number[];
}

export function GPagination<TData>({
  table,
  className,
  pageSizeOptions = [5, 10, 15, 20, 50],
}: GPaginationProps<TData>) {
  const rowCount = table.getFilteredRowModel().rows.length;
  const pageCount = table.getPageCount();
  const { pageSize, pageIndex } = table.getState().pagination;
  
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min(startRow + pageSize - 1, rowCount);

  // Pagination logic to generate range like [1, 2, '...', 9, 10]
  const getPageRange = () => {
    const range: (number | string)[] = [];
    const delta = 1; // Number of pages to show around current page
    
    for (let i = 0; i < pageCount; i++) {
       if (
         i === 0 || // First page
         i === pageCount - 1 || // Last page
         (i >= pageIndex - delta && i <= pageIndex + delta) // Current window
       ) {
         range.push(i + 1);
       } else if (
         (i === pageIndex - delta - 1) || 
         (i === pageIndex + delta + 1)
       ) {
         range.push('...');
       }
    }

    // Filter duplicates and clean up
    return range.filter((item, index) => range.indexOf(item) === index);
  };

  const pageRange = getPageRange();

  return (
    <div className={cn("flex flex-col md:flex-row items-center justify-between px-2 py-4 gap-4", className)}>
      <div className="flex items-center gap-2 text-stone-500 text-[12px]">
        <span>Rows per page</span>
        <select
          value={pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="bg-white border border-stone-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500/20 cursor-pointer"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <GButton
            variant="ghost"
            className="h-8 w-8 p-0 disabled:opacity-20 disabled:bg-transparent"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <LuChevronsLeft className="h-4 w-4" />
          </GButton>
          <GButton
            variant="ghost"
            className="h-8 w-8 p-0 disabled:opacity-20 disabled:bg-transparent"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <LuChevronLeft className="h-4 w-4" />
          </GButton>

          <div className="flex items-center gap-1 mx-1">
            {pageRange.map((page, idx) => {
              if (page === '...') {
                return (
                  <span key={`ellipsis-${idx}`} className="px-2 text-stone-400 text-xs tracking-widest font-bold">
                    ...
                  </span>
                );
              }

              const isSelected = pageIndex === (page as number) - 1;

              return (
                <button
                  key={`page-${page}`}
                  type="button"
                  onClick={() => table.setPageIndex((page as number) - 1)}
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold transition-all duration-200 shadow-sm",
                    isSelected 
                      ? "bg-orange-500 text-white ring-2 ring-orange-100 scale-110" 
                      : "bg-white border border-stone-100 text-stone-600 hover:border-orange-200 hover:text-orange-500 active:scale-95"
                  )}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <GButton
            variant="ghost"
            className="h-8 w-8 p-0 disabled:opacity-20 disabled:bg-transparent"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <LuChevronRight className="h-4 w-4" />
          </GButton>
          <GButton
            variant="ghost"
            className="h-8 w-8 p-0 disabled:opacity-20 disabled:bg-transparent"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <LuChevronsRight className="h-4 w-4" />
          </GButton>
        </div>

        <div className="text-stone-400 text-[11px] font-medium min-w-[80px] text-right">
          {startRow}-{endRow} of {rowCount}
        </div>
      </div>
    </div>
  );
}
