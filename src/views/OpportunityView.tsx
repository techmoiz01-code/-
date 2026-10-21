import React, { useState } from 'react';
import { NavTab } from '../types';

interface OpportunityViewProps {
  onSelectTab: (tab: NavTab) => void;
  onRequestInvestorPack: () => void;
}

export const OpportunityView: React.FC<OpportunityViewProps> = ({
  onSelectTab,
  onRequestInvestorPack,
}) => {
  const [selectedMetric, setSelectedMetric] = useState<number | null>(null);

  const evaluationRows = [
    {
      id: 1,
      no: '01',
      metric: 'Teacher Confidence',
      badge: 'secondary',
      methodology: 'Measured baseline-to-endpoint self-efficacy scores in delivering multi-modal arts sessions without specialist interventions.',
      target: '+40% Target Delta',
      targetStyle: 'bg-[#ffdadc] text-[#40000f]',
      strategicNote: 'Eliminates specialist teacher dependency in rural and urban primary classrooms.',
    },
    {
      id: 2,
      no: '02',
      metric: 'Curriculum Coverage',
      badge: 'tertiary',
      methodology: 'Verification of Curriculum for Excellence (CfE) expressive arts benchmarks attained across P1 to P7 stages.',
      target: '100% CfE Audit',
      targetStyle: 'bg-[#cee5fc] text-[#041d2e]',
      strategicNote: 'Guarantees comprehensive inspection readiness for Education Scotland audits.',
    },
    {
      id: 3,
      no: '03',
      metric: 'Workload & Prep Time',
      badge: 'secondary',
      methodology: 'Quantified reduction in weekly lesson planning and prep hours through modular plug-and-play lesson architectures.',
      target: '-3.5 hrs/week',
      targetStyle: 'bg-[#ffdadc] text-[#40000f]',
      strategicNote: 'Direct measurable response to local authority teacher retention initiatives.',
    },
    {
      id: 4,
      no: '04',
      metric: 'Pupil Engagement',
      badge: 'tertiary',
      methodology: 'Standardised observational and qualitative assessment of classroom participation, focus, and cross-discipline expression.',
      target: 'Standardised Index',
      targetStyle: 'bg-[#cee5fc] text-[#041d2e]',
      strategicNote: 'High engagement documented among neurodivergent and ASN learners.',
    },
    {
      id: 5,
      no: '05',
      metric: 'Wellbeing & Attainment',
      badge: 'secondary',
      methodology: 'Longitudinal evaluation of emotional regulation, collaborative behaviour, and broader literacy/numeracy correlation.',
      target: 'Longitudinal P1-P7',
      targetStyle: 'bg-[#ffdadc] text-[#40000f]',
      strategicNote: 'Tracks cross-curricular attainment uplifts following creative immersion.',
    },
    {
      id: 6,
      no: '06',
      metric: 'Evaluation Standard',
      badge: 'tertiary',
      methodology: 'Independent academic validation methodologies and Scottish local authority compliance reporting protocols.',
      target: 'Academic Peer Protocol',
      targetStyle: 'bg-[#cee5fc] text-[#041d2e]',
      strategicNote: 'Framework verified by independent university pedagogical review panel.',
    },
  ];

  return (
    <div className="w-full">
      {/* HERO / INTRODUCTION BANNER */}
      <section className="bg-[#1d3a50] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            {/* Headline Group with Gold Bar Accent */}
            <div className="max-w-3xl">
              <div className="flex items-stretch gap-5">
                <div className="w-1 bg-[#d1a621] flex-shrink-0 rounded-full"></div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-[34px] sm:text-[44px] md:text-[52px] font-black tracking-tight text-white leading-tight">
                    A Systemic Shift in Expressive Arts Education
                  </h1>
                </div>
              </div>
              <p className="mt-6 text-[#88a4be] text-[18px] md:text-[19px] max-w-2xl leading-relaxed">
                Quantifying the classroom deficit, testing scalable delivery, and addressing a multi-billion pound international market.
              </p>
            </div>

            {/* Quick Institutional Metadata Badge */}
            <div className="hidden lg:flex flex-col bg-white/5 border border-white/15 rounded-xl p-6 backdrop-blur-sm self-center min-w-[280px]">
              <div className="flex items-center gap-2 text-[#ffdf93] text-[14px] uppercase font-bold mb-2">
                <span className="material-symbols-outlined text-sm">verified</span>
                Syllabus Alignment
              </div>
              <div className="text-white text-[22px] font-bold">Scottish CfE & National</div>
              <div className="text-[#88a4be] text-[12px] mt-1">Cross-curricular Expressive Arts Benchmark</div>
              <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between text-[14px]">
                <span className="text-[#88a4be]">Pilot Verification:</span>
                <span className="text-white font-bold">5 Partner Schools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE CLASSROOM NEED */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Label & Title */}
          <div className="mb-12">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#032439] tracking-tight">
              Teacher Confidence Comes First
            </h2>
            <div className="h-1 w-16 bg-[#b9003d] mt-3"></div>
          </div>

          {/* Narrative & Metric Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Fact-Based Narrative */}
            <div className="lg:col-span-7 space-y-6 text-[#42474c] text-[17px] leading-relaxed">
              <p>
                Generalist primary school teachers face severe constraints delivering diverse expressive arts curricula without specialist background or extensive prep time. While arts education fosters foundational cognitive and emotional development, educators operate under tight operational realities.
              </p>

              {/* Key Callout Card */}
              <div className="bg-[#ecf4ff] border-l-4 border-[#b9003d] p-6 rounded-r-xl">
                <p className="text-[#032439] font-bold text-[18px]">
                  Over 78% of primary teachers report feeling under-resourced or lacking formal training in expressive arts modalities (drama, movement, instrumental music).
                </p>
                <p className="text-[12px] text-[#73777d] mt-2">
                  Source: Institutional Survey on Primary Expressive Arts Resourcing & Curriculum Delivery Confidence.
                </p>
              </div>

              <p>
                Watch This Space Group removes classroom delivery friction by providing turn-key, structured, cross-curricular creative packs accompanied by step-by-step video guidance and all physical materials. This empowers non-specialist educators to lead immersive, multi-disciplinary sessions with total professional assurance.
              </p>
            </div>

            {/* Right: Bento Metric & Operational Value Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#f7f9ff] border border-[#c3c7cd]/60 rounded-xl p-6 custom-shadow-l1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[#b9003d] mb-3">
                    <span className="material-symbols-outlined text-2xl">sentiment_dissatisfied</span>
                    <span className="text-[12px] uppercase tracking-wider text-[#73777d] font-bold">Deficit</span>
                  </div>
                  <div className="text-[44px] font-black text-[#032439] leading-none">78%</div>
                  <p className="text-[14px] text-[#42474c] mt-2">
                    Teachers reporting acute deficit in expressive arts training.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#c3c7cd]/30 text-[12px] text-[#b9003d] font-bold">
                  Baseline barrier to delivery
                </div>
              </div>

              <div className="bg-[#f7f9ff] border border-[#c3c7cd]/60 rounded-xl p-6 custom-shadow-l1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[#765b00] mb-3">
                    <span className="material-symbols-outlined text-2xl">timer</span>
                    <span className="text-[12px] uppercase tracking-wider text-[#73777d] font-bold">Efficiency</span>
                  </div>
                  <div className="text-[44px] font-black text-[#032439] leading-none">4.2 hrs</div>
                  <p className="text-[14px] text-[#42474c] mt-2">
                    Average weekly prep saved per teacher using plug-and-play kits.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#c3c7cd]/30 text-[12px] text-[#765b00] font-bold">
                  Workload re-allocation
                </div>
              </div>

              <div className="sm:col-span-2 bg-[#032439] text-white rounded-xl p-6 custom-shadow-l2 border border-[#c3c7cd]/30 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#b9003d] flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <span className="material-symbols-outlined text-2xl">inventory_2</span>
                </div>
                <div>
                  <div className="text-[18px] font-bold text-white">All-Inclusive Modular Architecture</div>
                  <p className="text-[14px] text-[#88a4be] mt-1">
                    Zero prerequisite inventory: reusable physical artifacts, tactile props, and high-fidelity video tutorials delivered in sealed term modules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photographic Moment Strip */}
          <div className="mt-14">
            <div className="border border-[#c3c7cd]/60 rounded-xl overflow-hidden custom-shadow-l1 bg-white">
              <img
                alt="Authentic classroom execution: Primary teachers guiding drama storytelling, hands-on visual arts, and collaborative music ensembles."
                className="w-full h-auto object-cover max-h-[520px]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcjR9h60qQlXyDraOjOnTyb3JI1ROz-D3sVpP3JGoeKE9xMguQUd_ciB3kuOQuCdLnPy7ImBuNn2HFQJc-ooECNMcp1uctpWR7i8qVlJq8i70MlekvctIy8zQDLLVlX3JoPVl9uVlC06UUWzdJPt5ngGB0iR29PNRXOiYLOHYSd9b6QceVZtcPagSWf4xRqTolWCoKSUi31qsHpb3GUNiO8QtP0frVFenc21V3SySpok8XBo0UsFig"
              />
              <div className="p-4 bg-[#f7f9ff] border-t border-[#c3c7cd]/40 flex items-center justify-between flex-wrap gap-2">
                <p className="text-[12px] text-[#42474c] flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#765b00]">photo_camera</span>
                  Authentic classroom execution: Primary teachers guiding drama storytelling, hands-on visual arts, and collaborative music ensembles.
                </p>
                <span className="text-[12px] uppercase tracking-wider font-bold text-[#73777d]">
                  Documentary Field Study · Scottish Cohort
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT THE PILOT WILL TEST */}
      <section className="py-20 md:py-24 bg-[#f7f9ff] border-y border-[#c3c7cd]/30" id="pilot-framework">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#032439] tracking-tight">
              Rigorous 6-Dimension Evaluation Framework
            </h2>
            <p className="mt-4 text-[18px] text-[#42474c] leading-relaxed font-light">
              A comprehensive 6-dimension evaluation framework conducted across 5 Scottish partner primary schools to benchmark pedagogical efficacy, operational viability, and teacher workload reduction.
            </p>
          </div>

          {/* Evaluation Framework Data Table */}
          <div className="overflow-x-auto rounded-xl border border-[#c3c7cd]/50 custom-shadow-l1 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b-[3px] border-[#d1a621] text-[#032439]">
                  <th className="py-4 px-6 text-[14px] font-bold uppercase tracking-wider w-16" scope="col">No.</th>
                  <th className="py-4 px-6 text-[14px] font-bold uppercase tracking-wider w-64" scope="col">Core Evaluation Metric</th>
                  <th className="py-4 px-6 text-[14px] font-bold uppercase tracking-wider" scope="col">Methodology & Target Assessment</th>
                  <th className="py-4 px-6 text-[14px] font-bold uppercase tracking-wider w-44" scope="col">Target Vector</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c3c7cd]/40 text-[15px]">
                {evaluationRows.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => setSelectedMetric(selectedMetric === row.id ? null : row.id)}
                    className={`cursor-pointer transition-colors duration-150 ${
                      row.id % 2 === 1 ? 'bg-white hover:bg-[#ecf4ff]' : 'bg-[#f7f9ff] hover:bg-[#d6ebff]'
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-[#032439]">{row.no}</td>
                    <td className="py-4 px-6 font-bold text-[#032439]">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            row.badge === 'secondary' ? 'bg-[#b9003d]' : 'bg-[#765b00]'
                          }`}
                        ></span>
                        <span>{row.metric}</span>
                      </div>
                      {selectedMetric === row.id && (
                        <p className="text-[12px] text-[#b9003d] font-normal mt-1">
                          ↳ {row.strategicNote}
                        </p>
                      )}
                    </td>
                    <td className="py-4 px-6 text-[#42474c] leading-relaxed">
                      {row.methodology}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-bold ${row.targetStyle}`}>
                        {row.target}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footnote for Pilot Testing */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[12px] text-[#73777d] gap-2">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">info</span>
              Partner schools encompass diverse rural and urban socio-economic profiles across Scottish local authorities.
            </span>
            <span className="font-bold text-[#032439]">Cohort: 5 Pilot Schools · Q1-Q3 Cycle</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: MARKET SIZE & EXPANSION HORIZONS */}
      <section className="py-20 md:py-28 bg-white" id="market-size">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Header */}
          <div className="mb-14">
            <h2 className="text-[30px] md:text-[38px] font-bold text-[#032439] tracking-tight">
              Quantifying the Multi-Tier Market
            </h2>
            <div className="h-1 w-16 bg-[#b9003d] mt-3"></div>
          </div>

          {/* 4-Tier Concentric / Hierarchical Market Visual Display */}
          <div className="bg-[#f7f9ff] rounded-2xl border border-[#c3c7cd]/60 p-8 md:p-12 custom-shadow-l1 mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[12px] uppercase tracking-wider text-[#73777d] font-bold">
                Total Addressable Market Staging
              </span>
              <h3 className="text-[26px] font-bold text-[#032439] mt-1">Concentric Expansion Vectors</h3>
              <p className="text-[15px] text-[#42474c] mt-2">
                Progressing from immediate regional authority clusters to nationwide rollout and international Commonwealth distribution.
              </p>
            </div>

            {/* 4 Hierarchical Concentric Display Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Tier 4: Scottish Initial Market */}
              <div className="bg-white rounded-xl p-6 border-2 border-[#b9003d] relative custom-shadow-l2 flex flex-col justify-between">
                <div className="absolute -top-3 left-4 bg-[#b9003d] text-white px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase">
                  Phase 1 · Seed Focus
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-[#73777d] font-bold mt-2">Tier 04 / Core Launch</div>
                  <div className="text-[44px] font-black text-[#b9003d] mt-2 leading-none">£5.5M</div>
                  <div className="text-[18px] font-bold text-[#032439] mt-2">Scottish Initial Market</div>
                  <p className="text-[14px] text-[#42474c] mt-3 leading-relaxed">
                    Initial 32 Scottish local authority school clusters and regional education cooperatives.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30 text-[12px] text-[#032439] font-bold flex items-center justify-between">
                  <span>32 Council Clusters</span>
                  <span className="material-symbols-outlined text-[#b9003d] text-base">check_circle</span>
                </div>
              </div>

              {/* Tier 3: UK Primary Sector */}
              <div className="bg-white rounded-xl p-6 border border-[#c3c7cd]/60 custom-shadow-l1 flex flex-col justify-between hover:border-[#032439]/40 transition-all">
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-[#73777d] font-bold">Tier 03 / National Scale</div>
                  <div className="text-[44px] font-black text-[#032439] mt-2 leading-none">£45M</div>
                  <div className="text-[18px] font-bold text-[#032439] mt-2">UK Primary Sector</div>
                  <p className="text-[14px] text-[#42474c] mt-3 leading-relaxed">
                    Over 20,000 UK primary schools adopting annual per-pupil arts licensing subscriptions.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30 text-[12px] text-[#032439] font-bold flex items-center justify-between">
                  <span>20,000+ Schools</span>
                  <span className="material-symbols-outlined text-[#765b00] text-base">trending_up</span>
                </div>
              </div>

              {/* Tier 2: UK & European Opportunity */}
              <div className="bg-white rounded-xl p-6 border border-[#c3c7cd]/60 custom-shadow-l1 flex flex-col justify-between hover:border-[#032439]/40 transition-all">
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-[#73777d] font-bold">Tier 02 / Cross-Border</div>
                  <div className="text-[44px] font-black text-[#032439] mt-2 leading-none">£480M</div>
                  <div className="text-[18px] font-bold text-[#032439] mt-2">UK & European Opportunity</div>
                  <p className="text-[14px] text-[#42474c] mt-3 leading-relaxed">
                    State and independent school districts seeking standardized creative curriculum enrichment.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30 text-[12px] text-[#032439] font-bold flex items-center justify-between">
                  <span>Independent & Trusts</span>
                  <span className="material-symbols-outlined text-[#765b00] text-base">public</span>
                </div>
              </div>

              {/* Tier 1: Global Addressable Market */}
              <div className="bg-[#032439] text-white rounded-xl p-6 border border-white/20 custom-shadow-l2 flex flex-col justify-between">
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-[#ffdf93] font-bold">Tier 01 / Full Horizon</div>
                  <div className="text-[44px] font-black text-[#ffdf93] mt-2 leading-none">£1B+</div>
                  <div className="text-[18px] font-bold text-white mt-2">Global Addressable Market</div>
                  <p className="text-[14px] text-[#88a4be] mt-3 leading-relaxed">
                    International English-medium and bilingual primary/secondary schools across target Commonwealth territories.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20 text-[12px] text-[#ffdf93] font-bold flex items-center justify-between">
                  <span>International Hubs</span>
                  <span className="material-symbols-outlined text-[#ffdf93] text-base">language</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Structured Legend / Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card A: SAM */}
            <div className="bg-white border border-[#c3c7cd]/60 rounded-xl p-8 custom-shadow-l1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#e1f0ff] flex items-center justify-center text-[#032439] font-bold text-[20px] mb-4">
                  A
                </div>
                <h4 className="text-[18px] font-bold text-[#032439] mb-2">
                  Serviceable Addressable Market (SAM)
                </h4>
                <p className="text-[14px] text-[#42474c] leading-relaxed">
                  Analysis of target local education authorities and multi-academy trusts ready for pilot-to-scale procurement, focusing on regional authorities with pre-mandated creative metrics.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30 flex items-center text-[12px] text-[#b9003d] font-bold">
                <span className="material-symbols-outlined text-sm mr-1">arrow_forward</span>
                Centralized Local Authority Procurement
              </div>
            </div>

            {/* Card B: SOM */}
            <div className="bg-white border border-[#c3c7cd]/60 rounded-xl p-8 custom-shadow-l1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#e1f0ff] flex items-center justify-center text-[#032439] font-bold text-[20px] mb-4">
                  B
                </div>
                <h4 className="text-[18px] font-bold text-[#032439] mb-2">
                  Obtainable Market (SOM)
                </h4>
                <p className="text-[14px] text-[#42474c] leading-relaxed">
                  Conservative initial phase capturing regional hub authorities with pre-allocated arts and pupil equity funding (PEF), de-risking pilot conversion.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30 flex items-center text-[12px] text-[#765b00] font-bold">
                <span className="material-symbols-outlined text-sm mr-1">arrow_forward</span>
                Funded Educational Equity Allocations
              </div>
            </div>

            {/* Card C: Unit Economics Leverage */}
            <div className="bg-white border border-[#c3c7cd]/60 rounded-xl p-8 custom-shadow-l1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#e1f0ff] flex items-center justify-center text-[#032439] font-bold text-[20px] mb-4">
                  C
                </div>
                <h4 className="text-[18px] font-bold text-[#032439] mb-2">
                  Unit Economics Leverage
                </h4>
                <p className="text-[14px] text-[#42474c] leading-relaxed">
                  High gross margins driven by digital delivery paired with reusable high-density material packs, creating predictable recurring annual subscriptions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30 flex items-center text-[12px] text-[#032439] font-bold">
                <span className="material-symbols-outlined text-sm mr-1">arrow_forward</span>
                Digital Margin Scalability
              </div>
            </div>
          </div>

          {/* Mandatory Compliance Note */}
          <div className="bg-[#F8FAFC] border border-[#c3c7cd]/60 rounded-xl p-6 md:p-8 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#032439] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-xl">lock</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[13px] uppercase tracking-wider text-[#032439] font-bold">
                  Mandatory Compliance Note
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#c3c7cd]/40 text-[#42474c] font-bold">
                  Regulatory Disclosure
                </span>
              </div>
              <p className="text-[14px] text-[#73777d] leading-relaxed">
                Market size figures are illustrative, not forecast sales. Forecasts are not trading results. £25 per pupil represents our working price model. Timing and release conditions require investor agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#1d3a50] text-white py-16 md:py-20 relative border-t-[3px] border-[#b9003d]" id="investor-cta">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-stretch gap-5 max-w-2xl">
              <div className="w-1.5 bg-[#d1a621] rounded-full flex-shrink-0"></div>
              <div>
                <span className="text-[13px] uppercase tracking-widest text-[#ffdf93] font-bold block mb-1">
                  INVESTOR DUE DILIGENCE
                </span>
                <h2 className="text-[28px] md:text-[34px] font-bold text-white">
                  Access the Complete Pilot Evaluation Dataset
                </h2>
                <p className="text-[15px] text-[#88a4be] mt-2">
                  Request the confidential investor pack containing our 5-school pilot methodology, local authority letters of intent, and 5-year unit financial models.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={onRequestInvestorPack}
                className="inline-flex items-center gap-3 bg-[#b9003d] hover:bg-[#dd2a54] text-white px-8 py-3.5 rounded-full text-[14px] font-bold transition-all duration-150 custom-shadow-l2 active:scale-[0.99] cursor-pointer"
              >
                <span>Request investor pack</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
