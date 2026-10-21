import React from 'react';
import { NavTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onRequestInvestorPack: () => void;
  onOpenDataRoom?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onRequestInvestorPack,
  onOpenDataRoom,
}) => {
  return (
    <footer className="bg-[#032439] border-t border-white/15 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 flex flex-col gap-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-[22px] font-bold text-white tracking-tight block">
              Watch This Space Group
            </span>
            <p className="text-[13px] text-[#88a4be] mt-1">
              Edinburgh • Glasgow • St Andrews | Direct Inquiries:{' '}
              <a
                className="text-[#ffdf93] underline hover:text-white transition-colors"
                href="mailto:invest@watchthisspacegroup.com"
              >
                invest@watchthisspacegroup.com
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            <button
              onClick={() => {
                if (onOpenDataRoom) onOpenDataRoom();
                else onRequestInvestorPack();
              }}
              className="text-[#ffdf93] hover:underline font-bold cursor-pointer text-left"
            >
              Investor Portal
            </button>
            <button
              onClick={() => {
                onSelectTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#88a4be] hover:text-white transition-colors cursor-pointer text-left"
            >
              Governance & Compliance
            </button>
            <button
              onClick={() => {
                onSelectTab('curriculum');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#88a4be] hover:text-white transition-colors cursor-pointer text-left"
            >
              Curriculum Framework
            </button>
            <button
              onClick={() => {
                onSelectTab('investment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#88a4be] hover:text-white transition-colors cursor-pointer text-left"
            >
              Pilot Matrices
            </button>
            <button
              onClick={() => {
                onSelectTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#88a4be] hover:text-white transition-colors cursor-pointer text-left"
            >
              About & Team
            </button>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[12px] text-[#88a4be] gap-4">
          <p>
            Registered in Scotland. Forecasts are not trading results. Illustrative, not forecast sales. All rights reserved.
          </p>
          <p className="text-right">
            © 2026 Watch This Space Group Ltd. Strict Governance & Educational Standards.
          </p>
        </div>
      </div>
    </footer>
  );
};
