import React from 'react';
import { GCard } from '@genpos/ui/card';
import { GSkeleton } from '@genpos/ui/skeleton';
import { GTypography } from '@genpos/ui/typography';
import { LuLayoutDashboard, LuCalendar } from '@genpos/ui/icons';

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8 p-8">
      {/* 1. Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
            <LuLayoutDashboard size={28} />
          </div>
          <div>
            <GTypography variant="h3" weight="bold" className="tracking-tight text-stone-800">
              Dashboard Overview
            </GTypography>
            <GTypography variant="muted" className="text-sm font-medium">
              Real-time summary of your store performance.
            </GTypography>
          </div>
        </div>
        
        <div className="flex items-center gap-2 rounded-xl border border-stone-100 bg-white px-4 py-2 text-sm font-bold text-stone-600 shadow-sm">
           <LuCalendar size={18} className="text-orange-500" />
           <span>Auto Update</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        
        {/* LEFT COLUMN (8/12) */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* 2. SUMMARY CARDS (OVERVIEW) */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <GCard key={i} className="p-5 border-stone-100">
                <GSkeleton className="h-3 w-2/3 mb-4 rounded-full" />
                <GSkeleton className="h-8 w-full rounded-lg" />
              </GCard>
            ))}
          </div>

          {/* 3. DAILY ORDERS (CHART SECTION) */}
          <GCard>
            <GCard.Header>
              <div>
                <GCard.Title>Daily Orders</GCard.Title>
                <GTypography variant="muted" className="text-xs mt-1">Transaction trends this week</GTypography>
              </div>
              <GSkeleton className="h-8 w-24 rounded-lg" />
            </GCard.Header>
            <GCard.Content>
              <GSkeleton className="h-[350px] w-full rounded-xl" />
              <div className="mt-6 flex justify-between">
                 {[1, 2, 3, 4, 5, 6, 7].map(i => (
                   <GSkeleton key={i} className="h-3 w-10 rounded-full" />
                 ))}
              </div>
            </GCard.Content>
          </GCard>

          {/* BOTTOM MAIN GRID (Sub-sections 5 & 6) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* 5. TOP SELLING PRODUCTS */}
             <GCard>
                <GCard.Header>
                  <GCard.Title>Top Selling Products</GCard.Title>
                </GCard.Header>
                <GCard.Content className="space-y-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between">
                          <GSkeleton className="h-4 w-1/3" />
                          <GSkeleton className="h-4 w-12" />
                       </div>
                       <GSkeleton className="h-2 w-full rounded-full" />
                    </div>
                  ))}
                </GCard.Content>
             </GCard>

             {/* 6. RECENT TRANSACTIONS */}
             <GCard>
                <GCard.Header>
                  <GCard.Title>Recent Transactions</GCard.Title>
                </GCard.Header>
                <GCard.Content className="space-y-6">
                   {[1, 2, 3, 4, 5].map(i => (
                     <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                           <GSkeleton className="h-10 w-10 rounded-lg" />
                           <div className="space-y-1.5 flex-1">
                              <GSkeleton className="h-3 w-1/2" />
                              <GSkeleton className="h-2 w-1/4" />
                           </div>
                        </div>
                        <GSkeleton className="h-4 w-16" />
                     </div>
                   ))}
                </GCard.Content>
             </GCard>
          </div>
        </div>

        {/* RIGHT COLUMN (4/12) */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          
          {/* 4. RIGHT SIDEBAR (QUICK STATS) */}
          <div className="space-y-6">
             <GTypography weight="bold" className="text-stone-800 text-lg">Quick Stats</GTypography>
             
             {/* Cashiers & Products Side-by-side or Stacked */}
             <div className="grid grid-cols-1 gap-4">
                <GCard className="border-l-4 border-l-orange-500">
                  <div className="flex items-center gap-4">
                     <GSkeleton className="h-14 w-14 rounded-xl" circle={false} />
                     <div className="space-y-2 flex-1">
                        <GSkeleton className="h-3 w-1/2" />
                        <GSkeleton className="h-6 w-1/3" />
                     </div>
                  </div>
                </GCard>

                <GCard className="border-l-4 border-l-stone-800">
                  <div className="flex items-center gap-4">
                     <GSkeleton className="h-14 w-14 rounded-xl" circle={false} />
                     <div className="space-y-2 flex-1">
                        <GSkeleton className="h-3 w-1/2" />
                        <GSkeleton className="h-6 w-1/3" />
                     </div>
                  </div>
                </GCard>
             </div>

             {/* Payment Methods Chart Placeholder */}
             <GCard>
                <GCard.Header>
                   <GCard.Title>Payment Methods</GCard.Title>
                </GCard.Header>
                <GCard.Content>
                   <div className="flex items-end justify-between h-32 gap-3">
                      <GSkeleton className="h-2/3 w-full rounded-t-lg" />
                      <GSkeleton className="h-1/2 w-full rounded-t-lg" />
                      <GSkeleton className="h-full w-full rounded-t-lg" />
                      <GSkeleton className="h-1/3 w-full rounded-t-lg" />
                   </div>
                   <div className="mt-4 grid grid-cols-4 gap-2">
                       {[1, 2, 3, 4].map(i => <GSkeleton key={i} className="h-2 w-full" />)}
                   </div>
                </GCard.Content>
             </GCard>
          </div>

          {/* 7. LOW STOCK ALERT */}
          <GCard className="bg-rose-50/30 border-rose-100">
             <GCard.Header>
                <GCard.Title className="text-rose-700 flex items-center gap-2">
                   Low Stock Alert
                   <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">3</span>
                </GCard.Title>
             </GCard.Header>
             <GCard.Content className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-white border border-rose-50">
                     <GSkeleton className="h-4 w-1/2" />
                     <GSkeleton className="h-4 w-8 rounded-full" />
                  </div>
                ))}
             </GCard.Content>
          </GCard>

        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
export { DashboardPage };
