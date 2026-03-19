// Lemonade Bloom Course — Sidebar Navigation
// Design: Warm Retro Zine — fixed left sidebar with module list and progress

import { useProgress } from "@/contexts/ProgressContext";
import { modules } from "@/data/courseData";
import { CheckCircle2, ChevronRight, RotateCcw } from "lucide-react";

interface SidebarProps {
  onModuleSelect: (moduleId: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ onModuleSelect, isOpen = true, onClose }: SidebarProps) {
  const { activeModule, completedModules, getModuleProgress, getTotalProgress } = useProgress();

  const totalProgress = getTotalProgress();
  const completedCount = completedModules.size;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40 bg-white border-r border-[#FEE7DA]
          flex flex-col transition-transform duration-300 ease-in-out
          w-[280px]
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:h-screen lg:z-auto
        `}
        style={{ boxShadow: '2px 0 20px rgba(208,128,74,0.08)' }}
      >
        {/* Logo Header */}
        <div className="px-5 pt-5 pb-4 border-b border-[#FEE7DA]">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #D0804A, #e8955e)', boxShadow: '0 2px 8px rgba(208,128,74,0.3)' }}
            >
              LB
            </div>
            <div>
              <div className="font-pacifico text-[#D0804A] text-base leading-tight">Lemonade Bloom</div>
              <div className="text-xs text-[#6b5a4e] font-nunito font-600">Walmart Seller Course</div>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="p-3 rounded-xl" style={{ background: '#FEF9F5' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-nunito font-700 text-[#6b5a4e]">Course Progress</span>
              <span className="text-xs font-nunito font-800 text-[#D0804A]">{totalProgress}%</span>
            </div>
            <div className="lb-progress-bar mb-2">
              <div className="lb-progress-fill" style={{ width: `${totalProgress}%` }} />
            </div>
            <div className="text-xs text-[#9b8a7e] font-nunito">
              {completedCount} of {modules.length} modules done
            </div>
          </div>
        </div>

        {/* Module List */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <div className="text-xs font-nunito font-700 text-[#9b8a7e] uppercase tracking-wide px-2 mb-2">
            Course Modules
          </div>
          <div className="space-y-0.5">
            {modules.map((module, index) => {
              const isActive = activeModule === module.id;
              const isCompleted = completedModules.has(module.id);
              const progress = getModuleProgress(module.id);
              const isInProgress = progress > 0 && progress < 100;

              return (
                <button
                  key={module.id}
                  onClick={() => {
                    onModuleSelect(module.id);
                    onClose?.();
                  }}
                  className={`w-full text-left lb-sidebar-item ${isActive ? 'active' : ''}`}
                >
                  {/* Module Status Icon */}
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
                    {isCompleted ? (
                      <CheckCircle2 size={18} className="text-[#D0804A]" />
                    ) : isActive ? (
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-800"
                        style={{ background: '#D0804A' }}
                      >
                        {module.number}
                      </div>
                    ) : (
                      <div
                        className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-700"
                        style={{
                          borderColor: isInProgress ? '#D0804A' : '#e8ddd8',
                          color: isInProgress ? '#D0804A' : '#9b8a7e',
                        }}
                      >
                        {module.number}
                      </div>
                    )}
                  </div>

                  {/* Module Info */}
                  <div className="flex-1 min-w-0">
                    <div className={`text-[0.8125rem] font-nunito font-700 truncate leading-tight ${
                      isActive ? 'text-[#D0804A]' : isCompleted ? 'text-[#9b8a7e]' : 'text-[#3d3028]'
                    }`}>
                      {module.title}
                    </div>
                    {isInProgress && (
                      <div className="mt-1 lb-progress-bar" style={{ height: '3px' }}>
                        <div className="lb-progress-fill" style={{ width: `${progress}%`, height: '3px' }} />
                      </div>
                    )}
                    {isCompleted && (
                      <div className="text-[0.6875rem] text-[#D0804A] font-nunito font-600 opacity-70">
                        ✓ Completed
                      </div>
                    )}
                  </div>

                  {/* Active Arrow */}
                  {isActive && (
                    <ChevronRight size={14} className="flex-shrink-0 text-[#D0804A]" />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-[#FEE7DA]">
          <div className="text-center">
            <div className="font-pacifico text-[#D0804A] text-xs mb-0.5">Lemonade Bloom</div>
            <div className="text-[0.6875rem] text-[#9b8a7e] font-nunito">
              Walmart Seller Course © 2025
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
