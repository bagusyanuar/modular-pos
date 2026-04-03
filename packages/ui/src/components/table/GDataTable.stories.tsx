import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import { GDataTable } from './GDataTable';
import { GBadge } from '../badge/GBadge';
import { LuCircleCheck, LuClock, LuEllipsisVertical, LuRotateCw, LuCircleX } from 'react-icons/lu';

const meta: Meta<typeof GDataTable> = {
  title: 'Components/Table/GDataTable',
  component: GDataTable,
  argTypes: {
    pagination: { control: 'boolean' },
    pageSizeOptions: { control: 'object' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GDataTable>;

type Payment = {
  id: string;
  title: string;
  category: string;
  author: { name: string; avatar?: string };
  scope: string;
  votes: number;
  status: 'pending' | 'implemented' | 'rejected' | 'voting';
  date: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-stone-300 text-orange-600 focus:ring-orange-500"
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-stone-300 text-orange-600 focus:ring-orange-500"
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(!!e.target.checked)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <span className="font-medium text-stone-400">#{row.getValue('id')}</span>,
  },
  {
    accessorKey: 'title',
    header: 'Título',
    cell: ({ row }) => <span className="font-bold text-stone-700">{row.getValue('title')}</span>,
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row }) => <span className="text-stone-600">{row.getValue('category')}</span>,
  },
  {
    accessorKey: 'author',
    header: 'Autor',
    cell: ({ row }) => {
      const author = row.original.author;
      return (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-linear-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-white shadow-sm overflow-hidden">
             {author.avatar ? <img src={author.avatar} alt="" /> : author.name.charAt(0)}
          </div>
          <span className="text-stone-600 text-[13px]">{author.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'scope',
    header: 'Âmbito',
    cell: ({ row }) => (
      <GBadge variant="outline" className="bg-stone-50 border-stone-100 text-stone-600 font-medium">
        {row.getValue('scope')}
      </GBadge>
    ),
  },
  {
    accessorKey: 'votes',
    header: 'Votos',
    cell: ({ row }) => <span className="font-medium text-stone-700">{row.getValue('votes')}</span>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      switch (status) {
        case 'implemented':
          return <GBadge variant="success" icon={<LuCircleCheck className="h-3 w-3" />}>Implemented</GBadge>;
        case 'rejected':
          return <GBadge variant="error" icon={<LuCircleX className="h-3 w-3" />}>Rejeitada</GBadge>;
        case 'voting':
          return <GBadge variant="warning" icon={<LuRotateCw className="h-3 w-3" />}>Em votação</GBadge>;
        default:
          return <GBadge icon={<LuClock className="h-3 w-3" />}>Em espera</GBadge>;
      }
    },
  },
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row }) => <span className="text-stone-500">{row.getValue('date')}</span>,
  },
  {
    id: 'actions',
    header: 'Ação',
    cell: () => <LuEllipsisVertical className="h-4 w-4 text-stone-400 cursor-pointer hover:text-stone-600" />,
  },
];

const largeData = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1).padStart(3, '0'),
  title: `Project Proposal #${i + 1}`,
  category: i % 2 === 0 ? 'Educação' : 'Formação',
  author: { name: i % 3 === 0 ? 'Maria Tembe' : 'João Machava' },
  scope: i % 4 === 0 ? 'Governamental' : 'Partidário',
  votes: Math.floor(Math.random() * 500),
  status: (['pending', 'implemented', 'rejected', 'voting'][i % 4]) as any,
  date: '23/02/2025',
}));

export const Default: Story = {
  args: {
    columns: columns as any,
    data: largeData.slice(0, 15),
  },
};

export const LargeDataset: Story = {
  args: {
    columns: columns as any,
    data: largeData,
    initialPageSize: 5,
    pageSizeOptions: [5, 10, 15, 20],
  },
};
