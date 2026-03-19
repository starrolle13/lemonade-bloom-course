// Lemonade Bloom Course — Module View
// Design: Warm Retro Zine — card-based step layout with progress tracking
// Special interactive components injected for specific modules

import { useState } from "react";
import { Module, Step } from "@/data/courseData";
import { useProgress } from "@/contexts/ProgressContext";
import {
  CheckCircle2, Circle, ChevronDown, ChevronUp,
  AlertCircle, Lightbulb, Play,
  CheckSquare
} from "lucide-react";
import PaymentDecisionTree from "./PaymentDecisionTree";
import SKUFormatter from "./SKUFormatter";
import ProfitCalculator from "./ProfitCalculator";
import ServicesSection from "./ServicesSection";

interface ModuleViewProps {
  module: Module;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

// Video placeholder component
function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="lb-video-placeholder mb-8">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
        style={{ background: 'rgba(208,128,74,0.15)' }}
      >
        <Play size={28} className="text-[#D0804A] ml-1" />
      </div>
      <div className="font-nunito font-800 text-[#D0804A] text-lg">{title}</div>
      <div className="text-sm text-[#6b5a4e] font-nunito mt-1">
        AI-generated video coming soon
      </div>
      <div className="mt-3 lb-tag">
        <Play size={10} />
        Video Placeholder
      </div>
    </div>
  );
}

// Individual step card
function StepCard({ step }: { step: Step }) {
  const { completedSteps, toggleStep } = useProgress();
  const [expanded, setExpanded] = useState(true);
  const isCompleted = completedSteps.has(step.id);

  return (
    <div
      className={`lb-card mb-4 overflow-hidden transition-all duration-200 ${isCompleted ? 'opacity-80' : ''}`}
    >
      {/* Step Header */}
      <div
        className="flex items-center gap-3 p-4 cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
        style={{ background: isCompleted ? '#FEF9F5' : 'white' }}
      >
        {/* Completion Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleStep(step.id);
          }}
          className="flex-shrink-0 transition-transform hover:scale-110"
          aria-label={isCompleted ? "Mark incomplete" : "Mark complete"}
        >
          {isCompleted ? (
            <CheckCircle2 size={22} className="text-[#D0804A]" />
          ) : (
            <Circle size={22} className="text-[#d4c5bc]" />
          )}
        </button>

        {/* Step Title */}
        <div className="flex-1 min-w-0">
          <h3 className={`font-nunito font-800 text-[0.9375rem] leading-snug ${isCompleted ? 'line-through text-[#9b8a7e]' : 'text-[#1A1A1A]'}`}>
            {step.title}
          </h3>
        </div>

        {/* Expand/Collapse */}
        <button className="flex-shrink-0 text-[#9b8a7e] hover:text-[#D0804A] transition-colors">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Step Content */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-[#FEE7DA]">
          {/* Main Content */}
          <p className="text-[0.875rem] text-[#4a3f38] font-nunito leading-relaxed mt-3 mb-3">
            {step.content}
          </p>

          {/* Important Box */}
          {step.important && (
            <div className="lb-important-box mb-3">
              <div className="flex items-start gap-2">
                <AlertCircle size={16} className="text-[#D0804A] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-nunito font-800 text-[#D0804A] text-xs uppercase tracking-wide mb-1">Important</div>
                  <p className="text-[0.8125rem] text-[#4a3f38] font-nunito leading-relaxed whitespace-pre-line">{step.important}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tip Box */}
          {step.tip && (
            <div className="lb-tip-box mb-3">
              <div className="flex items-start gap-2">
                <Lightbulb size={16} className="text-[#D0804A] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-nunito font-800 text-[#D0804A] text-xs uppercase tracking-wide mb-1">Pro Tip</div>
                  <p className="text-[0.8125rem] text-[#4a3f38] font-nunito leading-relaxed">{step.tip}</p>
                </div>
              </div>
            </div>
          )}

          {/* Substeps (numbered list) */}
          {step.substeps && step.substeps.length > 0 && (
            <div className="space-y-2 mb-3">
              {step.substeps.map((substep, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div
                    className="lb-step-badge flex-shrink-0 mt-0.5"
                    style={{ width: '1.5rem', height: '1.5rem', fontSize: '0.6875rem' }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-[0.8125rem] text-[#4a3f38] font-nunito leading-relaxed flex-1">{substep}</p>
                </div>
              ))}
            </div>
          )}

          {/* Checklist */}
          {step.checklist && step.checklist.length > 0 && (
            <div className="space-y-1 mb-3">
              {step.checklist.map((item, idx) => (
                <div key={idx} className="lb-checklist-item">
                  <CheckSquare size={15} className="text-[#D0804A] flex-shrink-0 mt-0.5" />
                  <span className="text-[0.8125rem] text-[#4a3f38] font-nunito leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Mark Complete Button */}
          <div className="mt-4 pt-3 border-t border-[#FEE7DA] flex items-center justify-between">
            <button
              onClick={() => toggleStep(step.id)}
              className={`lb-btn-${isCompleted ? 'secondary' : 'primary'} text-sm py-2 px-4`}
            >
              {isCompleted ? (
                <>
                  <Circle size={14} />
                  Mark Incomplete
                </>
              ) : (
                <>
                  <CheckCircle2 size={14} />
                  Mark Complete
                </>
              )}
            </button>
            {isCompleted && (
              <span className="text-xs font-nunito font-700 text-[#D0804A] flex items-center gap-1">
                <CheckCircle2 size={13} />
                Completed!
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Special interactive content injected after certain steps
function SpecialContent({ moduleId, stepIndex }: { moduleId: string; stepIndex: number }) {
  if (moduleId === "payment" && stepIndex === 1) {
    return <PaymentDecisionTree />;
  }
  if (moduleId === "product-upload" && stepIndex === 2) {
    return <SKUFormatter />;
  }
  if (moduleId === "tools" && stepIndex === 0) {
    return <ProfitCalculator />;
  }
  return null;
}

export default function ModuleView({ module, onNext, onPrev, hasNext, hasPrev }: ModuleViewProps) {
  const { getModuleProgress, completedModules } = useProgress();
  const progress = getModuleProgress(module.id);
  const isCompleted = completedModules.has(module.id);

  const SHIPPING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/shipping-module-3y6r9AjRboBYne3ovVpRKx.webp";
  const PRODUCT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/product-research-VMnnL6cto87qtdxBMKqNgq.webp";

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 lg:py-8">
      {/* Module Header */}
      <div
        className="rounded-2xl p-6 mb-6 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${module.bgColor}, white)` }}
      >
        {/* Decorative */}
        <div className="absolute top-4 right-6 text-3xl opacity-20 select-none">✿</div>
        <div className="absolute bottom-2 right-16 text-2xl opacity-10 select-none">✦</div>

        <div className="flex items-start gap-4">
          <div className="lb-module-badge text-2xl" style={{ width: '3.5rem', height: '3.5rem' }}>
            {module.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="lb-tag">Module {module.number}</span>
              {isCompleted && (
                <span className="lb-tag" style={{ background: '#D0804A', color: 'white' }}>
                  <CheckCircle2 size={10} />
                  Complete
                </span>
              )}
              {module.hasVideo && (
                <span className="lb-tag" style={{ background: '#FDBEC0', color: '#D0804A' }}>
                  <Play size={10} />
                  Video
                </span>
              )}
            </div>
            <h1 className="font-pacifico text-[#D0804A] text-2xl lg:text-3xl leading-tight mb-1">
              {module.title}
            </h1>
            <p className="text-[#6b5a4e] font-nunito text-sm">{module.subtitle}</p>
          </div>
        </div>

        {/* Module Progress Bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-nunito font-700 text-[#6b5a4e]">
              {module.steps.length} steps
            </span>
            <span className="text-xs font-nunito font-800 text-[#D0804A]">{progress}% complete</span>
          </div>
          <div className="lb-progress-bar">
            <div className="lb-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Module-specific banner images */}
      {module.id === "fulfillment" && (
        <div className="mb-6 rounded-2xl overflow-hidden">
          <img src={SHIPPING_IMG} alt="Shipping & Fulfillment" className="w-full object-cover" style={{ maxHeight: '200px' }} />
        </div>
      )}
      {module.id === "product-research" && (
        <div className="mb-6 rounded-2xl overflow-hidden">
          <img src={PRODUCT_IMG} alt="Product Research" className="w-full object-cover" style={{ maxHeight: '200px' }} />
        </div>
      )}

      {/* Video Placeholder */}
      {module.hasVideo && module.videoTitle && (
        <VideoPlaceholder title={module.videoTitle} />
      )}

      {/* Steps with special interactive content */}
      <div>
        {module.steps.map((step, index) => (
          <div key={step.id}>
            <StepCard step={step} />
            <SpecialContent moduleId={module.id} stepIndex={index} />
          </div>
        ))}
      </div>

      {/* Services section at the end of the services module */}
      {module.id === "services" && <ServicesSection />}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#FEE7DA]">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`lb-btn-secondary ${!hasPrev ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          ← Previous
        </button>

        <div className="text-center">
          <div className="text-xs text-[#9b8a7e] font-nunito">
            Module {module.number} of 11
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`lb-btn-primary ${!hasNext ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          {hasNext ? 'Next Module →' : '🎉 Course Complete!'}
        </button>
      </div>
    </div>
  );
}
