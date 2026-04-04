import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { sidebarVariants } from './gsidebar.variants';
import { cn } from '../../utils';
import { LuChevronLeft, LuStore, LuChevronsUpDown, LuCircleCheck, LuUser, LuSettings, LuLogOut, LuChevronDown } from '../../icons';
import { useGLayout } from '../../context/layout';
import { GPopover, GPopoverTrigger, GPopoverContent } from '../popover/GPopover';

interface GSidebarStoreProps {
  name: string;
  branch: string;
  logo?: string | React.ReactNode;
  collapsed?: boolean;
}

const GSidebarStore: React.FC<GSidebarStoreProps> = ({ name, branch, logo, collapsed }) => {
  return (
    <div className={cn(
      "p-2 rounded-xl border border-stone-100 bg-stone-50/50 hover:bg-stone-100/50 transition-all cursor-pointer group",
      collapsed && "w-12 h-12 flex items-center justify-center p-0"
    )}>
      <div className="flex items-center gap-3">
        {/* Logo/Avatar Area */}
        <div className={cn(
          "h-10 w-10 rounded-lg bg-white shadow-sm border border-stone-100 flex items-center justify-center text-orange-500 shrink-0 overflow-hidden",
          collapsed && "h-9 w-9 rounded-lg"
        )}>
          {logo ? logo : <LuStore size={20} />}
        </div>

        {/* Text Info Area */}
        {!collapsed && (
          <div className="flex-1 min-w-0 overflow-hidden">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest leading-none mb-1">
              {name}
            </p>
            <p className="text-xs font-extrabold text-stone-800 truncate">
              {branch}
            </p>
          </div>
        )}

        {/* Switcher Icon */}
        {!collapsed && (
          <LuChevronsUpDown size={14} className="text-stone-400 group-hover:text-stone-600 transition-colors shrink-0" />
        )}
      </div>
    </div>
  );
};

interface GSidebarUserProps {
  name: string;
  role: string;
  avatar?: string | React.ReactNode;
  status?: "online" | "offline" | "busy";
  collapsed?: boolean;
}

const GSidebarUser: React.FC<GSidebarUserProps> = ({ name, role, avatar, status = "online", collapsed }) => {
  return (
    <div className={cn(
      "p-2 rounded-xl border border-stone-100 bg-white hover:bg-stone-50 transition-all cursor-pointer group",
      collapsed && "w-12 h-12 flex items-center justify-center p-0 border-transparent bg-transparent hover:bg-stone-100"
    )}>
      <div className="flex items-center gap-3">
        {/* Avatar Area */}
        <div className="relative shrink-0">
          <div className={cn(
            "h-10 w-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-400 overflow-hidden",
            collapsed && "h-9 w-9"
          )}>
            {avatar ? (
              typeof avatar === 'string' ? <img src={avatar} alt={name} className="h-full w-full object-cover" /> : avatar
            ) : (
              <LuUser size={20} />
            )}
          </div>
          {/* Status Indicator */}
          <div className={cn(
            "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white",
            status === "online" ? "bg-emerald-500" : status === "busy" ? "bg-amber-500" : "bg-stone-300"
          )} />
        </div>

        {/* User Info Area */}
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-extrabold text-stone-800 truncate leading-none mb-1">
              {name}
            </p>
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest leading-none truncate">
              {role}
            </p>
          </div>
        )}

        {/* Action Icon */}
        {!collapsed && (
          <LuChevronDown size={14} className="text-stone-400 group-hover:text-stone-600 transition-colors shrink-0" />
        )}
      </div>
    </div>
  );
};

interface GSidebarProps {
  children: React.ReactNode;
  collapsed?: boolean;
  onToggle?: () => void;
  logo?: React.ReactNode;
  version?: string;
  footer?: React.ReactNode;
  className?: string;
  activeStore?: {
    id?: string | number;
    name: string;
    branch: string;
    logo?: string | React.ReactNode;
  };
  user?: {
    name: string;
    role: string;
    avatar?: string | React.ReactNode;
    status?: "online" | "offline" | "busy";
  };
  onLogout?: () => void;
  onProfile?: () => void;
}

const GSidebar: React.FC<GSidebarProps> = ({
  children,
  collapsed: propsCollapsed,
  onToggle: propsOnToggle,
  logo,
  version,
  footer,
  className,
  activeStore,
  user,
  onLogout,
  onProfile,
}) => {
  const { collapsed: contextCollapsed, toggleSidebar } = useGLayout();
  const collapsed = propsCollapsed !== undefined ? propsCollapsed : contextCollapsed;
  const onToggle = propsOnToggle || toggleSidebar;

  // Dummy stores for the switcher
  const dummyStores = [
    { id: 1, name: "Agency", branch: "Spark Pixel Team", logo: <div className="text-blue-500 font-black text-lg">S</div> },
    { id: 2, name: "GenPOS", branch: "HQ Jakarta", logo: <div className="text-orange-500 font-black text-lg">G</div> },
    { id: 3, name: "GenPOS", branch: "Bandung Store", logo: <div className="text-emerald-500 font-black text-lg">B</div> },
  ];

  return (
    <>
      <aside className={cn(sidebarVariants({ collapsed }), className)}>
        {/* 1. Header / Brand Logo */}
        <div className={cn(
          "h-20 flex items-center border-b border-gray-50 shrink-0 px-6 overflow-hidden",
          collapsed && "px-3 justify-center"
        )}>
          {logo ? (
            logo
          ) : (
            <div className={cn("flex items-center gap-3", collapsed && "gap-0")}>
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20 shrink-0 flex items-center justify-center">
                <LuStore size={20} strokeWidth={2.5} />
              </div>

              <div className={cn(
                "flex flex-col transition-all duration-300 origin-left",
                collapsed && "scale-0 opacity-0 w-0"
              )}>
                <span className="font-extrabold text-lg tracking-tight text-orange-600 leading-none">
                  Gen<span className="text-gray-900">POS</span>
                </span>
                {version && (
                  <span className="text-[10px] font-bold text-gray-400 mt-0.5 tracking-widest uppercase">
                    v{version}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 2. Store / Branch Switcher with Popover */}
        {activeStore && (
          <GPopover>
            <GPopoverTrigger asChild>
              <div className={cn("mx-3 mt-4 mb-2", collapsed && "mx-auto")}>
                <GSidebarStore
                  name={activeStore.name}
                  branch={activeStore.branch}
                  logo={activeStore.logo}
                  collapsed={collapsed}
                />
              </div>
            </GPopoverTrigger>
            <GPopoverContent
              side={collapsed ? "right" : "right"}
              align="start"
              sideOffset={16}
              className="w-72 p-2 bg-white rounded-2xl shadow-2xl border border-stone-100"
            >
              <div className="p-3 border-b border-stone-50">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest leading-none mb-1">
                  Select Branch
                </p>
                <p className="text-xs text-stone-500">You are currently at {activeStore.branch}</p>
              </div>
              <div className="py-2 space-y-1">
                {dummyStores.map((store) => (
                  <div
                    key={store.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer group hover:bg-stone-50",
                      activeStore.branch === store.branch && "bg-orange-50 shadow-sm border border-orange-100"
                    )}
                  >
                    <div className="h-10 w-10 rounded-lg bg-white border border-stone-100 flex items-center justify-center shadow-sm shrink-0">
                      {store.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest leading-none mb-0.5">
                        {store.name}
                      </p>
                      <p className={cn(
                        "text-xs font-extrabold truncate",
                        activeStore.branch === store.branch ? "text-orange-600" : "text-stone-800"
                      )}>
                        {store.branch}
                      </p>
                    </div>
                    {activeStore.branch === store.branch && (
                      <LuCircleCheck size={16} className="text-orange-500 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-2 p-2 border-t border-stone-50">
                <button className="w-full text-[10px] font-bold text-stone-400 uppercase tracking-widest py-2 hover:text-orange-500 transition-colors">
                  Management Stores
                </button>
              </div>
            </GPopoverContent>
          </GPopover>
        )}

        {/* 3. Navigation Content */}
        <nav className={cn(
          "flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 space-y-1 custom-scrollbar",
          collapsed && "px-0 flex flex-col items-center"
        )}>
          {children}
        </nav>

        {/* 4. Footer / User Profile */}
        <div className={cn(
          "p-3 border-t border-gray-100 shrink-0",
          collapsed && "px-0 flex justify-center"
        )}>
          {user ? (
            <GPopover>
              <GPopoverTrigger asChild>
                <div>
                  <GSidebarUser
                    name={user.name}
                    role={user.role}
                    avatar={user.avatar}
                    status={user.status}
                    collapsed={collapsed}
                  />
                </div>
              </GPopoverTrigger>
              <GPopoverContent
                side={collapsed ? "right" : "top"}
                align={collapsed ? "end" : "center"}
                sideOffset={12}
                className="w-56 p-1.5 bg-white rounded-xl shadow-2xl border border-stone-100"
              >
                <div className="space-y-0.5">
                  <button 
                    onClick={onProfile}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-stone-600 hover:bg-stone-50 hover:text-orange-600 transition-all rounded-lg group"
                  >
                    <LuUser size={16} className="text-stone-400 group-hover:text-orange-500" />
                    My Profile
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-stone-600 hover:bg-stone-50 hover:text-orange-600 transition-all rounded-lg group">
                    <LuSettings size={16} className="text-stone-400 group-hover:text-orange-500" />
                    Settings
                  </button>
                  <div className="h-px bg-stone-50 my-1.5 mx-1" />
                  <button 
                    onClick={onLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-50 transition-all rounded-lg group"
                  >
                    <LuLogOut size={16} />
                    Logout
                  </button>
                </div>
              </GPopoverContent>
            </GPopover>
          ) : (
            footer
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className={cn(
            "absolute -right-3 top-7 w-6 h-6 bg-white border border-gray-100 rounded-full hidden lg:flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-200 transition-all shadow-sm z-10",
            collapsed && "rotate-180"
          )}
        >
          <LuChevronLeft size={14} />
        </button>
      </aside>

      {/* Backdrop for Mobile */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default GSidebar;
export { GSidebar };
