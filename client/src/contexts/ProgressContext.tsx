import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { modules } from "@/data/courseData";

interface ProgressContextType {
  completedSteps: Set<string>;
  completedModules: Set<string>;
  activeModule: string;
  toggleStep: (stepId: string) => void;
  setActiveModule: (moduleId: string) => void;
  getModuleProgress: (moduleId: string) => number;
  getTotalProgress: () => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("lb_completed_steps");
      return saved ? new Set<string>(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set();
    }
  });

  const [activeModule, setActiveModuleState] = useState<string>("welcome");

  const completedModules = new Set(
    modules
      .filter(m => m.steps.every(s => completedSteps.has(s.id)))
      .map(m => m.id)
  );

  useEffect(() => {
    localStorage.setItem("lb_completed_steps", JSON.stringify(Array.from(completedSteps)));
  }, [completedSteps]);

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => {
      const next = new Set(prev);
      if (next.has(stepId)) {
        next.delete(stepId);
      } else {
        next.add(stepId);
      }
      return next;
    });
  };

  const setActiveModule = (moduleId: string) => {
    setActiveModuleState(moduleId);
  };

  const getModuleProgress = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return 0;
    const completed = module.steps.filter(s => completedSteps.has(s.id)).length;
    return Math.round((completed / module.steps.length) * 100);
  };

  const getTotalProgress = () => {
    const totalSteps = modules.reduce((acc, m) => acc + m.steps.length, 0);
    const completed = Array.from(completedSteps).length;
    return Math.round((completed / totalSteps) * 100);
  };

  return (
    <ProgressContext.Provider value={{
      completedSteps,
      completedModules,
      activeModule,
      toggleStep,
      setActiveModule,
      getModuleProgress,
      getTotalProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
