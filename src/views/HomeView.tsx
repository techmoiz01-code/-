import React from 'react';
import { NavTab } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onRequestInvestorPack: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onRequestInvestorPack,
}) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Master Navy #1D3A50) */}
      <section className="relative bg-[#1d3a50] text-white overflow-hidden py-16 md:py-24" id="hero">
        {/* Subtle architectural backdrop texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffdf93_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Executive Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              {/* Gold Accent Label Group */}
              <div className="flex items-center gap-3">
                <span className="w-1 bg-[#F8C945] h-6 rounded-full inline-block"></span>
                <span className="text-[13px] text-[#ffdf93] uppercase tracking-widest font-bold">
                  WATCH THIS SPACE GROUP
                </span>
              </div>

              {/* Headline with 4px Gold vertical bar anchor */}
              <div className="border-l-4 border-[#ffdf93] pl-5 md:pl-6 my-2">
                <h1 className="text-[32px] sm:text-[42px] md:text-[52px] font-black tracking-tight text-white leading-tight">
                  Pioneering the delivery of Expressive Arts
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-[#ffdf93] text-[20px] md:text-[22px] font-semibold tracking-normal">
                Every child. Every teacher. Creative learning made practical.
              </p>

              {/* Summary Paragraph */}
              <p className="text-white/95 text-[17px] md:text-[19px] leading-relaxed max-w-2xl font-light">
                Scotland first initiative scaling across the UK and internationally. Currently seeking £3m in growth capital to scale our blended digital-and-physical creative curriculum platform to primary and secondary schools across local authorities.
              </p>

              {/* Call-to-Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onRequestInvestorPack}
                  className="bg-[#b9003d] text-white hover:bg-[#dd2a54] transition-all duration-150 px-7 py-3.5 rounded-full text-[14px] font-bold text-center shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Investor Pack</span>
                  <span className="material-symbols-outlined text-[18px]">description</span>
                </button>
                <button
                  onClick={() => {
                    onSelectTab('opportunity');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-150 px-7 py-3.5 rounded-full text-[14px] font-medium text-center inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore the Opportunity</span>
                  <span className="material-symbols-outlined text-[18px]">explore</span>
                </button>
              </div>

              {/* Institutional Accreditation Badge / Proof Point */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#88a4be]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ffdf93] text-sm">verified_user</span>
                  <span>Curriculum for Excellence Aligned</span>
                </div>
                <span className="text-white/30">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ffdf93] text-sm">school</span>
                  <span>5-Authority Pilot Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Image Asset */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Golden accent background aura */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#b9003d]/30 via-[#d1a621]/20 to-transparent rounded-2xl blur-lg -z-10"></div>
                <div className="overflow-hidden rounded-xl border border-white/20 bg-[#032439] shadow-2xl custom-hero-glow">
                  <img
                    alt="Artistic concept of a young school pupil happily sitting and reading on a giant flying open storybook floating gently above clouds"
                    className="w-full h-[380px] md:h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyO-LuxJy_DkYCV1qzrsysDpBUC_G0HNCJcCxRfAeLSRPwNM1h4747S0OOZHXUTkBa-G3KkwT8AHxdoCe2gPwDcRv9PlB56Z1sxWE0RIydUUWheHQRGPANwrZhPIcu8QCoA_2x12LCbaKVlUoPdV95IH9OB6SHA6uIS_2lB9Iier3D80U9oRAvboeP7mVPtYigB0Pa8fHTeoMwRKz60rpmj0PM0YA6cGaj2Xb0oaY7Ej6hTQmmc5oe"
                  />
                  <div className="p-4 bg-[#032439]/95 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#efc13d] animate-pulse"></span>
                      <span className="text-[12px] text-[#88a4be]">Expressive Arts Pedagogical Model</span>
                    </div>
                    <span className="text-[12px] text-[#ffdf93] font-bold">Scottish Heritage Framework</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION AND MISSION SECTION */}
      <section className="py-20 md:py-28 bg-white" id="vision">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Header Structure */}
          <div className="mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#032439] tracking-tight">
              Institutional Rigor Meets Creative Liberation
            </h2>
            <p className="text-[17px] text-[#42474c] max-w-2xl mt-2 leading-relaxed">
              A sustainable systemic framework bridging classroom delivery capacity with comprehensive expressive education.
            </p>
          </div>

          {/* Two Structured Cards Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Our Vision */}
            <div className="bg-[#f7f9ff] p-8 md:p-10 rounded-xl border border-[#c3c7cd]/40 border-t-4 border-t-[#1d3a50] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#e1f0ff] flex items-center justify-center text-[#1d3a50] mb-6">
                  <span className="material-symbols-outlined text-[28px]">visibility</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#b9003d] mb-2 block">
                  Pedagogical Horizons
                </span>
                <h3 className="text-[22px] font-bold text-[#032439] mb-4">
                  Our Vision
                </h3>
                <p className="text-[18px] text-[#041d2e] leading-relaxed font-light">
                  To unlock every child's creative potential through accessible, high-grade expressive arts experiences embedded permanently into the daily rhythm of primary and secondary schooling.
                </p>
              </div>
              <div className="pt-8 mt-6 border-t border-[#c3c7cd]/30 flex items-center justify-between text-[12px] text-[#42474c]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#b9003d] text-sm">verified</span>
                  Systemic Lifelong Impact
                </span>
                <span className="font-bold text-[#032439]">Equity of Access</span>
              </div>
            </div>

            {/* Card 2: Our Mission */}
            <div className="bg-[#f7f9ff] p-8 md:p-10 rounded-xl border border-[#c3c7cd]/40 border-t-4 border-t-[#b9003d] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#ffdadc]/50 flex items-center justify-center text-[#b9003d] mb-6">
                  <span className="material-symbols-outlined text-[28px]">flag</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#032439] mb-2 block">
                  Classroom Enablement
                </span>
                <h3 className="text-[22px] font-bold text-[#032439] mb-4">
                  Our Mission
                </h3>
                <p className="text-[18px] text-[#041d2e] leading-relaxed font-light">
                  To empower generalist classroom teachers with practical, curriculum-aligned topic packs, continuous confidence building, and structured physical resources that eliminate prep friction and raise attainment.
                </p>
              </div>
              <div className="pt-8 mt-6 border-t border-[#c3c7cd]/30 flex items-center justify-between text-[12px] text-[#42474c]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#b9003d] text-sm">psychology</span>
                  Reduced Teacher Burnout
                </span>
                <span className="font-bold text-[#032439]">Zero Prep Friction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY NUMBERS SECTION */}
      <section className="py-20 md:py-28 bg-[#ecf4ff] border-y border-[#c3c7cd]/40" id="opportunity">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-1.5 w-6 bg-[#b9003d] rounded-full"></span>
                <span className="text-[13px] text-[#032439] font-bold uppercase tracking-wider">
                  02 / COMMERCIAL SCALE & PEDAGOGIC METRICS
                </span>
              </div>
              <h2 className="text-[30px] md:text-[38px] font-bold text-[#032439] tracking-tight">
                High-Density Value Delivery Model
              </h2>
            </div>
            <p className="text-[12px] text-[#73777d] mt-4 md:mt-0 max-w-xs md:text-right">
              Comprehensive quantitative forecasts benchmarked across UK regional educational authorities.
            </p>
          </div>

          {/* 4 Prominent Stat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1: £25 per pupil (MANDATORY LABEL) */}
            <div className="bg-white p-7 rounded-xl border border-[#c3c7cd]/60 shadow-sm relative group hover:border-[#1d3a50] transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-[#d6ebff] text-[#032439]">
                  <span className="material-symbols-outlined text-2xl">payments</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-bold bg-[#ffdadc] text-[#40000f] border border-[#b9003d]/20">
                  (working price)
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[44px] font-black text-[#032439] tracking-tight">£25</span>
                <span className="text-[14px] text-[#42474c] font-bold">per pupil / year</span>
              </div>
              <h4 className="text-[15px] font-bold text-[#032439] mb-2">
                Licensing Architecture
              </h4>
              <p className="text-[14px] text-[#42474c] leading-relaxed">
                Highly accessible local authority and school licensing model ensuring universal baseline adoption.
              </p>
            </div>

            {/* Stat 2: 164 Topic Packs */}
            <div className="bg-white p-7 rounded-xl border border-[#c3c7cd]/60 shadow-sm relative group hover:border-[#1d3a50] transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-[#d6ebff] text-[#032439]">
                  <span className="material-symbols-outlined text-2xl">auto_stories</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-bold bg-[#e1f0ff] text-[#032439]">
                  Year 5 Target
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[44px] font-black text-[#032439] tracking-tight">164</span>
                <span className="text-[14px] text-[#42474c] font-bold">Topic Packs</span>
              </div>
              <h4 className="text-[15px] font-bold text-[#032439] mb-2">
                Curriculum Depth
              </h4>
              <p className="text-[14px] text-[#42474c] leading-relaxed">
                Spanning comprehensive cross-curricular themes across all primary stages from P1 through P7.
              </p>
            </div>

            {/* Stat 3: 6 Expressive Art Forms */}
            <div className="bg-white p-7 rounded-xl border border-[#c3c7cd]/60 shadow-sm relative group hover:border-[#1d3a50] transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-[#d6ebff] text-[#032439]">
                  <span className="material-symbols-outlined text-2xl">palette</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-bold bg-[#e1f0ff] text-[#032439]">
                  Multimodal
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[44px] font-black text-[#b9003d] tracking-tight">6</span>
                <span className="text-[14px] text-[#42474c] font-bold">Art Forms</span>
              </div>
              <h4 className="text-[15px] font-bold text-[#032439] mb-2">
                Integrated Modalities
              </h4>
              <p className="text-[14px] text-[#42474c] leading-relaxed">
                Fully integrated Art & Design, Dance, Drama, Music, Digital Media & Creative Writing frameworks.
              </p>
            </div>

            {/* Stat 4: 5-school Scottish Pilot */}
            <div className="bg-white p-7 rounded-xl border border-[#c3c7cd]/60 shadow-sm relative group hover:border-[#1d3a50] transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-[#d6ebff] text-[#032439]">
                  <span className="material-symbols-outlined text-2xl">biotech</span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-bold bg-[#ffdf93] text-[#503d00]">
                  In Execution
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[38px] font-black text-[#032439] tracking-tight">5-school</span>
              </div>
              <h4 className="text-[15px] font-bold text-[#032439] mb-2">
                Scottish Pilot Programme
              </h4>
              <p className="text-[14px] text-[#42474c] leading-relaxed">
                Rigorously evaluating teacher confidence, pupil engagement, and wellbeing impact indicators.
              </p>
            </div>
          </div>

          {/* Mandatory Regulatory Disclaimer Note beneath grid */}
          <div className="mt-10 p-4 rounded-lg bg-white border border-[#c3c7cd]/60 flex items-center gap-3 shadow-sm">
            <span className="material-symbols-outlined text-[#032439] text-xl shrink-0">gavel</span>
            <p className="text-[12px] text-[#42474c]">
              <strong className="font-bold text-[#032439]">Mandatory Compliance Note:</strong> £25 per pupil represents our working price model. Forecasts are not trading results. All pricing scenarios subject to final authority multi-year procurement schedules.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BAND */}
      <section className="relative bg-[#1d3a50] text-white py-20 overflow-hidden" id="request-pack">
        {/* Gold accent hairline separator running across top of CTA */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#efc13d]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#ffdf93] text-xs font-bold tracking-widest uppercase">
              <span className="material-symbols-outlined text-sm">lock_open</span>
              INVESTOR CLEARANCE PORTAL
            </div>
            <h2 className="text-[32px] md:text-[46px] font-black text-white tracking-tight leading-tight">
              Partner with us to transform creative education
            </h2>
            <p className="text-[18px] text-[#88a4be] leading-relaxed">
              Receive the complete investment prospectus, financial models, and pilot evaluation frameworks.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onRequestInvestorPack}
                className="w-full sm:w-auto bg-[#b9003d] text-white hover:bg-[#dd2a54] transition-all duration-150 px-8 py-4 rounded-full text-[14px] font-bold shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Request Investor pack</span>
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
              <button
                onClick={() => {
                  onSelectTab('investment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white/10 transition-colors px-8 py-4 rounded-full text-[14px] font-medium inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Data Room Criteria</span>
              </button>
            </div>
            <p className="text-[12px] text-[#88a4be]/80 pt-4">
              Strict institutional discretion applies. Qualified investors and local authority leadership only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
