// Lemonade Bloom — All Resources Section
// Shows every SOP grouped by module for easy one-stop downloading

import { Download, FileText, BookOpen } from "lucide-react";
import { sopResources } from "@/data/sopResources";
import { modules } from "@/data/courseData";

export default function AllResourcesSection() {
  // Group SOPs by module
  const grouped = modules
    .map(module => ({
      module,
      sops: sopResources.filter(s => s.moduleId === module.id),
    }))
    .filter(g => g.sops.length > 0);

  const totalSops = sopResources.length;

  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="lb-tag mb-3 mx-auto inline-flex">
            <BookOpen size={12} />
            Course Resources
          </div>
          <h2 className="font-pacifico text-[#D0804A] text-3xl mb-2">
            All SOP Downloads
          </h2>
          <p className="text-[#6b5a4e] font-nunito text-sm max-w-md mx-auto">
            {totalSops} Standard Operating Procedures — download any time and keep them handy while you work.
          </p>
        </div>

        {/* Download All Button */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {sopResources.map((sop, i) => (
              <a
                key={i}
                href={sop.url}
                download={sop.filename}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#FEE7DA] bg-[#FEF9F5] hover:bg-[#FEE9CE] hover:border-[#FDBEC0] transition-all text-sm font-nunito font-700 text-[#D0804A]"
              >
                <Download size={13} />
                {sop.title}
              </a>
            ))}
          </div>
        </div>

        {/* Grouped by Module */}
        <div className="space-y-6">
          {grouped.map(({ module, sops }) => (
            <div key={module.id} className="lb-card overflow-hidden">
              {/* Module Header */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b border-[#FEE7DA]"
                style={{ background: `linear-gradient(90deg, ${module.bgColor}, #FFF5EE)` }}
              >
                <div className="lb-module-badge text-base" style={{ width: '2rem', height: '2rem' }}>
                  {module.icon}
                </div>
                <div>
                  <div className="text-xs font-nunito font-700 text-[#D0804A]">Module {module.number}</div>
                  <div className="font-nunito font-800 text-[#1A1A1A] text-sm">{module.title}</div>
                </div>
                <div className="ml-auto lb-tag text-xs">
                  {sops.length} file{sops.length > 1 ? 's' : ''}
                </div>
              </div>

              {/* SOP List */}
              <div className="divide-y divide-[#FEE7DA]">
                {sops.map((sop, i) => (
                  <a
                    key={i}
                    href={sop.url}
                    download={sop.filename}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#FEF9F5] transition-colors group"
                  >
                    <FileText size={15} className="text-[#D0804A] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-nunito font-700 text-sm text-[#1A1A1A] group-hover:text-[#D0804A] transition-colors truncate">
                        {sop.title}
                      </div>
                      <div className="text-xs text-[#9b8a7e] font-nunito truncate">{sop.description}</div>
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-1 text-xs font-nunito font-700 text-[#D0804A] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download size={12} />
                      Download
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
