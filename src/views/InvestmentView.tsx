import React, { useState } from 'react';
import { NavTab } from '../types';
import { MemorialTribute } from '../components/MemorialTribute';

interface InvestmentViewProps {
  onSelectTab: (tab: NavTab) => void;
  onRequestInvestorPack: () => void;
}

export const InvestmentView: React.FC<InvestmentViewProps> = ({
  onSelectTab,
  onRequestInvestorPack,
}) => {
  const [activeTranche, setActiveTranche] = useState<number>(1);
  const [selectedAllocation, setSelectedAllocation] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* SECTION 01: HERO - INVESTMENT PROPOSITION */}
      <section className="bg-[#1d3a50] text-white relative overflow-hidden py-16 md:py-24 border-b border-white/20" id="investment">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Compliance pill on Hero */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
            <span className="material-symbols-outlined text-[#ffdf93] text-[16px]">verified_user</span>
            <span className="text-[12px] tracking-wider uppercase text-[#e6f2ff] font-bold">
              Forecasts are not trading results. Illustrative, not forecast sales.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Headline group with Hero Accent Bar */}
            <div className="lg:col-span-8 flex gap-5">
              <div className="w-1 bg-[#d1a621] self-stretch flex-shrink-0 rounded-full shadow-[0_0_8px_rgba(209,166,33,0.3)]"></div>
              <div className="flex flex-col">
                <h1 className="text-[34px] sm:text-[44px] md:text-[52px] font-black text-white leading-tight">
                  Scaling Systemic Creative Learning Across Primary Education
                </h1>
                <p className="text-[18px] md:text-[19px] text-[#e6f2ff] mt-6 max-w-2xl font-light leading-relaxed">
                  A £3,000,000 growth equity opportunity to establish the definitive physical-digital expressive arts delivery platform for schools across Scotland, the UK, and international territories.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onRequestInvestorPack}
                    className="inline-flex items-center bg-[#b9003d] hover:bg-[#dd2a54] text-white px-8 py-3.5 rounded-full text-[14px] font-bold shadow-md hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
                  >
                    <span className="material-symbols-outlined mr-2">download</span>
                    Request Investor Pack
                  </button>
                  <button
                    onClick={() => {
                      const pilotEl = document.getElementById('pilot-section');
                      if (pilotEl) pilotEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-[#1d3a50] text-white px-7 py-3 rounded-full text-[14px] font-bold transition-colors cursor-pointer"
                  >
                    Explore Pilot Matrix
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Supporting Photographic Anchor */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="bg-white/5 p-3 rounded-xl border border-white/20 backdrop-blur-md shadow-2xl">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Scottish primary school classroom with diverse young pupils gathered around a timber table engaged in multimodal creative learning"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHV2a_iweAAkr7xig19f24qaSf-yBZwVvZTLgDXD4f5ybcR4MYWDcf-Wyc9y-pSIHqL-6oWBYyA69nJNL-9-8Pk3PhCjWcNnluQlPS7kunyjlWvjEIUEvanst9F5L3mmPYk-WEvhnVvk4rOIJkMyVa0X77JcrrSt6E72p31M_1-KEsYF6iq3ig0gLkCjJXi5w0wteeJC5EC-W4VYuGi7t17U8uKF0k_bHwsrrLaMZFJVV8WfltprPR"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032439]/85 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[11px] bg-[#d1a621]/90 text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider inline-block">
                      Live Testbed
                    </span>
                    <p className="text-[13px] text-white font-bold mt-1">
                      Classroom-proven hands-on creative kits with synchronous digital masterclasses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20">
            {/* Pillar 1 */}
            <div className="bg-white/10 p-6 rounded-xl border border-white/15 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[#ffdf93] mb-2">
                  <span className="text-[12px] uppercase tracking-wider font-bold">Target Equity</span>
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
                <div className="text-[44px] font-black text-white leading-none">£3.0M</div>
                <div className="text-[14px] font-bold text-[#e6f2ff] mt-2">Growth Round</div>
              </div>
              <p className="text-[12px] text-[#88a4be] mt-4 border-t border-white/10 pt-3 leading-relaxed">
                Staged milestones aligned to classroom adoption velocity and regional scale.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/10 p-6 rounded-xl border border-white/15 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] uppercase tracking-wider text-[#ffdf93] font-bold">Institutional Pricing</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#d1a621] text-white text-[11px] font-bold tracking-tight">
                    Working price
                  </span>
                </div>
                <div className="text-[44px] font-black text-white leading-none">£25</div>
                <div className="text-[14px] font-bold text-[#e6f2ff] mt-2">per pupil / year</div>
              </div>
              <p className="text-[12px] text-[#88a4be] mt-4 border-t border-white/10 pt-3 leading-relaxed">
                Full turn-key subscription covering physical supplies, cloud software, and CPD credits.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/10 p-6 rounded-xl border border-white/15 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[#ffdf93] mb-2">
                  <span className="text-[12px] uppercase tracking-wider font-bold">Scottish Validation</span>
                  <span className="material-symbols-outlined text-[20px]">domain</span>
                </div>
                <div className="text-[40px] font-black text-white leading-none">5-School</div>
                <div className="text-[14px] font-bold text-[#e6f2ff] mt-2">Pilot Programme</div>
              </div>
              <p className="text-[12px] text-[#88a4be] mt-4 border-t border-white/10 pt-3 leading-relaxed">
                Structured rollout with Scottish local authority partner clusters across diverse demographics.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white/10 p-6 rounded-xl border border-white/15 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[#ffdf93] mb-2">
                  <span className="text-[12px] uppercase tracking-wider font-bold">Content Asset Base</span>
                  <span className="material-symbols-outlined text-[20px]">auto_stories</span>
                </div>
                <div className="text-[44px] font-black text-white leading-none">164</div>
                <div className="text-[14px] font-bold text-[#e6f2ff] mt-2">Curriculum Packs</div>
              </div>
              <p className="text-[12px] text-[#88a4be] mt-4 border-t border-white/10 pt-3 leading-relaxed">
                Comprehensive Primary 1 to 7 curriculum inventory roadmap scaling to Year 5 maturity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: CAPITAL ALLOCATION & STAGED FUNDING TRANCHES */}
      <section className="py-20 md:py-28 bg-[#f7f9ff]" id="capital-deployment">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Header */}
          <div className="mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#032439] tracking-tight">
              Staged Capital Release Matched to De-Risked Milestones
            </h2>
            <div className="mt-3 flex items-center gap-2 text-[14px] text-[#73777d]">
              <span className="material-symbols-outlined text-[#b9003d] text-sm">info</span>
              <span className="italic font-medium">Timing and release conditions require investor agreement.</span>
            </div>
          </div>

          {/* Tranche Milestones Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tranche 1 */}
            <div
              onClick={() => setActiveTranche(1)}
              className={`bg-white rounded-xl border p-8 relative flex flex-col justify-between transition-all cursor-pointer ${
                activeTranche === 1
                  ? 'border-[#b9003d] ring-2 ring-[#b9003d]/30 shadow-xl'
                  : 'border-[#c3c7cd]/60 hover:border-[#032439]/30 shadow-sm'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#b9003d] rounded-t-xl"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded bg-[#ffdadc] text-[#40000f] text-[12px] font-bold">
                    Tranche 1
                  </span>
                  <span className="text-[24px] font-bold text-[#032439]">£750,000</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#032439] mb-2">Foundation & Pilot Launch</h3>
                <p className="text-[14px] text-[#42474c] mb-6 leading-relaxed">
                  De-risking classroom integration through direct operational delivery in Scottish education.
                </p>
                <ul className="space-y-3.5 text-[14px] text-[#041d2e] border-t border-[#c3c7cd]/40 pt-6">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#b9003d] text-lg mt-0.5">check_circle</span>
                    <span>5-school Scottish pilot execution and validation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#b9003d] text-lg mt-0.5">check_circle</span>
                    <span>Physical box supply chain tooling and local assembly</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#b9003d] text-lg mt-0.5">check_circle</span>
                    <span>Production of initial 12 core multimodal topic packs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#b9003d] text-lg mt-0.5">check_circle</span>
                    <span>Direct Local Authority stakeholder engagement protocols</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#c3c7cd]/30 flex items-center justify-between text-[12px] text-[#73777d]">
                <span>Duration: Months 1–8</span>
                <span className="font-bold text-[#b9003d]">Gate 1 Clearance</span>
              </div>
            </div>

            {/* Tranche 2 */}
            <div
              onClick={() => setActiveTranche(2)}
              className={`bg-white rounded-xl border p-8 relative flex flex-col justify-between transition-all cursor-pointer ${
                activeTranche === 2
                  ? 'border-[#d1a621] ring-2 ring-[#d1a621]/30 shadow-xl'
                  : 'border-[#c3c7cd]/60 hover:border-[#032439]/30 shadow-sm'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#d1a621] rounded-t-xl"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded bg-[#ffdf93] text-[#503d00] text-[12px] font-bold">
                    Tranche 2
                  </span>
                  <span className="text-[24px] font-bold text-[#032439]">£1,250,000</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#032439] mb-2">Scottish Regional Expansion</h3>
                <p className="text-[14px] text-[#42474c] mb-6 leading-relaxed">
                  Systemic scaling across Scottish primary clusters and cloud whiteboard platform scaling.
                </p>
                <ul className="space-y-3.5 text-[14px] text-[#041d2e] border-t border-[#c3c7cd]/40 pt-6">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#765b00] text-lg mt-0.5">check_circle</span>
                    <span>Rollout across 32 Scottish local authority clusters</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#765b00] text-lg mt-0.5">check_circle</span>
                    <span>Proprietary interactive whiteboard platform scaling</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#765b00] text-lg mt-0.5">check_circle</span>
                    <span>High-fidelity video production studio build-out</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#765b00] text-lg mt-0.5">check_circle</span>
                    <span>Scaling curriculum assets to 50 comprehensive topic packs</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#c3c7cd]/30 flex items-center justify-between text-[12px] text-[#73777d]">
                <span>Duration: Months 9–20</span>
                <span className="font-bold text-[#765b00]">Gate 2 Clearance</span>
              </div>
            </div>

            {/* Tranche 3 */}
            <div
              onClick={() => setActiveTranche(3)}
              className={`bg-white rounded-xl border p-8 relative flex flex-col justify-between transition-all cursor-pointer ${
                activeTranche === 3
                  ? 'border-[#1d3a50] ring-2 ring-[#1d3a50]/30 shadow-xl'
                  : 'border-[#c3c7cd]/60 hover:border-[#032439]/30 shadow-sm'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1d3a50] rounded-t-xl"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded bg-[#cce5ff] text-[#001e31] text-[12px] font-bold">
                    Tranche 3
                  </span>
                  <span className="text-[24px] font-bold text-[#032439]">£1,000,000</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#032439] mb-2">UK & Global Acceleration</h3>
                <p className="text-[14px] text-[#42474c] mb-6 leading-relaxed">
                  Expansion across UK Multi-Academy Trusts (MATs) and international international school licensing.
                </p>
                <ul className="space-y-3.5 text-[14px] text-[#041d2e] border-t border-[#c3c7cd]/40 pt-6">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#1d3a50] text-lg mt-0.5">check_circle</span>
                    <span>English Multi-Academy Trust framework contracts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#1d3a50] text-lg mt-0.5">check_circle</span>
                    <span>International British curriculum & bilingual licensing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#1d3a50] text-lg mt-0.5">check_circle</span>
                    <span>Completion of full 164 topic pack master library</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#1d3a50] text-lg mt-0.5">check_circle</span>
                    <span>Automated central warehouse & replenishment logistics</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#c3c7cd]/30 flex items-center justify-between text-[12px] text-[#73777d]">
                <span>Duration: Months 21–36</span>
                <span className="font-bold text-[#1d3a50]">Maturity Phase</span>
              </div>
            </div>
          </div>

          {/* Capital Breakdown Allocation Panel */}
          <div className="mt-16 bg-white p-8 md:p-10 rounded-xl border border-[#c3c7cd]/60 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[12px] uppercase tracking-wider text-[#73777d] font-bold">Use of Proceeds</span>
                <h3 className="text-[22px] font-bold text-[#032439]">Disciplined Capital Distribution</h3>
              </div>
              <div className="text-[14px] text-[#42474c] max-w-md">
                Allocation structured to establish proprietary content defensibility and reliable recurring school subscription cash flows.
              </div>
            </div>

            {/* Distribution Bar */}
            <div className="w-full h-5 rounded-full overflow-hidden flex shadow-inner bg-[#ecf4ff] mb-8">
              <div
                className="bg-[#1d3a50] hover:opacity-90 transition-opacity cursor-pointer"
                style={{ width: '35%' }}
                onClick={() => setSelectedAllocation('content')}
                title="Content & Curriculum (35%)"
              ></div>
              <div
                className="bg-[#b9003d] hover:opacity-90 transition-opacity cursor-pointer"
                style={{ width: '25%' }}
                onClick={() => setSelectedAllocation('tooling')}
                title="Box Tooling & Supply Chain (25%)"
              ></div>
              <div
                className="bg-[#d1a621] hover:opacity-90 transition-opacity cursor-pointer"
                style={{ width: '20%' }}
                onClick={() => setSelectedAllocation('platform')}
                title="Digital Whiteboard Platform (20%)"
              ></div>
              <div
                className="bg-[#032439] hover:opacity-90 transition-opacity cursor-pointer"
                style={{ width: '20%' }}
                onClick={() => setSelectedAllocation('ops')}
                title="School Clusters & Ops (20%)"
              ></div>
            </div>

            {/* Cards for the 4 Allocations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                onClick={() => setSelectedAllocation('content')}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  selectedAllocation === 'content' ? 'border-[#1d3a50] bg-[#ecf4ff]' : 'border-[#c3c7cd]/40 bg-[#f7f9ff]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3.5 h-3.5 rounded bg-[#1d3a50] inline-block"></span>
                  <span className="text-[22px] font-bold text-[#032439]">35%</span>
                </div>
                <h4 className="text-[14px] font-bold text-[#032439] mb-1">Content & Curriculum</h4>
                <p className="text-[12px] text-[#42474c] leading-relaxed">
                  Primary-specialist curriculum authors, video masterclass captures, and continuous CfE/National Curriculum alignment.
                </p>
              </div>

              <div
                onClick={() => setSelectedAllocation('tooling')}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  selectedAllocation === 'tooling' ? 'border-[#b9003d] bg-[#ffdadc]/40' : 'border-[#c3c7cd]/40 bg-[#f7f9ff]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3.5 h-3.5 rounded bg-[#b9003d] inline-block"></span>
                  <span className="text-[22px] font-bold text-[#032439]">25%</span>
                </div>
                <h4 className="text-[14px] font-bold text-[#032439] mb-1">Box Tooling & Supply Chain</h4>
                <p className="text-[12px] text-[#42474c] leading-relaxed">
                  Injection-moulded classroom storage units, sustainable multi-media materials, and bulk logistics procurement.
                </p>
              </div>

              <div
                onClick={() => setSelectedAllocation('platform')}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  selectedAllocation === 'platform' ? 'border-[#d1a621] bg-[#ffdf93]/30' : 'border-[#c3c7cd]/40 bg-[#f7f9ff]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3.5 h-3.5 rounded bg-[#d1a621] inline-block"></span>
                  <span className="text-[22px] font-bold text-[#032439]">20%</span>
                </div>
                <h4 className="text-[14px] font-bold text-[#032439] mb-1">Digital Whiteboard Platform</h4>
                <p className="text-[12px] text-[#42474c] leading-relaxed">
                  Cloud classroom software, synchronized teacher-to-screen controls, analytics dashboard, and SSO integrations.
                </p>
              </div>

              <div
                onClick={() => setSelectedAllocation('ops')}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  selectedAllocation === 'ops' ? 'border-[#032439] bg-[#e1f0ff]' : 'border-[#c3c7cd]/40 bg-[#f7f9ff]'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3.5 h-3.5 rounded bg-[#032439] inline-block"></span>
                  <span className="text-[22px] font-bold text-[#032439]">20%</span>
                </div>
                <h4 className="text-[14px] font-bold text-[#032439] mb-1">School Clusters & Ops</h4>
                <p className="text-[12px] text-[#42474c] leading-relaxed">
                  Local Authority liaisons, school success coaching, field training deployments, and compliance auditing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: SCOTTISH 5-SCHOOL PILOT PROGRAMME ARCHITECTURE */}
      <section className="py-20 md:py-28 bg-[#ecf4ff] border-y border-[#c3c7cd]/30" id="pilot-section">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Header & Context */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-8">
              <h2 className="text-[30px] md:text-[38px] font-bold text-[#032439] tracking-tight">
                Rigorous Empirical Testing Across Scottish Classrooms
              </h2>
              <p className="text-[17px] text-[#42474c] mt-3 max-w-2xl leading-relaxed">
                An evidence-led deployment testing generalist teacher confidence, verifiable preparation time reduction, and curriculum-wide attainment across representative Scottish local authority clusters.
              </p>
            </div>
            <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-[#c3c7cd]/50 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#b9003d] text-2xl">location_on</span>
                <div>
                  <span className="text-[14px] font-bold text-[#032439] block">Cluster Archetype Representation</span>
                  <span className="text-[12px] text-[#73777d]">Rural, suburban, & urban SIMD profile distribution</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Phase Pilot Roadmap Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phase 1 */}
            <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/50 flex flex-col justify-between shadow-sm relative">
              <div className="w-8 h-8 rounded-full bg-[#b9003d] text-white flex items-center justify-center font-bold text-[14px] mb-4 shadow">
                1
              </div>
              <div>
                <span className="text-[12px] text-[#73777d] font-bold uppercase tracking-wider block">Weeks 1–4</span>
                <h3 className="text-[20px] font-bold text-[#032439] mb-2 mt-1">Onboarding & Baseline</h3>
                <p className="text-[14px] text-[#42474c] leading-relaxed">
                  Teacher confidence index baseline survey, material box logistics check, and classroom whiteboard pre-configuration.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/20 flex items-center text-[12px] text-[#b9003d] font-bold gap-1">
                <span className="material-symbols-outlined text-sm">task_alt</span>
                Workload metric benchmarked
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/50 flex flex-col justify-between shadow-sm relative">
              <div className="w-8 h-8 rounded-full bg-[#b9003d] text-white flex items-center justify-center font-bold text-[14px] mb-4 shadow">
                2
              </div>
              <div>
                <span className="text-[12px] text-[#73777d] font-bold uppercase tracking-wider block">Weeks 5–16</span>
                <h3 className="text-[20px] font-bold text-[#032439] mb-2 mt-1">Live Classroom Delivery</h3>
                <p className="text-[14px] text-[#42474c] leading-relaxed">
                  Generalist teachers conducting weekly multi-modal expressive sessions using step-by-step guides and video masterclasses.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/20 flex items-center text-[12px] text-[#b9003d] font-bold gap-1">
                <span className="material-symbols-outlined text-sm">task_alt</span>
                100% generalist led
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/50 flex flex-col justify-between shadow-sm relative">
              <div className="w-8 h-8 rounded-full bg-[#b9003d] text-white flex items-center justify-center font-bold text-[14px] mb-4 shadow">
                3
              </div>
              <div>
                <span className="text-[12px] text-[#73777d] font-bold uppercase tracking-wider block">Weeks 17–20</span>
                <h3 className="text-[20px] font-bold text-[#032439] mb-2 mt-1">Attainment Review</h3>
                <p className="text-[14px] text-[#42474c] leading-relaxed">
                  Verification of the 4.2 hours/week teacher prep time savings and pupil expressive arts portfolio creation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/20 flex items-center text-[12px] text-[#b9003d] font-bold gap-1">
                <span className="material-symbols-outlined text-sm">task_alt</span>
                Empirical audit data logged
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/50 flex flex-col justify-between shadow-sm relative">
              <div className="w-8 h-8 rounded-full bg-[#b9003d] text-white flex items-center justify-center font-bold text-[14px] mb-4 shadow">
                4
              </div>
              <div>
                <span className="text-[12px] text-[#73777d] font-bold uppercase tracking-wider block">Weeks 21–26</span>
                <h3 className="text-[20px] font-bold text-[#032439] mb-2 mt-1">Evaluation & Tender</h3>
                <p className="text-[14px] text-[#42474c] leading-relaxed">
                  Independent academic evaluation whitepaper publication and multi-year local authority framework procurement tender.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/20 flex items-center text-[12px] text-[#b9003d] font-bold gap-1">
                <span className="material-symbols-outlined text-sm">task_alt</span>
                Subscription framework signed
              </div>
            </div>
          </div>

          {/* Pilot Operational Matrix Table */}
          <div className="bg-white rounded-xl border border-[#c3c7cd]/60 overflow-hidden shadow-sm">
            <div className="p-6 md:p-8 bg-[#f7f9ff] border-b border-[#c3c7cd]/40 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <h3 className="text-[22px] font-bold text-[#032439]">Operational Rollout Matrix & Key Performance Targets</h3>
                <p className="text-[14px] text-[#42474c] mt-1">Quantitative evaluation criteria monitored bi-weekly across all pilot cohorts.</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d6ebff] text-[#032439] text-[12px] font-bold rounded">
                <span className="material-symbols-outlined text-sm">verified</span> CfE Expressive Arts Audit
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#d1a621] bg-[#f7f9ff] text-[#032439] text-[14px]">
                    <th className="py-3.5 px-6 font-bold uppercase tracking-wider">Evaluation Vector</th>
                    <th className="py-3.5 px-6 font-bold uppercase tracking-wider">Baseline Pre-Pilot</th>
                    <th className="py-3.5 px-6 font-bold uppercase tracking-wider">Target Pilot Outcome</th>
                    <th className="py-3.5 px-6 font-bold uppercase tracking-wider">Measurement Methodology</th>
                    <th className="py-3.5 px-6 font-bold uppercase tracking-wider">Strategic Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c3c7cd]/30 text-[14px] text-[#041d2e]">
                  <tr className="bg-white hover:bg-[#ecf4ff] transition-colors">
                    <td className="py-4 px-6 font-bold text-[#032439] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#b9003d] text-lg">psychology</span>
                      Teacher Confidence Index
                    </td>
                    <td className="py-4 px-6 text-[#73777d]">32% generalists feel confident teaching drama/music</td>
                    <td className="py-4 px-6 font-bold text-[#032439]">≥ 88% confidence rating</td>
                    <td className="py-4 px-6 text-[#42474c]">Validated Likert scale survey at Week 1 vs Week 20</td>
                    <td className="py-4 px-6 text-[#b9003d] font-bold">Eliminates specialist teacher dependency</td>
                  </tr>
                  <tr className="bg-[#f7f9ff] hover:bg-[#ecf4ff] transition-colors">
                    <td className="py-4 px-6 font-bold text-[#032439] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#b9003d] text-lg">schedule</span>
                      Weekly Teacher Prep Time
                    </td>
                    <td className="py-4 px-6 text-[#73777d]">4.8 hours / week sourcing materials & lesson plans</td>
                    <td className="py-4 px-6 font-bold text-[#032439]">≤ 35 mins / week (4.2 hr saving)</td>
                    <td className="py-4 px-6 text-[#42474c]">Weekly digital teacher time-tracker portal</td>
                    <td className="py-4 px-6 text-[#b9003d] font-bold">Direct answer to Scottish workload crisis</td>
                  </tr>
                  <tr className="bg-white hover:bg-[#ecf4ff] transition-colors">
                    <td className="py-4 px-6 font-bold text-[#032439] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#b9003d] text-lg">groups</span>
                      Pupil Engagement & Inclusivity
                    </td>
                    <td className="py-4 px-6 text-[#73777d]">Variable; passive observational tasks common</td>
                    <td className="py-4 px-6 font-bold text-[#032439]">94% active multimodal participation</td>
                    <td className="py-4 px-6 text-[#42474c]">External classroom observation & digital submissions</td>
                    <td className="py-4 px-6 text-[#b9003d] font-bold">Documented ASN / neurodivergent engagement</td>
                  </tr>
                  <tr className="bg-[#f7f9ff] hover:bg-[#ecf4ff] transition-colors">
                    <td className="py-4 px-6 font-bold text-[#032439] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#b9003d] text-lg">school</span>
                      Curriculum for Excellence Alignment
                    </td>
                    <td className="py-4 px-6 text-[#73777d]">Fragmented evidence tracking across outcomes</td>
                    <td className="py-4 px-6 font-bold text-[#032439]">100% Es & Os documented with digital evidence</td>
                    <td className="py-4 px-6 text-[#42474c]">Automated portfolio exports for Local Authority moderation</td>
                    <td className="py-4 px-6 text-[#b9003d] font-bold">Seamless inspection-ready compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Visual Proof Points from Pilot Field Test (Using Provided Imagery) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-md group">
              <img
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Storytelling & Expressive Drama Workshop"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3pf441g9uJKeOXPV1i6SLgCCiai67ccWrLml9ijZUq6x2HttbKBUPzosklzKcO-C19dB48wbzwWlgcNbhnwDVR6WBEKD7H4q9Cb-K-hUcAfPmr8-y-Ck6UHeRYFQeO6iFQB2eULAnSG1HCHfyDsWMsJZye7WU2yKb0qsPAdPE_lbW1cCSSmFHPZLmqdG7iWVWw0LZwbxiprO_ZF4olKJ_mbe1auLy80yWqCknViWyDOS_8iaL91Lt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032439]/90 via-[#032439]/30 to-transparent flex items-end p-4">
                <span className="text-[13px] text-white font-bold">Storytelling & Expressive Drama Workshop</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md group">
              <img
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Visual Arts & Multimodal Palette Integration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbm3wrCtf4OHPl_Xq9MRThzv1LnMGztDjYhqlTiwjJGODRyw-Sbl8PiM5w79Fb5zcb0y11IgpWS1yMr2NqsIYtm4PV7v9gNOsJcFH2wqPTBMVxj1LJK9FtxCgwInKVThYOm2U5Tvh-_Le4Wn21NiXbXD7_XS6S3bMvSchFxLprmtAaPGQr7vgEZlSRcXEaONgIhzMAaokMunfzKJVSjzr9iisbVqV7d28zGMY1Cn9_uw5CAJSXWz_G"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032439]/90 via-[#032439]/30 to-transparent flex items-end p-4">
                <span className="text-[13px] text-white font-bold">Visual Arts & Multimodal Palette Integration</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md group">
              <img
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Collaborative Rhythm & Acoustic Composition"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmoJojNkKKRUW3ilet5rGTWFhyn13-O808v76hLm5P_VSM8-AJirWC9htrdgvPqaNUMGQmUC_U7PfUBoVLfLM-c4Un8qHzmCTQyxjY7hQmzcaWgyvM322QeV4jmwUiLCYiqyznO7Z25FoozYFcYuCT_fTGxVqnk5b053gsvLllnj9SrXR5nhBr-52-MqhiP9NaPrL5r_f3WPBB86rLQaPPxGU7fUA_-nuJ7y_LcGuamGmtU6vOp9Mr"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032439]/90 via-[#032439]/30 to-transparent flex items-end p-4">
                <span className="text-[13px] text-white font-bold">Collaborative Rhythm & Acoustic Composition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: GOVERNANCE, DUE DILIGENCE & MEMORIAL TRIBUTE */}
      <section className="py-20 md:py-28 bg-[#f7f9ff]" id="governance">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Header */}
          <div className="mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#032439] tracking-tight">
              Institutional Rigour, Compliance & Pedagogical Integrity
            </h2>
            <p className="text-[17px] text-[#42474c] mt-2 max-w-2xl leading-relaxed">
              Built from the ground up to respect Scottish public procurement governance, statutory safeguarding standards, and ethical edtech transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Governance Pillars (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/60 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#ecf4ff] text-[#032439] flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">policy</span>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#032439] mb-1">
                    Curricular Oversight & Education Scotland Alignment
                  </h3>
                  <p className="text-[14px] text-[#42474c] leading-relaxed">
                    Independent academic review board continuously audits each topic box for CfE Expressive Arts experiences and outcomes, ensuring rigorous pedagogical standing and inspection readiness across Scottish education authorities.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/60 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#ecf4ff] text-[#032439] flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#032439] mb-1">
                    Audited, Non-Toxic & Sustainable Supply Chains
                  </h3>
                  <p className="text-[14px] text-[#42474c] leading-relaxed">
                    Physical components conform to EN71 safety standards, zero single-use plastics, and FSC-certified paper materials. Tooling and assembly contracts are executed with audited UK & European manufacturing partners.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/60 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#ecf4ff] text-[#032439] flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">shield</span>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#032439] mb-1">
                    Enterprise Data Protection & Child Safeguarding
                  </h3>
                  <p className="text-[14px] text-[#42474c] leading-relaxed">
                    Strict GDPR-compliant, zero-advertiser educational platform architecture. No pupil personal identifying data is sold or profiled; cloud services run on certified sovereign UK server instances.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Memorial Tribute & Due Diligence Access (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Dedicated Memorial Tribute Panel */}
              <MemorialTribute />

              {/* Due Diligence / Data Room Card */}
              <div className="bg-white p-7 rounded-xl border border-[#c3c7cd]/60 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[12px] uppercase tracking-wider text-[#73777d] font-bold">
                    Institutional Data Room
                  </span>
                  <span className="material-symbols-outlined text-[#032439] text-xl">lock</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#032439] mb-2">
                  Confidential Due Diligence Dossier
                </h3>
                <p className="text-[14px] text-[#42474c] mb-5 leading-relaxed">
                  Accredited investors may request verified financial unit economics, detailed pilot site letters of intent, operational risk matrices, and complete IP filings.
                </p>
                <button
                  onClick={onRequestInvestorPack}
                  className="inline-flex items-center justify-center w-full bg-[#032439] hover:bg-[#1d3a50] text-white px-5 py-3 rounded-full text-[14px] font-bold transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined mr-2 text-sm">folder_zip</span>
                  Access Data Room & Models
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: CALL TO ACTION & COMPLIANCE BANNER */}
      <section className="bg-[#032439] text-white py-20 md:py-24 relative overflow-hidden" id="request-pack">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[30px] md:text-[38px] font-bold text-white tracking-tight">
              Access the Complete Investment Prospectus & Pilot Dossier
            </h2>
            <p className="text-[18px] text-[#e6f2ff] mt-4 font-light leading-relaxed">
              Review detailed financial projections, Scottish local authority rollout schedules, box unit economics, and formal investment documentation.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onRequestInvestorPack}
                className="inline-flex items-center bg-[#b9003d] hover:bg-[#dd2a54] text-white px-8 py-4 rounded-full text-[14px] font-bold shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined mr-2">send</span>
                Request Investor Pack
              </button>
              <button
                onClick={onRequestInvestorPack}
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-[#032439] text-white px-8 py-3.5 rounded-full text-[14px] font-bold transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined mr-2">file_download</span>
                Download Executive Summary
              </button>
            </div>
            <p className="text-[12px] text-[#88a4be] mt-6">
              Direct institutional inquiries:{' '}
              <a className="text-[#ffdf93] hover:underline font-bold" href="mailto:invest@watchthisspacegroup.com">
                invest@watchthisspacegroup.com
              </a>
            </p>
          </div>

          {/* Prominent Mandatory Compliance Box */}
          <div className="mt-16 bg-white/10 border border-white/20 rounded-xl p-6 md:p-8 backdrop-blur-md">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#ffdf93] text-2xl mt-0.5 flex-shrink-0">
                gavel
              </span>
              <div className="space-y-2 text-left">
                <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">
                  Mandatory Regulatory & Statutory Compliance Notice
                </h4>
                <p className="text-[12px] text-[#e6f2ff]/80 leading-relaxed">
                  <strong>£25 per pupil represents our working price model.</strong> Forecasts are not trading results. Illustrative, not forecast sales. Timing and release conditions require investor agreement. Registered in Scotland. This page does not constitute an offer to sell or a solicitation of an offer to subscribe for shares in any jurisdiction. Access to confidential technical documentation, school data, and audited projections is strictly reserved for qualified institutional participants and authorized co-investors upon execution of mutual non-disclosure covenants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
