// Lemonade Bloom — Profit Calculator
// Interactive tool for calculating per-unit profit

import { useState } from "react";

export default function ProfitCalculator() {
  const [sellingPrice, setSellingPrice] = useState("");
  const [productCost, setProductCost] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [packagingCost, setPackagingCost] = useState("0.50");
  const [walmartFeePercent, setWalmartFeePercent] = useState("12");

  const sp = parseFloat(sellingPrice) || 0;
  const pc = parseFloat(productCost) || 0;
  const sc = parseFloat(shippingCost) || 0;
  const pkg = parseFloat(packagingCost) || 0;
  const feePercent = parseFloat(walmartFeePercent) || 12;

  const walmartFee = sp * (feePercent / 100);
  const profit = sp - pc - sc - pkg - walmartFee;
  const margin = sp > 0 ? (profit / sp) * 100 : 0;

  const profitColor = profit >= 3 ? "#22c55e" : profit >= 1 ? "#D0804A" : "#ef4444";

  return (
    <div className="lb-card p-5 my-4">
      <div className="font-nunito font-800 text-[#D0804A] text-base mb-1">
        💰 Profit Calculator
      </div>
      <div className="text-xs text-[#6b5a4e] font-nunito mb-4">
        Calculate your true profit per unit before listing
      </div>

      <div className="space-y-3 mb-4">
        {[
          { label: "Selling Price on Walmart ($)", value: sellingPrice, setter: setSellingPrice, placeholder: "9.99" },
          { label: "Product Cost ($)", value: productCost, setter: setProductCost, placeholder: "2.50" },
          { label: "Shipping / Label Cost ($)", value: shippingCost, setter: setShippingCost, placeholder: "4.50" },
          { label: "Packaging Cost ($)", value: packagingCost, setter: setPackagingCost, placeholder: "0.50" },
          { label: "Walmart Fee (%)", value: walmartFeePercent, setter: setWalmartFeePercent, placeholder: "12" },
        ].map((field) => (
          <div key={field.label} className="flex items-center gap-3">
            <label className="text-xs font-nunito font-700 text-[#6b5a4e] w-44 flex-shrink-0">
              {field.label}
            </label>
            <input
              type="number"
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              placeholder={field.placeholder}
              className="flex-1 px-3 py-2 rounded-lg border border-[#FEE7DA] bg-[#FAFAF8] text-sm font-nunito font-700 text-[#1A1A1A] focus:outline-none focus:border-[#D0804A] focus:ring-1 focus:ring-[#D0804A] transition-colors"
            />
          </div>
        ))}
      </div>

      {/* Results */}
      <div
        className="rounded-xl p-4"
        style={{ background: 'linear-gradient(135deg, #FEE7DA, #FFF5EE)' }}
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-xs font-nunito font-700 text-[#6b5a4e] mb-1">Walmart Fee</div>
            <div className="font-nunito font-900 text-[#D0804A]">${walmartFee.toFixed(2)}</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-xs font-nunito font-700 text-[#6b5a4e] mb-1">Profit Margin</div>
            <div className="font-nunito font-900" style={{ color: profitColor }}>{margin.toFixed(1)}%</div>
          </div>
        </div>

        <div className="mt-3 text-center p-4 bg-white rounded-xl border-2" style={{ borderColor: profitColor }}>
          <div className="text-xs font-nunito font-700 text-[#6b5a4e] mb-1">Net Profit Per Unit</div>
          <div className="font-pacifico text-3xl" style={{ color: profitColor }}>
            ${profit.toFixed(2)}
          </div>
          <div className="text-xs font-nunito mt-1" style={{ color: profitColor }}>
            {profit >= 3 ? "✅ Great margin!" : profit >= 1 ? "⚠️ Thin margin — review costs" : "❌ Not profitable — adjust pricing"}
          </div>
        </div>
      </div>

      <div className="mt-3 lb-tip-box">
        <div className="text-xs font-nunito text-[#4a3f38]">
          <strong className="text-[#D0804A]">Target:</strong> Minimum $2–3 profit per unit. Walmart fees are typically 8–15% depending on category.
        </div>
      </div>
    </div>
  );
}
