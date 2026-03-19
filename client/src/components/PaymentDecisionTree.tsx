// Lemonade Bloom — Payment Decision Tree UI
// Visual decision tree for Sole Prop vs LLC bank account choice

import { useState } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

export default function PaymentDecisionTree() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="lb-card p-5 my-4">
      <div className="text-center mb-5">
        <div className="font-nunito font-800 text-[#D0804A] text-base mb-1">
          💳 Payment Setup Decision Tree
        </div>
        <div className="text-sm text-[#6b5a4e] font-nunito">
          Select your business structure to see what bank account you need
        </div>
      </div>

      {/* Decision Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={() => setSelected('sole-prop')}
          className={`p-4 rounded-xl border-2 text-left transition-all ${
            selected === 'sole-prop'
              ? 'border-[#D0804A] bg-[#FFF5EE]'
              : 'border-[#FEE7DA] bg-white hover:border-[#FDBEC0]'
          }`}
        >
          <div className="text-2xl mb-2">👤</div>
          <div className="font-nunito font-800 text-sm text-[#1A1A1A]">Sole Proprietor</div>
          <div className="text-xs text-[#6b5a4e] font-nunito mt-1">No LLC registered</div>
          {selected === 'sole-prop' && (
            <CheckCircle2 size={16} className="text-[#D0804A] mt-2" />
          )}
        </button>

        <button
          onClick={() => setSelected('llc')}
          className={`p-4 rounded-xl border-2 text-left transition-all ${
            selected === 'llc'
              ? 'border-[#D0804A] bg-[#FFF5EE]'
              : 'border-[#FEE7DA] bg-white hover:border-[#FDBEC0]'
          }`}
        >
          <div className="text-2xl mb-2">🏢</div>
          <div className="font-nunito font-800 text-sm text-[#1A1A1A]">LLC</div>
          <div className="text-xs text-[#6b5a4e] font-nunito mt-1">Registered business entity</div>
          {selected === 'llc' && (
            <CheckCircle2 size={16} className="text-[#D0804A] mt-2" />
          )}
        </button>
      </div>

      {/* Result */}
      {selected === 'sole-prop' && (
        <div
          className="rounded-xl p-4 border border-[#FDBEC0]"
          style={{ background: 'linear-gradient(135deg, #FEE7DA, #FFF5EE)' }}
        >
          <div className="flex items-start gap-3">
            <ChevronRight size={18} className="text-[#D0804A] flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-nunito font-800 text-[#D0804A] mb-1">✅ Personal Bank Account</div>
              <div className="text-sm text-[#4a3f38] font-nunito leading-relaxed">
                As a sole proprietor, you can use your personal bank account with Payoneer.
                Select "Sole Proprietor" when setting up Payoneer to link your personal account.
              </div>
              <div className="mt-2 text-xs font-nunito font-700 text-[#D0804A]">
                Payoneer Setup → Select "Sole Proprietor" → Link Personal Bank
              </div>
            </div>
          </div>
        </div>
      )}

      {selected === 'llc' && (
        <div
          className="rounded-xl p-4 border border-[#FDBEC0]"
          style={{ background: 'linear-gradient(135deg, #FEE7DA, #FFF5EE)' }}
        >
          <div className="flex items-start gap-3">
            <ChevronRight size={18} className="text-[#D0804A] flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-nunito font-800 text-[#D0804A] mb-1">⚠️ Business Bank Account Required</div>
              <div className="text-sm text-[#4a3f38] font-nunito leading-relaxed">
                With an LLC, you MUST use a dedicated business bank account. Using a personal account
                with an LLC can create legal and tax complications.
              </div>
              <div className="mt-2 space-y-1">
                <div className="text-xs font-nunito font-700 text-[#D0804A]">Recommended Business Banks:</div>
                <div className="text-xs text-[#4a3f38] font-nunito">• Chase Business Checking</div>
                <div className="text-xs text-[#4a3f38] font-nunito">• Bank of America Business</div>
                <div className="text-xs text-[#4a3f38] font-nunito">• Mercury (online, no fees)</div>
              </div>
              <div className="mt-2 text-xs font-nunito font-700 text-[#D0804A]">
                Payoneer Setup → Select "Company" → Link Business Bank
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
