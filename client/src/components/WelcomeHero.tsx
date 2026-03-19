// Lemonade Bloom Course — Welcome Hero Section
// Design: Warm Retro Zine — full hero with brand imagery and course overview

import { modules } from "@/data/courseData";
import { useProgress } from "@/contexts/ProgressContext";
import { Play, BookOpen, ChevronRight, TrendingUp, ShoppingCart, Award, Download } from "lucide-react";
import AllResourcesSection from "./AllResourcesSection";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/hero-banner-Ve8NgKdGKPNbuwtCoE5Nme.webp";
const WALMART_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439371575/FrK4YVnjeGBhbojuyvbqHW/welcome-hero-QnWeko9CUASbRmVU3sEzpB.webp";

interface WelcomeHeroProps {
  onStart: () => void;
  showResources?: boolean;
  onToggleResources?: () => void;
}

const stats = [
  { icon: <ShoppingCart size={20} />, value: "120M+", label: "Monthly Walmart Visitors" },
  { icon: <TrendingUp size={20} />, value: "Lower", label: "Competition vs Amazon" },
  { icon: <Award size={20} />, value: "High", label: "Buy Box Opportunity" },
  { icon: <BookOpen size={20} />, value: "11", label: "Course Modules" },
];

const walmartBenefits = [
  { icon: "🛒", text: "120M+ monthly unique visitors trust Walmart" },
  { icon: "📉", text: "Far less competition than Amazon Marketplace" },
  { icon: "🏆", text: "High buy box win rate for new sellers" },
  { icon: "💸", text: "Free to list — no monthly subscription fee" },
  { icon: "📈", text: "Rapidly growing platform with less saturation" },
];

export default function WelcomeHero({ onStart, showResources = false, onToggleResources }: WelcomeHeroProps) {
  const { getTotalProgress, completedModules } = useProgress();
  const progress = getTotalProgress();
  const isStarted = progress > 0;

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FEE9CE 0%, #FEE7DA 60%, #FDBEC0 100%)' }}
      >
        {/* Decorative elements */}
        <div className="absolute top-8 right-8 text-6xl opacity-10 select-none pointer-events-none">✿</div>
        <div className="absolute top-24 left-6 text-4xl opacity-10 select-none pointer-events-none">✦</div>
        <div className="absolute bottom-8 right-20 text-3xl opacity-10 select-none pointer-events-none">❋</div>
        <div className="absolute bottom-16 left-16 text-2xl opacity-10 select-none pointer-events-none">✿</div>

        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="lb-tag mb-4">
                <span>✿</span>
                Walmart Seller Course
              </div>
              <h1 className="font-pacifico text-[#D0804A] text-4xl lg:text-5xl xl:text-6xl leading-tight mb-2">
                Lemonade Bloom
              </h1>
              <h2 className="font-nunito font-900 text-[#1A1A1A] text-xl lg:text-2xl leading-tight mb-4">
                Walmart Seller Success Blueprint
              </h2>
              <p className="text-[#4a3f38] font-nunito text-base leading-relaxed mb-6 max-w-lg">
                Your complete step-by-step guide to launching and scaling a profitable Walmart Marketplace store.
                From account setup to building a team — everything you need to succeed.
              </p>

              {/* Progress indicator if started */}
              {isStarted && (
                <div className="mb-5 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-[#FDBEC0]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-nunito font-700 text-[#D0804A]">Your Progress</span>
                    <span className="text-sm font-nunito font-800 text-[#D0804A]">{progress}%</span>
                  </div>
                  <div className="lb-progress-bar">
                    <div className="lb-progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="text-xs text-[#6b5a4e] font-nunito mt-1.5">
                    {completedModules.size} of {modules.length} modules completed
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <button onClick={onStart} className="lb-btn-primary text-base py-3 px-6">
                  <Play size={16} />
                  {isStarted ? 'Continue Course' : 'Start Course'}
                </button>
                <button onClick={onStart} className="lb-btn-secondary text-base py-3 px-6">
                  <BookOpen size={16} />
                  View Modules
                </button>
                <button onClick={onToggleResources} className="lb-btn-secondary text-base py-3 px-6">
                  <Download size={16} />
                  {showResources ? 'Hide Resources' : 'All SOPs'}
                </button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div>
              <div className="relative">
                <img
                  src={HERO_IMG}
                  alt="Lemonade Bloom workspace"
                  className="w-full rounded-2xl"
                  style={{ boxShadow: '0 20px 60px rgba(208,128,74,0.2)' }}
                />
                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 border border-[#FEE7DA]"
                  style={{ boxShadow: '0 4px 20px rgba(208,128,74,0.15)' }}
                >
                  <div className="font-pacifico text-[#D0804A] text-sm">Lemonade Bloom</div>
                  <div className="text-xs text-[#6b5a4e] font-nunito font-600">Walmart Seller Course</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="py-5" style={{ background: '#D0804A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center text-white">
                <div className="flex justify-center mb-1 opacity-80">{stat.icon}</div>
                <div className="font-nunito font-900 text-xl">{stat.value}</div>
                <div className="text-xs font-nunito opacity-75">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Walmart Section */}
      <div className="py-12 px-4" style={{ background: '#FEE9CE' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={WALMART_IMG}
                alt="Walmart opportunity"
                className="w-full rounded-2xl"
                style={{ boxShadow: '0 8px 32px rgba(208,128,74,0.15)' }}
              />
            </div>
            <div>
              <div className="lb-tag mb-3">Why Walmart?</div>
              <h2 className="font-pacifico text-[#D0804A] text-3xl mb-4">
                The Opportunity is Real
              </h2>
              <p className="text-[#4a3f38] font-nunito leading-relaxed mb-5">
                Walmart Marketplace is one of the fastest-growing ecommerce platforms in the US.
                With lower seller competition than Amazon and a massive built-in customer base,
                it's the perfect place to build a profitable reselling business.
              </p>
              <div className="space-y-2.5">
                {walmartBenefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#FEE7DA]">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-nunito font-600 text-[#4a3f38]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Modules Overview */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="lb-tag mb-3 mx-auto inline-flex">Course Curriculum</div>
            <h2 className="font-pacifico text-[#D0804A] text-3xl">
              11 Modules to Walmart Success
            </h2>
            <p className="text-[#6b5a4e] font-nunito mt-2 max-w-lg mx-auto">
              Each module is packed with step-by-step SOPs, checklists, interactive tools, and pro tips from real Walmart seller operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={onStart}
                className="lb-card p-4 text-left w-full"
              >
                <div className="flex items-start gap-3">
                  <div className="lb-module-badge text-lg" style={{ width: '2.75rem', height: '2.75rem' }}>
                    {module.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-nunito font-700 text-[#D0804A] mb-0.5">Module {module.number}</div>
                    <div className="font-nunito font-800 text-[#1A1A1A] text-sm leading-snug">{module.title}</div>
                    <div className="text-xs text-[#6b5a4e] font-nunito mt-0.5">{module.steps.length} steps</div>
                  </div>
                  <ChevronRight size={14} className="text-[#d4c5bc] flex-shrink-0 mt-1" />
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <button onClick={onStart} className="lb-btn-primary text-base py-3 px-8">
              <Play size={16} />
              Start Learning Now
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* All Resources Section */}
      {showResources && <AllResourcesSection />}

      {/* Strategy Section */}
      <div className="py-12 px-4" style={{ background: '#FEE7DA' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="lb-tag mb-3 mx-auto inline-flex">The Lemonade Bloom Strategy</div>
          <h2 className="font-pacifico text-[#D0804A] text-3xl mb-4">
            Proven System. Real Results.
          </h2>
          <p className="text-[#4a3f38] font-nunito leading-relaxed mb-8 max-w-2xl mx-auto">
            Lemonade Bloom builds, manages, and scales Walmart stores with a proven system focused on
            high-profit everyday products, consistent daily orders, and scalable inventory management.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🔍", title: "Find Winning Products", desc: "Under 7.5oz, under $4 cost, fewer than 7 sellers" },
              { icon: "📦", title: "List & Fulfill", desc: "Express upload, competitive pricing, fast shipping" },
              { icon: "📈", title: "Scale & Grow", desc: "Test 5 products, scale winners, build your team" },
            ].map((item, i) => (
              <div key={i} className="lb-card p-5 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-nunito font-800 text-[#1A1A1A] mb-2">{item.title}</div>
                <div className="text-sm text-[#6b5a4e] font-nunito">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
