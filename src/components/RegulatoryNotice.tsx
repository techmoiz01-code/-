import React from 'react';

export const RegulatoryNotice: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <section className="bg-[#f7f9ff] py-6 border-t border-b border-[#c3c7cd]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-white p-5 md:p-6 rounded-lg border border-[#c3c7cd]/40 flex items-start gap-4 shadow-sm">
          <span className="material-symbols-outlined text-[#032439] text-[26px] mt-0.5 shrink-0">
            lock
          </span>
          <div className="space-y-1">
            <h4 className="text-[14px] font-bold text-[#032439] uppercase tracking-wider">
              Mandatory Regulatory Compliance & Disclosure Notice
            </h4>
            <p className="text-[12px] text-[#73777d] leading-relaxed">
              <strong>£25 per pupil represents our working price model.</strong> Forecasts are not trading results. Illustrative, not forecast sales. Timing and release conditions require investor agreement. Registered in Scotland.
              {!compact && (
                <span> This digital memorandum does not constitute an offer to sell or a solicitation of an offer to subscribe for shares in any jurisdiction. Access to confidential technical documentation, school data, and audited projections is strictly reserved for qualified institutional participants upon execution of mutual non-disclosure covenants.</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryNotice;
