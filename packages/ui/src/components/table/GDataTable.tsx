import React, { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {
  GTable,
  GTableBody,
  GTableCell,
  GTableHead,
  GTableHeader,
  GTableRow,
} from './GTable';
import { GPagination } from './GPagination';
import { GSkeleton } from '../skeleton/GSkeleton';
import { cn } from '../../utils';

interface GDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  pagination?: boolean;
  pageSizeOptions?: number[];
  initialPageSize?: number;
  isLoading?: boolean;
  loadingElement?: React.ReactNode;
  emptyElement?: React.ReactNode;
}

export function GDataTable<TData, TValue>({
  columns,
  data,
  className,
  pagination = true,
  pageSizeOptions = [5, 10, 15, 20, 50],
  initialPageSize = 10,
  isLoading = false,
  loadingElement,
  emptyElement,
}: GDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: initialPageSize,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPaginationState,
    autoResetPageIndex: false,
    state: {
      sorting,
      rowSelection,
      pagination: paginationState,
    },
  });

  const renderBody = () => {
    // 1. Loading State
    if (isLoading) {
      if (loadingElement) return loadingElement;
      
      return Array.from({ length: 5 }).map((_, i) => (
        <GTableRow key={`loading-${i}`}>
          {columns.map((_, j) => (
            <GTableCell key={`loading-cell-${i}-${j}`}>
              <GSkeleton className="h-5 w-full" />
            </GTableCell>
          ))}
        </GTableRow>
      ));
    }

    // 2. Empty State
    if (data.length === 0) {
      return (
        <GTableRow>
          <GTableCell
            colSpan={columns.length}
            className="h-32 text-center"
          >
            {emptyElement ?? (
              <div className="flex flex-col items-center justify-center space-y-2 text-stone-400">
                <p className="font-medium">Nenhum resultado encontrado.</p>
                <p className="text-xs italic">Tente ajustar seus filtros ou critérios de busca.</p>
              </div>
            )}
          </GTableCell>
        </GTableRow>
      );
    }

    // 3. Normal Data
    return table.getRowModel().rows.map((row) => (
      <GTableRow
        key={row.id}
        data-state={row.getIsSelected() && "selected"}
      >
        {row.getVisibleCells().map((cell) => (
          <GTableCell key={cell.id}>
            {flexRender(
              cell.column.columnDef.cell,
              cell.getContext()
            )}
          </GTableCell>
        ))}
      </GTableRow>
    ));
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm">
        <GTable>
          <GTableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <GTableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <GTableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </GTableHead>
                ))}
              </GTableRow>
            ))}
          </GTableHeader>
          <GTableBody>
            {renderBody()}
          </GTableBody>
        </GTable>
      </div>
      
      {pagination && (
        <GPagination 
          table={table} 
          pageSizeOptions={pageSizeOptions} 
        />
      )}
    </div>
  );
}
