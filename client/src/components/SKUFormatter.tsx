// Lemonade Bloom — Interactive SKU Formatter
// Helps users build correctly formatted SKUs

import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";

export default function SKUFormatter() {
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const [flavor, setFlavor] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [copied, setCopied] = useState(false);

  const formatPart = (val: string) => val.trim().toUpperCase().replace(/\s+/g, "");

  const sku = [
    formatPart(brand),
    formatPart(product),
    formatPart(flavor),
    formatPart(type),
    formatPart(weight) ? formatPart(weight) + "OZ" : "",
  ]
    .filter(Boolean)
    .join("_");

  const handleCopy = () => {
    if (sku) {
      navigator.clipboard.writeText(sku);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="lb-card p-5 my-4">
      <div className="font-nunito font-800 text-[#D0804A] text-base mb-1">
        🏷️ SKU Builder
      </div>
      <div className="text-xs text-[#6b5a4e] font-nunito mb-4">
        Format: BRAND_PRODUCTNAME_FLAVOR_TYPE_OZ
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Brand", value: brand, setter: setBrand, placeholder: "KRAFT" },
          { label: "Product Name", value: product, setter: setProduct, placeholder: "MACCHEESE" },
          { label: "Flavor/Variant", value: flavor, setter: setFlavor, placeholder: "ORIGINAL" },
          { label: "Type", value: type, setter: setType, placeholder: "BOX" },
        ].map((field) => (
          <div key={field.label}>
            <label className="text-xs font-nunito font-700 text-[#6b5a4e] block mb-1">
              {field.label}
            </label>
            <input
              type="text"
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 rounded-lg border border-[#FEE7DA] bg-[#FAFAF8] text-sm font-nunito font-700 text-[#1A1A1A] focus:outline-none focus:border-[#D0804A] focus:ring-1 focus:ring-[#D0804A] transition-colors uppercase"
            />
          </div>
        ))}
        <div className="col-span-2">
          <label className="text-xs font-nunito font-700 text-[#6b5a4e] block mb-1">
            Weight (oz)
          </label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="7.25"
            className="w-full px-3 py-2 rounded-lg border border-[#FEE7DA] bg-[#FAFAF8] text-sm font-nunito font-700 text-[#1A1A1A] focus:outline-none focus:border-[#D0804A] focus:ring-1 focus:ring-[#D0804A] transition-colors"
          />
        </div>
      </div>

      {/* SKU Preview */}
      <div
        className="rounded-xl p-4 flex items-center justify-between gap-3"
        style={{ background: 'linear-gradient(135deg, #FEE7DA, #FFF5EE)' }}
      >
        <div className="flex-1 min-w-0">
          <div className="text-xs font-nunito font-700 text-[#6b5a4e] mb-1">Generated SKU:</div>
          <div className="font-nunito font-900 text-[#D0804A] text-sm break-all">
            {sku || "Fill in the fields above..."}
          </div>
        </div>
        {sku && (
          <button
            onClick={handleCopy}
            className="flex-shrink-0 p-2 rounded-lg bg-white border border-[#FEE7DA] hover:border-[#D0804A] transition-colors"
          >
            {copied ? (
              <CheckCircle2 size={16} className="text-[#D0804A]" />
            ) : (
              <Copy size={16} className="text-[#9b8a7e]" />
            )}
          </button>
        )}
      </div>

      <div className="mt-3 lb-tip-box">
        <div className="text-xs font-nunito text-[#4a3f38]">
          <strong className="text-[#D0804A]">Example:</strong> KRAFT_MACCHEESE_ORIGINAL_BOX_7.25OZ
        </div>
      </div>
    </div>
  );
}
