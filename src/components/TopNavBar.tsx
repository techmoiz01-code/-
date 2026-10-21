import React, { useState, useEffect } from 'react';
import type { NavTab } from '../types';

interface TopNavBarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onRequestInvestorPack: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  activeTab,
  onSelectTab,
  onRequestInvestorPack,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'opportunity', label: 'Opportunity' },
    { id: 'curriculum', label: 'Creative Curriculum' },
    { id: 'investment', label: 'Investment' },
    { id: 'pilot', label: 'Classroom Pilot' },
  ];

  const handleNavClick = (tabId: NavTab) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1d3a50] border-b-[3px] border-[#b9003d] shadow-[0_4px_20px_-2px_rgba(3,36,57,0.35)] font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Anchor - Bold (700) / Extra-Bold, 18px-20px */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none shrink-0 mr-4 xl:mr-8"
          title="Watch This Space Group - Home"
        >
          <span className="text-[18px] sm:text-[19px] xl:text-[20px] font-bold tracking-tight text-white whitespace-nowrap group-hover:text-white/95 transition-colors">
            Watch This Space Group
          </span>
        </button>

        {/* Desktop Navigation Links - Medium (500) 14px-15px, tracking-[0.01em], Active: Semi-Bold (600) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 shrink-0" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[14px] xl:text-[15px] tracking-[0.01em] whitespace-nowrap inline-flex items-center gap-1.5 transition-colors duration-150 cursor-pointer focus:outline-none py-1.5 border-b-2 ${
                  isActive
                    ? 'font-semibold text-white border-[#b9003d]'
                    : 'font-medium text-white/80 hover:text-white border-transparent hover:border-white/30'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffdf93] inline-block shrink-0 shadow-xs"></span>
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Trailing Primary Action & Mobile Toggle - CTA: Semi-Bold (600), 14px, tracking-[0.02em], Title Case */}
        <div className="flex items-center gap-2.5 shrink-0 ml-3 xl:ml-6">
          <button
            onClick={() => {
              onRequestInvestorPack();
              setMobileMenuOpen(false);
            }}
            className="h-10 px-5 rounded-full bg-[#b9003d] hover:bg-[#dd2a54] text-white text-[14px] font-semibold tracking-[0.02em] transition-all duration-150 shadow-md hover:-translate-y-0.5 active:scale-[0.99] flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Request Investor Pack</span>
            <span className="material-symbols-outlined text-[17px] shrink-0">arrow_forward</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 active:bg-white/15 focus:outline-none cursor-pointer flex items-center justify-center transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[83px] bottom-0 bg-[#032439] z-50 flex flex-col justify-between overflow-y-auto border-t border-white/10 animate-in fade-in duration-150">
          <div className="p-6 space-y-2">
            <div className="text-[12px] uppercase tracking-wider text-[#ffdf93] font-semibold px-3 pb-2 border-b border-white/10">
              Primary Navigation
            </div>

            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3.5 px-4 rounded-xl text-[15px] flex items-center justify-between cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold border-l-4 border-[#b9003d]'
                      : 'text-white/80 hover:bg-white/5 hover:text-white font-medium'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#ffdf93] shadow-xs"></span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    )}
                    {item.label}
                  </span>
                  <span className="material-symbols-outlined text-sm opacity-60">
                    chevron_right
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-6 bg-[#021826] border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                onRequestInvestorPack();
                setMobileMenuOpen(false);
              }}
              className="w-full h-11 bg-[#b9003d] hover:bg-[#dd2a54] text-white rounded-full font-semibold text-[14px] tracking-[0.02em] shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span>Request Investor Pack</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <div className="text-center text-[12px] text-[#88a4be]">
              <p>Watch This Space Group Ltd • Registered in Scotland</p>
              <p className="mt-1 text-[11px] text-white/50">Curriculum for Excellence • Expressive Arts Platform</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNavBar;
