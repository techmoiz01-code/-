import React from 'react';
import type { NavTab } from '../types';
import RegulatoryNotice from '../components/RegulatoryNotice';
import MemorialTribute from '../components/MemorialTribute';

interface AboutViewProps {
  onNavigate: (tab: NavTab) => void;
  onRequestInvestorPack: () => void;
}

export default function AboutView({ onNavigate, onRequestInvestorPack }: AboutViewProps) {
  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#041d2e]">
      {/* HERO / HEADER BLOCK (Master Navy #1D3A50) */}
      <section className="bg-[#1d3a50] text-white py-16 md:py-24 relative overflow-hidden border-b border-[#c3c7cd]/20">
        <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Narrative Left (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Hero Headline bounded by Gold Accent Bar */}
              <div className="flex gap-5 items-stretch">
                <div className="w-1.5 bg-[#ffdf93] rounded-sm shrink-0"></div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Bridging Pedagogical Rigour with Expressive Liberation
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-[#ffdf93] text-xl md:text-2xl font-bold">
                The multidisciplinary team scaling hands-on creative arts across primary education.
              </p>

              {/* Lead Narrative */}
              <p className="text-[#88a4be] text-lg leading-relaxed max-w-2xl">
                Watch This Space Group was established in Scotland by educators, curriculum designers, and cultural leaders committed to solving generalist teacher workload while ensuring every child receives high-calibre expressive arts learning.
              </p>

              {/* Fast Metric Statline */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-xl">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#ffdf93]">100%</p>
                  <p className="text-xs text-[#88a4be]">CfE Benchmarked</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">4+ Hours</p>
                  <p className="text-xs text-[#88a4be]">Weekly Prep Saved</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">EN71</p>
                  <p className="text-xs text-[#88a4be]">Child Safety Certified</p>
                </div>
              </div>
            </div>

            {/* Hero Image & Studio Callout Right (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#032439]/60 p-2.5 rounded-xl border border-white/15 shadow-2xl">
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#c6ddf3]">
                  <img
                    alt="Executive & Pedagogical Steering Committee at work in the Edinburgh studio space"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmjohjKz-34plqoinBTJnsQyiHow3y8_tx47Td5OgUzgQWMreSG8pGNACih7L_6WkVIyxy6BqbfsgBcx0e5W-qooWiO67FkUy3OxG-QG3ugxAEZ4xhiZ_134-BF0IZ1oq454l_jFDHuR-InwphCddR3i397b-GqzvIV9TLPC9ljzRg908pzkapKRr0F4vSrXGLkIDQq4tFQTZQk-8b6qBI7Uv_YYBfQQ4JApX4qDby76wgJzedlNqC"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032439]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffdf93] text-[20px]">location_on</span>
                      <span className="text-sm font-bold">Edinburgh Design Studio</span>
                    </div>
                    <span className="text-xs text-[#ffdf93] bg-black/50 px-2 py-0.5 rounded font-medium">Active Session</span>
                  </div>
                </div>
                <div className="p-4 bg-[#1d3a50]/90 rounded-b-lg">
                  <p className="text-xs text-[#88a4be]">
                    <strong className="text-white font-bold">Caption:</strong> Executive &amp; Pedagogical Steering Committee reviewing spatial layout blueprints and multimodal topic packs in the Edinburgh studio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: FOUNDATIONAL JOURNEY & PHILOSOPHY */}
      <section className="bg-white py-20 border-b border-[#c3c7cd]/30">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl md:text-4xl font-black text-[#032439] tracking-tight">
              Rooted in Scottish Classrooms, Engineered for Global Scale
            </h2>
            <div className="w-16 h-1 bg-[#b9003d] mt-4 mb-6"></div>
            <p className="text-[#42474c] text-lg leading-relaxed">
              For decades, expressive arts in primary education were systematically sidelined—not due to lack of enthusiasm, but from structural prep friction, fragmented specialist training, and generalist teachers balancing overburdened timetables. Watch This Space Group was forged to fundamentally solve this institutional shortfall.
            </p>
            <p className="text-[#041d2e] text-base mt-4 leading-relaxed">
              By fusing turnkey, physical multimodal topic packs with responsive interactive whiteboard masterclasses, WTSG eliminates generalist preparation strain while democratising foundational artistic competencies across every classroom.
            </p>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#f7f9ff] border border-[#c3c7cd]/50 rounded-xl p-8 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#d6ebff] text-[#032439] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">schedule</span>
                </div>
                <p className="text-xs text-[#b9003d] font-bold uppercase tracking-wider mb-1">Pillar 01</p>
                <h3 className="text-xl font-bold text-[#032439] mb-3">Generalist Teacher Empowerment</h3>
                <p className="text-[#42474c] text-sm leading-relaxed">
                  Eliminating 4+ hours of weekly preparation friction with ready-to-teach, structured tactile kits and scripted video masterclasses that restore classroom instructional confidence.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30 flex items-center justify-between text-xs text-[#032439] font-bold">
                <span>Time Saved Metric</span>
                <span className="text-[#b9003d] font-bold">4.2 hrs / wk</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#f7f9ff] border border-[#c3c7cd]/50 rounded-xl p-8 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#d6ebff] text-[#032439] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">school</span>
                </div>
                <p className="text-xs text-[#b9003d] font-bold uppercase tracking-wider mb-1">Pillar 02</p>
                <h3 className="text-xl font-bold text-[#032439] mb-3">Curricular Integrity (CfE Aligned)</h3>
                <p className="text-[#42474c] text-sm leading-relaxed">
                  Mapped directly to Scottish Curriculum for Excellence expressive benchmarks, ensuring measurable developmental progression in line, form, tactile manipulation, and spatial awareness.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30 flex items-center justify-between text-xs text-[#032439] font-bold">
                <span>Standard Mappings</span>
                <span className="text-[#b9003d] font-bold">CfE Levels 1 &amp; 2</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#f7f9ff] border border-[#c3c7cd]/50 rounded-xl p-8 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#d6ebff] text-[#032439] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">accessibility_new</span>
                </div>
                <p className="text-xs text-[#b9003d] font-bold uppercase tracking-wider mb-1">Pillar 03</p>
                <h3 className="text-xl font-bold text-[#032439] mb-3">Universal Accessibility &amp; Inclusion</h3>
                <p className="text-[#42474c] text-sm leading-relaxed">
                  Equitable tactile physical supplies paired with intuitive digital masterclasses, ensuring neurodivergent learners and under-resourced schools experience zero creative friction.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30 flex items-center justify-between text-xs text-[#032439] font-bold">
                <span>Equity Framework</span>
                <span className="text-[#b9003d] font-bold">100% Inclusion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: EXECUTIVE LEADERSHIP TEAM */}
      <section className="bg-[#f7f9ff] py-20 border-b border-[#c3c7cd]/30">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-[#032439] tracking-tight">
                Seasoned Educational, Operational &amp; Creative Direction
              </h2>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-[#42474c] max-w-sm">
              Proven institutional stewardship combining decades of Scottish pedagogical leadership with tech scale-up discipline.
            </div>
          </div>

          {/* 3 Executive Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Executive 1 */}
            <div className="bg-white rounded-xl border border-[#c3c7cd]/40 overflow-hidden shadow-sm hover:border-[#032439]/40 transition-all duration-200">
              <div className="h-48 bg-[#1d3a50] relative p-6 flex flex-col justify-end text-white">
                <div className="absolute top-4 right-4 bg-[#ffdf93] text-[#241a00] text-xs font-bold px-2.5 py-1 rounded">
                  Founding Executive
                </div>
                <div className="w-14 h-14 rounded-full bg-[#d6ebff] border-2 border-[#ffdf93] flex items-center justify-center text-[#032439] mb-3 shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">person</span>
                </div>
                <h3 className="text-xl font-bold text-white">Chief Executive Officer</h3>
                <p className="text-[#ffdf93] text-sm font-bold">&amp; Co-Founder</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-[#041d2e] text-sm leading-relaxed">
                  Educational technology veteran and former Scottish education authority strategist. Architect of commercial models bridging public council procurement with venture scalability.
                </p>
                <div className="space-y-2 pt-2 border-t border-[#c3c7cd]/20 text-xs text-[#42474c]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#b9003d] text-[16px]">verified</span>
                    <span>15+ Years Public Sector EdTech Policy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#b9003d] text-[16px]">domain</span>
                    <span>Former Regional Learning Authority Lead</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive 2 */}
            <div className="bg-white rounded-xl border border-[#c3c7cd]/40 overflow-hidden shadow-sm hover:border-[#032439]/40 transition-all duration-200">
              <div className="h-48 bg-[#1d3a50] relative p-6 flex flex-col justify-end text-white">
                <div className="absolute top-4 right-4 bg-[#ffdf93] text-[#241a00] text-xs font-bold px-2.5 py-1 rounded">
                  Pedagogical Lead
                </div>
                <div className="w-14 h-14 rounded-full bg-[#d6ebff] border-2 border-[#ffdf93] flex items-center justify-center text-[#032439] mb-3 shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">auto_stories</span>
                </div>
                <h3 className="text-xl font-bold text-white">Head of Curriculum</h3>
                <p className="text-[#ffdf93] text-sm font-bold">&amp; Pedagogical Design</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-[#041d2e] text-sm leading-relaxed">
                  Primary education specialist with 18+ years leading Curriculum for Excellence expressive arts delivery. Pioneer of cross-curricular STEM-to-STEAM frameworks.
                </p>
                <div className="space-y-2 pt-2 border-t border-[#c3c7cd]/20 text-xs text-[#42474c]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#b9003d] text-[16px]">verified</span>
                    <span>18+ Years Classroom &amp; CfE Advisory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#b9003d] text-[16px]">history_edu</span>
                    <span>Scottish Expressive Arts Working Group</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive 3 */}
            <div className="bg-white rounded-xl border border-[#c3c7cd]/40 overflow-hidden shadow-sm hover:border-[#032439]/40 transition-all duration-200">
              <div className="h-48 bg-[#1d3a50] relative p-6 flex flex-col justify-end text-white">
                <div className="absolute top-4 right-4 bg-[#ffdf93] text-[#241a00] text-xs font-bold px-2.5 py-1 rounded">
                  Supply Operations
                </div>
                <div className="w-14 h-14 rounded-full bg-[#d6ebff] border-2 border-[#ffdf93] flex items-center justify-center text-[#032439] mb-3 shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">inventory_2</span>
                </div>
                <h3 className="text-xl font-bold text-white">Director of Operations</h3>
                <p className="text-[#ffdf93] text-sm font-bold">&amp; Supply Chain</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-[#041d2e] text-sm leading-relaxed">
                  Industrial manufacturing and child-safe EN71 logistics director. Expert in ethical procurement, high-volume kit assembly, and distribution across 2,000+ school gates.
                </p>
                <div className="space-y-2 pt-2 border-t border-[#c3c7cd]/20 text-xs text-[#42474c]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#b9003d] text-[16px]">verified</span>
                    <span>ISO 9001 / EN71 Certified Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#b9003d] text-[16px]">local_shipping</span>
                    <span>Scalable UK &amp; EU Educational Fulfillment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: ADVISORY COUNCIL & GOVERNANCE */}
      <section className="bg-white py-20 border-b border-[#c3c7cd]/30">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-[#032439] tracking-tight">
                Institutional Due Diligence &amp; Safeguarding
              </h2>
            </div>
            {/* Compliance Verified Tag */}
            <div className="mt-4 md:mt-0 flex items-center gap-2 bg-[#f7f9ff] border border-[#b9003d]/30 px-3 py-1.5 rounded text-xs text-[#b9003d] font-bold">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>All advisory positions formally ratified and legal/management cleared.</span>
            </div>
          </div>

          {/* Advisory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Advisory 1 */}
            <div className="p-6 rounded-lg border border-[#c3c7cd]/40 bg-[#f7f9ff] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#b9003d] uppercase tracking-wider">Governance Chair</span>
                <span className="material-symbols-outlined text-[#032439] text-[20px]">gavel</span>
              </div>
              <h3 className="text-lg font-bold text-[#032439]">Educational Governance Lead</h3>
              <p className="text-[#42474c] text-sm leading-relaxed">
                Former Inspector of Education, ensuring complete adherence to institutional transparency, local authority funding compliance, and national inspection standards.
              </p>
              <div className="pt-2 text-xs text-[#73777d]">
                Clearance Status: <strong className="text-[#032439] font-bold">Cleared by Legal / Active</strong>
              </div>
            </div>

            {/* Advisory 2 */}
            <div className="p-6 rounded-lg border border-[#c3c7cd]/40 bg-[#f7f9ff] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#b9003d] uppercase tracking-wider">Classroom Liaison</span>
                <span className="material-symbols-outlined text-[#032439] text-[20px]">groups</span>
              </div>
              <h3 className="text-lg font-bold text-[#032439]">Primary Headteacher Council Liaison</h3>
              <p className="text-[#42474c] text-sm leading-relaxed">
                Active primary consortium leadership representation, advising on headteacher budgeting cycles, cluster deployment, and pupil equity fund integration.
              </p>
              <div className="pt-2 text-xs text-[#73777d]">
                Clearance Status: <strong className="text-[#032439] font-bold">Cleared by Legal / Active</strong>
              </div>
            </div>

            {/* Advisory 3 */}
            <div className="p-6 rounded-lg border border-[#c3c7cd]/40 bg-[#f7f9ff] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#b9003d] uppercase tracking-wider">Ethics &amp; Protection</span>
                <span className="material-symbols-outlined text-[#032439] text-[20px]">shield</span>
              </div>
              <h3 className="text-lg font-bold text-[#032439]">Child Safeguarding &amp; Digital Ethics</h3>
              <p className="text-[#42474c] text-sm leading-relaxed">
                Advising on GDPR compliance for school interactive whiteboards, pupil data anonymisation, and child-centred accessible interface design.
              </p>
              <div className="pt-2 text-xs text-[#73777d]">
                Clearance Status: <strong className="text-[#032439] font-bold">Cleared by Legal / Active</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: MEMORIAL TRIBUTE PANEL */}
      <section className="bg-[#f7f9ff] py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <MemorialTribute />
        </div>
      </section>

      {/* SECTION 05: CALL TO ACTION (Master Navy Band) */}
      <section className="bg-[#1d3a50] text-white py-16 border-t border-[#c3c7cd]/20">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 p-8 md:p-12 rounded-xl border border-white/10">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-[#ffdf93] text-[13px] font-bold tracking-widest uppercase">Institutional Dialogue</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Connect with Leadership &amp; Governance
              </h2>
              <p className="text-[#88a4be] text-sm">
                Institutional investors, municipal education authorities, and school cluster leaders are invited to request our full governance disclosure dossiers and commercial expansion pack.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onRequestInvestorPack}
                className="bg-[#b9003d] text-white px-7 py-3 rounded-full text-sm font-bold tracking-wider shadow-lg hover:bg-[#dd2a54] transition-all duration-150 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Request Investor Pack
              </button>
              <a
                href="mailto:governance@watchthisspacegroup.com"
                className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-[#032439] transition-all duration-150 inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                Contact Governance Office
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY NOTICE */}
      <RegulatoryNotice />
    </div>
  );
}
