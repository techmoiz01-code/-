import React from 'react';

export const MemorialTribute: React.FC = () => {
  return (
    <div className="bg-[#1d3a50] rounded-xl p-8 md:p-12 border-2 border-[#ffdf93]/40 shadow-xl relative overflow-hidden">
      {/* Background Decorative Crest Elements */}
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
      <div className="max-w-3xl relative z-10 space-y-5">
        {/* Memorial Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/30 border border-[#ffdf93]/50 text-[#ffdf93] text-[13px] font-bold tracking-widest uppercase">
          <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
          MEMORIAL TRIBUTE
        </div>

        {/* Title & Distinct Disclaimer */}
        <div>
          <h2 className="text-[28px] md:text-[34px] font-bold text-white tracking-tight">
            In Memoriam: David Henderson
          </h2>
          <p className="text-[#ffdf93] text-[13px] font-bold mt-1 tracking-wide uppercase">
            Honouring Foundational Legacy • Not a Current Adviser
          </p>
        </div>

        {/* Tribute Body Text */}
        <p className="text-white/90 text-[18px] md:text-[19px] leading-relaxed italic border-l-2 border-[#ffdf93] pl-5">
          "We respectfully honour the foundational vision, enduring pedagogical passion, and deep commitment of the late David Henderson to Scottish education. His profound belief in the transformative power of expressive arts in every classroom remains woven into the guiding ethos and institutional ambitions of Watch This Space Group."
        </p>

        <div className="flex items-center gap-4 pt-2 text-[12px] text-[#88a4be]">
          <span>Watch This Space Group Foundation Archive</span>
          <span>•</span>
          <span>Perpetual Inscription</span>
        </div>
      </div>
    </div>
  );
};

export default MemorialTribute;
