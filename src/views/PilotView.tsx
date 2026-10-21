import React, { useState } from 'react';
import type { NavTab } from '../types';
import RegulatoryNotice from '../components/RegulatoryNotice';

interface PilotViewProps {
  onNavigate: (tab: NavTab) => void;
  onRequestInvestorPack: () => void;
}

export default function PilotView({ onNavigate, onRequestInvestorPack }: PilotViewProps) {
  const [pupilCount, setPupilCount] = useState<number>(300);
  const [activeCluster, setActiveCluster] = useState<number>(0);

  const calculatedCost = pupilCount * 25;
  const teacherCount = Math.max(1, Math.round(pupilCount / 28));
  const weeklyHoursSaved = teacherCount * 4.2;
  const annualHoursSaved = Math.round(weeklyHoursSaved * 38);
  const estimatedTeacherValue = Math.round(annualHoursSaved * 32.50);

  const clusters = [
    {
      name: "St Ninian's Regional Cluster",
      authority: 'East Dunbartonshire',
      type: 'Suburban / Mixed SIMD Profile',
      pupils: 240,
      classes: 8,
      focus: 'Cross-curricular expressive literacy and dynamic rhythm integration.',
      status: 'Phase 2 Live Deployment',
      badge: 'Urban Fringe'
    },
    {
      name: 'Highland Glen Consolidated',
      authority: 'Highland Council',
      type: 'Remote Rural / Multi-Composite (P1–P7)',
      pupils: 95,
      classes: 4,
      focus: 'Overcoming rural specialist arts isolation through turnkey digital whiteboards.',
      status: 'Phase 2 Live Deployment',
      badge: 'Rural Multi-Stage'
    },
    {
      name: 'Kelvin Valley Primary',
      authority: 'Glasgow City Council',
      type: 'High Density Urban / SIMD Deciles 1–2',
      pupils: 310,
      classes: 11,
      focus: 'Pupil Equity Fund (PEF) integration with tactile inclusive physical resources.',
      status: 'Phase 2 Live Deployment',
      badge: 'PEF Equity Focus'
    },
    {
      name: 'Old Town Community Primary',
      authority: 'City of Edinburgh Council',
      type: 'Central Urban Heritage',
      pupils: 220,
      classes: 7,
      focus: 'Multimodal architectural form, stagecraft, and historic storytelling.',
      status: 'Phase 2 Live Deployment',
      badge: 'Heritage & Arts'
    },
    {
      name: 'East Neuk Maritime Primary',
      authority: 'Fife Council',
      type: 'Coastal Regional / Multi-Stream',
      pupils: 185,
      classes: 6,
      focus: 'Environmental kinetic sculpture and sea-lore creative composition.',
      status: 'Phase 2 Live Deployment',
      badge: 'Coastal Regional'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#041d2e]">
      {/* Hero Header */}
      <section className="bg-[#1d3a50] text-white py-16 md:py-24 relative overflow-hidden border-b border-[#c3c7cd]/20">
        <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">


            <div className="flex gap-5 items-stretch">
              <div className="w-1.5 bg-[#ffdf93] rounded-sm shrink-0"></div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Rigorous Evidence-Led Deployment in Scottish Schools
              </h1>
            </div>

            <p className="text-[#88a4be] text-lg leading-relaxed">
              Evaluating teacher confidence, verifiable preparation time reduction, and pupil expressive attainment across 5 representative Scottish local authorities before national rollout.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-[#ffdf93] block">5</span>
                <span className="text-xs text-[#88a4be]">Schools Participating</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-white block">1,050</span>
                <span className="text-xs text-[#88a4be]">Pupils Engaged</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-white block">4.2 hrs</span>
                <span className="text-xs text-[#88a4be]">Weekly Prep Saved</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-[#ffdf93] block">94%</span>
                <span className="text-xs text-[#88a4be]">Teacher Confidence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cluster Selection & Archetypes */}
      <section className="py-16 bg-white border-b border-[#c3c7cd]/30">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#032439] tracking-tight">
                Diverse Scottish Local Authority Archetypes
              </h2>
            </div>
            <p className="mt-3 md:mt-0 text-sm text-[#42474c] max-w-md">
              Selected across distinct socio-economic deciles and geographic conditions to stress-test logistics and classroom equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
            {clusters.map((cluster, idx) => (
              <button
                key={cluster.name}
                onClick={() => setActiveCluster(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  activeCluster === idx
                    ? 'bg-[#032439] text-white border-[#032439] shadow-md ring-2 ring-[#ffdf93]/50'
                    : 'bg-[#f7f9ff] text-[#041d2e] border-[#c3c7cd]/40 hover:bg-white hover:border-[#032439]/30'
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                  activeCluster === idx ? 'text-[#ffdf93]' : 'text-[#b9003d]'
                }`}>
                  Cluster 0{idx + 1}
                </span>
                <div className="font-bold text-sm leading-snug line-clamp-1">{cluster.name}</div>
                <div className={`text-xs mt-1 ${activeCluster === idx ? 'text-[#88a4be]' : 'text-[#73777d]'}`}>
                  {cluster.authority}
                </div>
              </button>
            ))}
          </div>

          {/* Active Cluster Deep-Dive Card */}
          <div className="bg-[#f7f9ff] border-2 border-[#1d3a50]/20 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#b9003d] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {clusters[activeCluster].badge}
                  </span>
                  <span className="text-xs text-[#73777d] font-bold uppercase tracking-wider">
                    {clusters[activeCluster].authority} Education Directorate
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-ping"></span>
                    {clusters[activeCluster].status}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#032439]">
                  {clusters[activeCluster].name}
                </h3>

                <p className="text-base text-[#42474c] leading-relaxed">
                  {clusters[activeCluster].focus}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#c3c7cd]/30 text-sm">
                  <div>
                    <span className="text-xs text-[#73777d] block">Archetype Profile</span>
                    <strong className="text-[#032439]">{clusters[activeCluster].type}</strong>
                  </div>
                  <div>
                    <span className="text-xs text-[#73777d] block">Cohort Size</span>
                    <strong className="text-[#032439]">{clusters[activeCluster].pupils} Pupils • {clusters[activeCluster].classes} Classrooms</strong>
                  </div>
                  <div>
                    <span className="text-xs text-[#73777d] block">Working Model Investment</span>
                    <strong className="text-[#b9003d]">£{(clusters[activeCluster].pupils * 25).toLocaleString()} (@ £25/pupil)</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-[#c3c7cd]/40 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#b9003d] uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">fact_check</span>
                  Pilot Verification Milestones
                </div>
                <ul className="space-y-2 text-xs text-[#041d2e]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span>
                    <span>Classroom topic pack boxes delivered &amp; unpacked</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span>
                    <span>Teacher interactive whiteboard pairing complete</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-600 text-[16px]">check_circle</span>
                    <span>Baseline pre-pilot teacher survey completed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#765b00] text-[16px]">schedule</span>
                    <span>Weekly time tracking active (Current avg: 4.2h saved)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Teacher Time & Cost Savings Calculator */}
      <section className="py-20 bg-[#f7f9ff] border-b border-[#c3c7cd]/30">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="bg-white rounded-2xl border border-[#c3c7cd]/50 p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#032439] tracking-tight">
                Calculate Time &amp; Resource Efficiency at School or Cluster Scale
              </h2>
              <p className="text-[#42474c] text-sm mt-2">
                Simulate the economic and pedagogical impact of our turnkey expressive arts model based on the empirical Scottish 5-school pilot benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Sliders Left */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-[#032439]">
                      Total Primary Pupils Enrolled:
                    </label>
                    <span className="text-lg font-black text-[#032439] bg-[#f7f9ff] px-3 py-1 rounded border border-[#c3c7cd]/40">
                      {pupilCount.toLocaleString()} pupils
                    </span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="2500"
                    step="10"
                    value={pupilCount}
                    onChange={(e) => setPupilCount(Number(e.target.value))}
                    className="w-full h-2 bg-[#d6ebff] rounded-lg appearance-none cursor-pointer accent-[#b9003d]"
                  />
                  <div className="flex justify-between text-[11px] text-[#73777d] mt-1">
                    <span>60 (Small rural)</span>
                    <span>300 (Average primary)</span>
                    <span>1,000 (Multi-school cluster)</span>
                    <span>2,500 (Authority cohort)</span>
                  </div>
                </div>

                <div className="bg-[#f7f9ff] p-5 rounded-xl border border-[#c3c7cd]/30 space-y-3">
                  <div className="text-xs font-bold text-[#032439] uppercase tracking-wider">
                    Model Assumptions:
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs text-[#42474c]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#b9003d]"></span>
                      <span>Working price: <strong>£25/pupil/yr</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#1d3a50]"></span>
                      <span>Average class: <strong>28 pupils</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#d1a621]"></span>
                      <span>Prep saved: <strong>4.2 hrs/wk/teacher</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-600"></span>
                      <span>Term: <strong>38 school weeks</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Output Bento Card Right */}
              <div className="lg:col-span-6 bg-[#032439] text-white p-8 rounded-2xl shadow-xl space-y-6">
                <div className="flex justify-between items-start border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs text-[#ffdf93] uppercase font-bold tracking-wider">Projected Subscription</span>
                    <div className="text-3xl md:text-4xl font-black text-white mt-1">
                      £{calculatedCost.toLocaleString()}
                    </div>
                    <span className="text-xs text-[#88a4be]">Working model @ £25/pupil/year</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#ffdf93] uppercase font-bold tracking-wider">Teachers Supported</span>
                    <div className="text-2xl font-black text-white mt-1">{teacherCount} classes</div>
                    <span className="text-xs text-[#88a4be]">Generalist educators</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-xs text-[#ffdf93] block">Annual Prep Liberated</span>
                    <strong className="text-2xl font-black text-white">{annualHoursSaved.toLocaleString()} hrs</strong>
                    <span className="text-[11px] text-[#88a4be] block mt-0.5">Direct classroom teaching time</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-xs text-[#ffdf93] block">Teacher Time Value</span>
                    <strong className="text-2xl font-black text-[#ffdf93]">£{estimatedTeacherValue.toLocaleString()}</strong>
                    <span className="text-[11px] text-[#88a4be] block mt-0.5">At standard teacher hourly rate</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onRequestInvestorPack}
                    className="w-full bg-[#b9003d] text-white py-3 px-6 rounded-full font-bold text-sm tracking-wide shadow hover:bg-[#dd2a54] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Full Pilot Evaluation Pack</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Phase Roadmap Cards */}
      <section className="py-20 bg-white border-b border-[#c3c7cd]/30">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-black text-[#032439] tracking-tight">
              4-Phase Empirical Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f7f9ff] p-6 rounded-xl border border-[#c3c7cd]/40 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#b9003d] text-white flex items-center justify-center font-bold text-sm mb-4">
                  1
                </div>
                <span className="text-xs text-[#73777d] font-bold uppercase tracking-wider block">Weeks 1–4</span>
                <h3 className="text-lg font-bold text-[#032439] mb-2 mt-1">Onboarding &amp; Baseline</h3>
                <p className="text-sm text-[#42474c] leading-relaxed">
                  Teacher confidence index baseline survey, material box logistics check, and classroom whiteboard pre-configuration.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/20 text-xs font-bold text-[#b9003d] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">task_alt</span>
                Workload metric benchmarked
              </div>
            </div>

            <div className="bg-[#f7f9ff] p-6 rounded-xl border border-[#c3c7cd]/40 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#b9003d] text-white flex items-center justify-center font-bold text-sm mb-4">
                  2
                </div>
                <span className="text-xs text-[#73777d] font-bold uppercase tracking-wider block">Weeks 5–16</span>
                <h3 className="text-lg font-bold text-[#032439] mb-2 mt-1">Live Classroom Delivery</h3>
                <p className="text-sm text-[#42474c] leading-relaxed">
                  Generalist teachers conducting weekly multi-modal expressive sessions using step-by-step guides and video masterclasses.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/20 text-xs font-bold text-[#b9003d] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">task_alt</span>
                100% generalist led
              </div>
            </div>

            <div className="bg-[#f7f9ff] p-6 rounded-xl border border-[#c3c7cd]/40 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#b9003d] text-white flex items-center justify-center font-bold text-sm mb-4">
                  3
                </div>
                <span className="text-xs text-[#73777d] font-bold uppercase tracking-wider block">Weeks 17–20</span>
                <h3 className="text-lg font-bold text-[#032439] mb-2 mt-1">Attainment Review</h3>
                <p className="text-sm text-[#42474c] leading-relaxed">
                  Verification of the 4.2 hours/week teacher prep time savings and pupil expressive arts portfolio creation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/20 text-xs font-bold text-[#b9003d] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">task_alt</span>
                Empirical audit data logged
              </div>
            </div>

            <div className="bg-[#f7f9ff] p-6 rounded-xl border border-[#c3c7cd]/40 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#b9003d] text-white flex items-center justify-center font-bold text-sm mb-4">
                  4
                </div>
                <span className="text-xs text-[#73777d] font-bold uppercase tracking-wider block">Weeks 21–26</span>
                <h3 className="text-lg font-bold text-[#032439] mb-2 mt-1">Evaluation &amp; Tender</h3>
                <p className="text-sm text-[#42474c] leading-relaxed">
                  Independent academic evaluation whitepaper publication and multi-year local authority framework procurement tender.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/20 text-xs font-bold text-[#b9003d] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">task_alt</span>
                Subscription framework signed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Photos */}
      <section className="py-16 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="mb-8">
            <span className="text-[#765b00] text-[13px] font-bold tracking-widest uppercase mb-1 block">
              Classroom Documentation
            </span>
            <h3 className="text-xl md:text-2xl font-black text-[#032439]">
              Field Studies from Live Scottish Classrooms
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-md group">
              <img
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Storytelling & Drama Workshop"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3pf441g9uJKeOXPV1i6SLgCCiai67ccWrLml9ijZUq6x2HttbKBUPzosklzKcO-C19dB48wbzwWlgcNbhnwDVR6WBEKD7H4q9Cb-K-hUcAfPmr8-y-Ck6UHeRYFQeO6iFQB2eULAnSG1HCHfyDsWMsJZye7WU2yKb0qsPAdPE_lbW1cCSSmFHPZLmqdG7iWVWw0LZwbxiprO_ZF4olKJ_mbe1auLy80yWqCknViWyDOS_8iaL91Lt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032439]/90 via-[#032439]/30 to-transparent flex items-end p-4">
                <span className="text-xs text-white font-bold">Storytelling &amp; Expressive Drama Workshop</span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-md group">
              <img
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Visual Arts & Palette Integration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbm3wrCtf4OHPl_Xq9MRThzv1LnMGztDjYhqlTiwjJGODRyw-Sbl8PiM5w79Fb5zcb0y11IgpWS1yMr2NqsIYtm4PV7v9gNOsJcFH2wqPTBMVxj1LJK9FtxCgwInKVThYOm2U5Tvh-_Le4Wn21NiXbXD7_XS6S3bMvSchFxLprmtAaPGQr7vgEZlSRcXEaONgIhzMAaokMunfzKJVSjzr9iisbVqV7d28zGMY1Cn9_uw5CAJSXWz_G"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032439]/90 via-[#032439]/30 to-transparent flex items-end p-4">
                <span className="text-xs text-white font-bold">Visual Arts &amp; Multimodal Palette Integration</span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-md group">
              <img
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Collaborative Rhythm & Acoustic Composition"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmoJojNkKKRUW3ilet5rGTWFhyn13-O808v76hLm5P_VSM8-AJirWC9htrdgvPqaNUMGQmUC_U7PfUBoVLfLM-c4Un8qHzmCTQyxjY7hQmzcaWgyvM322QeV4jmwUiLCYiqyznO7Z25FoozYFcYuCT_fTGxVqnk5b053gsvLllnj9SrXR5nhBr-52-MqhiP9NaPrL5r_f3WPBB86rLQaPPxGU7fUA_-nuJ7y_LcGuamGmtU6vOp9Mr"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032439]/90 via-[#032439]/30 to-transparent flex items-end p-4">
                <span className="text-xs text-white font-bold">Collaborative Rhythm &amp; Acoustic Composition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Notice */}
      <RegulatoryNotice />
    </div>
  );
}
