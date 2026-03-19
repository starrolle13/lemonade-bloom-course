// Lemonade Bloom Course — Main Page
// Design: Warm Retro Zine meets Digital Academy
// Layout: Fixed sidebar (280px) + scrollable main content

import { useState, useRef } from "react";
import { modules } from "@/data/courseData";
import { useProgress } from "@/contexts/ProgressContext";
import Sidebar from "@/components/Sidebar";
import ModuleView from "@/components/ModuleView";
import WelcomeHero from "@/components/WelcomeHero";
import { Menu, X, Home, ChevronRight, BookOpen } from "lucide-react";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCourse, setShowCourse] = useState(false);
  const { activeModule, setActiveModule } = useProgress();
  const mainRef = useRef<HTMLDivElement>(null);

  const currentModuleIndex = modules.findIndex(m => m.id === activeModule);
  const currentModule = modules[currentModuleIndex];

  const handleModuleSelect = (moduleId: string) => {
    setActiveModule(moduleId);
    setShowCourse(true);
    setSidebarOpen(false);
    setTimeout(() => {
      mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleNext = () => {
    if (currentModuleIndex < modules.length - 1) {
      handleModuleSelect(modules[currentModuleIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      handleModuleSelect(modules[currentModuleIndex - 1].id);
    }
  };

  const handleStart = () => {
    setShowCourse(true);
    if (!activeModule || activeModule === "") {
      setActiveModule(modules[0].id);
    }
  };

  return (
    <div className="min-h-screen flex h-screen overflow-hidden" style={{ background: '#FEE9CE' }}>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0" style={{ width: '280px' }}>
        <Sidebar
          onModuleSelect={handleModuleSelect}
          isOpen={true}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar
          onModuleSelect={handleModuleSelect}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Top Bar */}
        <header
          className="flex-shrink-0 bg-white/95 backdrop-blur-sm border-b border-[#FEE7DA] px-4 py-3 flex items-center gap-3"
          style={{ boxShadow: '0 1px 8px rgba(208,128,74,0.08)' }}
        >
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[#FEE9CE] transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            {sidebarOpen ? <X size={20} className="text-[#D0804A]" /> : <Menu size={20} className="text-[#D0804A]" />}
          </button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <button
              onClick={() => setShowCourse(false)}
              className="flex items-center gap-1.5 text-[#D0804A] hover:text-[#b86e3a] transition-colors flex-shrink-0"
            >
              <Home size={15} />
              <span className="text-sm font-nunito font-700 hidden sm:inline">Home</span>
            </button>
            {showCourse && currentModule && (
              <>
                <ChevronRight size={14} className="text-[#9b8a7e] flex-shrink-0" />
                <span className="text-sm font-nunito font-600 text-[#6b5a4e] truncate">
                  {currentModule.icon} {currentModule.title}
                </span>
              </>
            )}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {showCourse && (
              <button
                onClick={() => setShowCourse(false)}
                className="hidden sm:flex items-center gap-1.5 text-xs font-nunito font-700 text-[#6b5a4e] hover:text-[#D0804A] transition-colors px-3 py-1.5 rounded-lg hover:bg-[#FEE9CE]"
              >
                <BookOpen size={13} />
                All Modules
              </button>
            )}
            {/* Logo (mobile) */}
            <div className="lg:hidden font-pacifico text-[#D0804A] text-sm">
              LB
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main
          ref={mainRef}
          className="flex-1 overflow-y-auto"
          style={{ background: '#FAFAF8' }}
        >
          {!showCourse ? (
            <WelcomeHero onStart={handleStart} />
          ) : (
            currentModule && (
              <ModuleView
                module={currentModule}
                onNext={handleNext}
                onPrev={handlePrev}
                hasNext={currentModuleIndex < modules.length - 1}
                hasPrev={currentModuleIndex > 0}
              />
            )
          )}
        </main>
      </div>
    </div>
  );
}
