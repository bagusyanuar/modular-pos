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
import { cn } from '../../utils';

interface GDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  pagination?: boolean;
  pageSizeOptions?: number[];
  initialPageSize?: number;
}

export function GDataTable<TData, TValue>({
  columns,
  data,
  className,
  pagination = true,
  pageSizeOptions = [5, 10, 15, 20, 50],
  initialPageSize = 10,
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
    autoResetPageIndex: false, // Prevents jumping to page 1 on state changes
    state: {
      sorting,
      rowSelection,
      pagination: paginationState,
    },
  });

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm">
        <GTable>
          <GTableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <GTableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <GTableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </GTableHead>
                  );
                })}
              </GTableRow>
            ))}
          </GTableHeader>
          <GTableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
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
              ))
            ) : (
              <GTableRow>
                <GTableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-stone-400 font-medium"
                >
                  Nenhum resultado encontrado.
                </GTableCell>
              </GTableRow>
            )}
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
