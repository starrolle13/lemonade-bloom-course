// Lemonade Bloom — SOP Downloads Component
// Renders a branded download card section for each module's SOP files

import { Download, FileText } from "lucide-react";
import { SOPResource } from "@/data/sopResources";

interface SOPDownloadsProps {
  sops: SOPResource[];
}

export default function SOPDownloads({ sops }: SOPDownloadsProps) {
  if (!sops || sops.length === 0) return null;

  return (
    <div className="my-6">
      {/* Section header */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-t-xl border border-b-0 border-[#FDBEC0]"
        style={{ background: 'linear-gradient(90deg, #FEE9CE, #FFF5EE)' }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: '#D0804A' }}
        >
          <FileText size={15} className="text-white" />
        </div>
        <div>
          <div className="font-nunito font-800 text-[#D0804A] text-sm">
            📎 SOP Downloads
          </div>
          <div className="text-xs text-[#6b5a4e] font-nunito">
            {sops.length} document{sops.length > 1 ? 's' : ''} for this module
          </div>
        </div>
      </div>

      {/* Download cards */}
      <div
        className="border border-[#FDBEC0] rounded-b-xl overflow-hidden divide-y divide-[#FEE7DA]"
        style={{ background: 'white' }}
      >
        {sops.map((sop, i) => (
          <a
            key={i}
            href={sop.url}
            download={sop.filename}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-[#FEF9F5] transition-colors group"
          >
            {/* File icon */}
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#FEE7DA] group-hover:border-[#FDBEC0] transition-colors"
              style={{ background: '#FEF9F5' }}
            >
              <FileText size={16} className="text-[#D0804A]" />
            </div>

            {/* File info */}
            <div className="flex-1 min-w-0">
              <div className="font-nunito font-700 text-[#1A1A1A] text-sm truncate group-hover:text-[#D0804A] transition-colors">
                {sop.title}
              </div>
              <div className="text-xs text-[#9b8a7e] font-nunito truncate">
                {sop.description}
              </div>
            </div>

            {/* Download button */}
            <div
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-nunito font-700 text-[#D0804A] border border-[#FDBEC0] group-hover:bg-[#D0804A] group-hover:text-white group-hover:border-[#D0804A] transition-all"
            >
              <Download size={12} />
              <span className="hidden sm:inline">Download</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
