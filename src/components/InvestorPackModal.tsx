import React, { useState } from 'react';
import { InvestorPackFormData } from '../types';

interface InvestorPackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const InvestorPackModal: React.FC<InvestorPackModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'Growth Equity',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<InvestorPackFormData>({
    fullName: '',
    email: '',
    organization: '',
    investorType: (defaultCategory as any) || 'Growth Equity',
    intendedAllocation: '£500k - £1M',
    acceptedNDA: true,
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#c3c7cd]/60 shadow-2xl relative">
        {/* Header Band */}
        <div className="bg-[#1d3a50] p-6 text-white border-b-[3px] border-[#b9003d] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="flex items-center gap-2 text-[#ffdf93] text-[12px] font-bold uppercase tracking-wider mb-1">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            Confidential Investor Clearance
          </div>
          <h2 className="text-[22px] md:text-[24px] font-bold text-white">
            Request Institutional Investor Pack & Data Room
          </h2>
          <p className="text-[14px] text-[#88a4be] mt-1">
            £3,000,000 Growth Equity Round • Staged Capital Deployment & Scottish Pilot Dossier
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#ecf4ff] border-2 border-[#1d3a50] text-[#b9003d] mx-auto flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-[#032439]">
                Investor Access Request Registered
              </h3>
              <p className="text-[15px] text-[#42474c] mt-2 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-[#032439]">{formData.fullName || 'Partner'}</strong> ({formData.organization || 'Institutional Participant'}). Your dossier clearance request has been forwarded to the Executive Governance Office at Watch This Space Group.
              </p>
            </div>

            {/* Simulated Dossier Download Card */}
            <div className="bg-[#f7f9ff] border border-[#c3c7cd]/60 rounded-xl p-5 text-left space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-[#1d3a50] text-[#ffdf93]">
                    <span className="material-symbols-outlined text-2xl">description</span>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#032439]">
                      WTSG_Executive_Investment_Memorandum_2026.pdf
                    </h4>
                    <p className="text-[12px] text-[#73777d]">
                      38 Pages • Includes 5-Year Unit Economics, Box Logistics & CfE Audit
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-1 bg-[#ffdadc] text-[#40000f] rounded">
                  Cleared Access
                </span>
              </div>
              <div className="pt-2 border-t border-[#c3c7cd]/40 flex items-center justify-between text-[12px] text-[#73777d]">
                <span>Generated for: {formData.email || 'investor@firm.com'}</span>
                <span className="text-[#032439] font-mono font-bold">TOKEN: WTSG-2026-INV-8492</span>
              </div>
            </div>

            <div className="bg-[#fff9db] border border-[#d1a621]/40 rounded-lg p-4 text-[12px] text-[#503d00] text-left">
              <strong>Mandatory Compliance:</strong> Forecasts are not trading results. Illustrative, not forecast sales. Registered in Scotland. Timing and release conditions require investor agreement.
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#032439] hover:bg-[#1d3a50] text-white px-8 py-2.5 rounded-full text-[14px] font-bold transition-all cursor-pointer"
              >
                Close & Return to Briefing
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-bold text-[#032439] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Fiona Campbell"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded border border-[#c3c7cd] text-[15px] focus:outline-none focus:border-[#1d3a50] focus:ring-1 focus:ring-[#1d3a50] bg-white"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#032439] uppercase tracking-wider mb-1.5">
                  Institutional Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="fiona@capitalpartners.co.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded border border-[#c3c7cd] text-[15px] focus:outline-none focus:border-[#1d3a50] focus:ring-1 focus:ring-[#1d3a50] bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-bold text-[#032439] uppercase tracking-wider mb-1.5">
                  Institution / Organization *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Scottish Education Ventures / Highland Council"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-2.5 rounded border border-[#c3c7cd] text-[15px] focus:outline-none focus:border-[#1d3a50] focus:ring-1 focus:ring-[#1d3a50] bg-white"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#032439] uppercase tracking-wider mb-1.5">
                  Investor / Stakeholder Category *
                </label>
                <select
                  value={formData.investorType}
                  onChange={(e) => setFormData({ ...formData, investorType: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded border border-[#c3c7cd] text-[15px] focus:outline-none focus:border-[#1d3a50] bg-white"
                >
                  <option value="Growth Equity">Growth Equity Firm</option>
                  <option value="Venture Capital">Venture Capital Fund</option>
                  <option value="Family Office">Family Office / Private Syndicate</option>
                  <option value="Local Authority">Local Authority / Regional Council</option>
                  <option value="Academic / School Leader">Headteacher / Education Trust</option>
                  <option value="Angel Investor">High-Net-Worth Angel Investor</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-[#032439] uppercase tracking-wider mb-1.5">
                Target Allocation Scope / Inquiry Focus
              </label>
              <select
                value={formData.intendedAllocation}
                onChange={(e) => setFormData({ ...formData, intendedAllocation: e.target.value })}
                className="w-full px-4 py-2.5 rounded border border-[#c3c7cd] text-[15px] focus:outline-none focus:border-[#1d3a50] bg-white"
              >
                <option value="£250k - £500k">£250k – £500k (Co-Investment Syndicate)</option>
                <option value="£500k - £1M">£500k – £1,000,000 (Tranche 1 Lead / Co-Lead)</option>
                <option value="£1M - £3M">£1,000,000 – £3,000,000 (Full Growth Round Lead)</option>
                <option value="Council Cluster Rollout">School Cluster License / Procurement (£25/pupil)</option>
                <option value="Academic Partnership">Academic / Pedagogical Evaluation Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-[#032439] uppercase tracking-wider mb-1.5">
                Specific Inquiries or Due Diligence Focus (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please provide unit economics breakdown for rural school clusters and EN71 safety audits."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded border border-[#c3c7cd] text-[14px] focus:outline-none focus:border-[#1d3a50] bg-white"
              />
            </div>

            {/* NDA & Compliance Check */}
            <div className="bg-[#f7f9ff] p-4 rounded-lg border border-[#c3c7cd]/40 space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.acceptedNDA}
                  onChange={(e) => setFormData({ ...formData, acceptedNDA: e.target.checked })}
                  className="mt-1 accent-[#b9003d]"
                />
                <span className="text-[13px] text-[#42474c] leading-relaxed">
                  I confirm institutional accreditation and agree to confidential treatment of financial models, box unit economics, and Scottish local authority pilot data.
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[12px] text-[#73777d]">
                Direct Governance line: <span className="text-[#032439] font-bold">invest@watchthisspacegroup.com</span>
              </span>
              <button
                type="submit"
                className="bg-[#b9003d] hover:bg-[#dd2a54] text-white px-7 py-3 rounded-full text-[14px] font-bold tracking-wider shadow-lg hover:-translate-y-0.5 active:scale-[0.99] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Submit & Access Dossier</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
