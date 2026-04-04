import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid 
} from 'recharts';
import { GStatCard } from '@genpos/ui/statcard';
import { GTypography } from '@genpos/ui/typography';
import { GCard } from '@genpos/ui/card';
import { GChart } from '@genpos/ui/chart';
import { 
  LuTrendingUp, 
  LuShoppingBag, 
  LuUsers, 
  LuTriangleAlert,
  LuLayoutDashboard,
  LuCalendar
} from '@genpos/ui/icons';

// Dummy data for the Sales Overview Chart
const chartData = [
  { name: 'Jan', income: 4500, expense: 2400 },
  { name: 'Feb', income: 5200, expense: 3200 },
  { name: 'Mar', income: 4800, expense: 2100 },
  { name: 'Apr', income: 6100, expense: 4300 },
  { name: 'May', income: 5500, expense: 3800 },
  { name: 'Jun', income: 6700, expense: 4800 },
  { name: 'Jul', income: 7200, expense: 5100 },
  { name: 'Aug', income: 6300, expense: 3900 },
  { name: 'Sep', income: 5800, expense: 4100 },
  { name: 'Oct', income: 7900, expense: 5400 },
  { name: 'Nov', income: 8400, expense: 6200 },
  { name: 'Dec', income: 9800, expense: 7100 },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8 p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white shadow-lg shadow-orange-500/20">
            <LuLayoutDashboard size={24} />
          </div>
          <div>
            <GTypography variant="h3" weight="bold">
              Dashboard Overview
            </GTypography>
            <GTypography variant="muted" className="text-sm">
              29 April, 2024 • Ringkasan performa hari ini.
            </GTypography>
          </div>
        </div>
        
        <div className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-600 shadow-sm">
           <LuCalendar size={16} className="text-orange-500" />
           <span>Last Year (2023)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Chart Area (Sales Overview) */}
        <div className="lg:col-span-2">
          <GCard className="h-full">
            <GCard.Header>
              <div>
                <GCard.Title>Sales Overview</GCard.Title>
                <GTypography variant="h3" weight="bold" className="mt-2 text-orange-600">
                  Rp 134.650.000
                </GTypography>
              </div>
              <div className="flex bg-stone-100 p-1 rounded-lg">
                <button className="px-3 py-1.5 text-xs font-bold bg-white text-orange-600 rounded-md shadow-sm">12 Months</button>
                <button className="px-3 py-1.5 text-xs font-medium text-stone-500">30 days</button>
                <button className="px-3 py-1.5 text-xs font-medium text-stone-500">7 days</button>
              </div>
            </GCard.Header>
            <GCard.Content>
              <GChart height="md">
                <BarChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <GChart.Gradients />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
                  <GChart.Tooltip />
                  <GChart.Legend />
                  <Bar 
                    name="Income" 
                    dataKey="income" 
                    fill="url(#income-gradient)" 
                    radius={[4, 4, 0, 0]} 
                    barSize={12}
                  />
                  <Bar 
                    name="Expense" 
                    dataKey="expense" 
                    fill="url(#expense-gradient)" 
                    radius={[4, 4, 0, 0]} 
                    barSize={12}
                  />
                </BarChart>
              </GChart>
            </GCard.Content>
          </GCard>
        </div>

        {/* Right Column (Side Stats) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
             <GStatCard
                title="Total Pendapatan"
                value="Rp 12.8M"
                variant="primary"
                icon={<LuTrendingUp size={24} />}
                trend={{ value: 12.5, label: 'vs bulan lalu', isUpward: true }}
              />
              
              <GStatCard
                title="Total Transaksi"
                value="142"
                variant="success"
                icon={<LuShoppingBag size={24} />}
                trend={{ value: 8.2, label: 'vs kemarin', isUpward: true }}
                suffix="order"
              />

              <GStatCard
                title="Pelanggan Baru"
                value="24"
                variant="info"
                icon={<LuUsers size={24} />}
                trend={{ value: 4.1, label: 'vs minggu lalu', isUpward: true }}
                suffix="orang"
              />

              <GStatCard
                title="Stok Tipis"
                value="8"
                variant="danger"
                icon={<LuTriangleAlert size={24} />}
                trend={{ value: 2, label: 'perlu restock', isUpward: false }}
                suffix="produk"
              />
          </div>
        </div>
      </div>

      {/* Bottom Row Placeholder */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GCard className="lg:col-span-2 min-h-[350px] flex items-center justify-center text-stone-400 bg-stone-50/50 border-dashed">
          Top Selling Products (Next Phase)
        </GCard>
        <GCard className="min-h-[350px] flex items-center justify-center text-stone-400 bg-stone-50/50 border-dashed">
          Weekly Breakdown (Next Phase)
        </GCard>
      </div>
    </div>
  );
};

export default DashboardPage;
export { DashboardPage };
