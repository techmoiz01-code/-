import React, { useState } from 'react';
import { NavTab } from '../types';

interface CurriculumViewProps {
  onSelectTab: (tab: NavTab) => void;
  onRequestInvestorPack: () => void;
  onOpenSampleModule: () => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  onSelectTab,
  onRequestInvestorPack,
  onOpenSampleModule,
}) => {
  const [selectedModality, setSelectedModality] = useState<number | null>(null);

  const modalities = [
    {
      id: 1,
      name: 'Art & Design',
      hours: '1.5 hrs / week',
      desc: 'Spatial thinking, color theory, mixed media, Scottish landscape interpretation, and contemporary aesthetic craft.',
      outcomes: 'Fine motor coordination, composition planning, tactile surface sensitivity.',
      icon: 'palette',
    },
    {
      id: 2,
      name: 'Drama & Roleplay',
      hours: '1.0 hr / week',
      desc: 'Character perspective taking, emotional regulation, narrative improvisation, and expressive vocal projection.',
      outcomes: 'Empathetic reasoning, public oratory confidence, social dispute resolution.',
      icon: 'theater_comedy',
    },
    {
      id: 3,
      name: 'Dance & Movement',
      hours: '1.0 hr / week',
      desc: 'Somatic awareness, rhythmic choreography, physical storytelling, and kinetic spatial balance.',
      outcomes: 'Vestibular calibration, non-verbal expression, synchronous group teamwork.',
      icon: 'accessibility_new',
    },
    {
      id: 4,
      name: 'Music & Percussion',
      hours: '1.0 hr / week',
      desc: 'Rhythmic synchrony, melodic exploration, acoustic polyrhythm, and cultural world music listening exercises.',
      outcomes: 'Auditory discernment, temporal pacing, pitch differentiation.',
      icon: 'music_note',
    },
    {
      id: 5,
      name: 'Creative Writing & Storytelling',
      hours: '1.5 hrs / week',
      desc: 'Expressive mythmaking, poetic rhythm and meter, imaginative worldbuilding, and oral folklore recitation.',
      outcomes: 'Metaphorical literacy, narrative structuring, vocabulary expansion.',
      icon: 'auto_stories',
    },
    {
      id: 6,
      name: 'Digital Media & Animation',
      hours: '1.0 hr / week',
      desc: 'Stop-motion claymation, classroom audio soundscape recording, and digital creative portfolio documentation.',
      outcomes: 'Digital authoring ethics, sequencing mechanics, multimedia synthesis.',
      icon: 'animation',
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="bg-[#1d3a50] text-white relative overflow-hidden py-16 md:py-24 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Executive Headline & Academic Statement */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Hero Accent Bar bounded Headline */}
              <div className="border-l-4 border-[#ffdf93] pl-5 md:pl-6 my-2">
                <h1 className="text-[34px] sm:text-[44px] md:text-[52px] text-white leading-tight font-black">
                  A Turnkey Pedagogical Framework for Expressive Arts
                </h1>
              </div>

              <p className="text-[17px] md:text-[19px] text-[#e6f2ff]/90 mt-5 max-w-2xl font-light leading-relaxed">
                Bridging generalist teacher confidence with multi-modal physical and digital creative kits, aligned to Scottish Curriculum for Excellence (CfE) and national benchmarks.
              </p>

              {/* Metadata Badges Cluster */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="bg-[#032439]/60 border border-[#ffdf93]/30 rounded-lg px-4 py-2.5 flex items-center gap-2.5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[#ffdf93] text-lg">inventory_2</span>
                  <span className="text-[14px] font-bold text-white">164 Topic Packs (Target Year 5)</span>
                </div>
                <div className="bg-[#032439]/60 border border-[#ffdf93]/30 rounded-lg px-4 py-2.5 flex items-center gap-2.5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[#ffdf93] text-lg">palette</span>
                  <span className="text-[14px] font-bold text-white">6 Core Art Modalities</span>
                </div>
                <div className="bg-[#032439]/60 border border-[#ffdf93]/30 rounded-lg px-4 py-2.5 flex items-center gap-2.5 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[#ffdf93] text-lg">stairs</span>
                  <span className="text-[14px] font-bold text-white">P1–P7 Progression Framework</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inspiring Classroom Documentary Photograph */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#c6ddf3]">
                <img
                  className="w-full h-[400px] md:h-[480px] object-cover"
                  alt="A documentary-style Scottish primary school classroom setting where a diverse group of young pupils collaborate enthusiastically around a rustic wooden activity table"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4H7-0JQqXKPSBqxB8Ki6zvRukVUgcAS-iu5PnsEPycf7QyOAF-GNsx9M3YbNhLPHA6NoAK6hkbczASoSmEgd0x2FG2JMv7Tq8KjbqyESOxm3O4xlDPhHbwzEruEs3i202BetRjHkVV6yXwqnrSXrsT0POtCG_LX1PbBTuZLTKDu-WtYosjjPh3_rczN4kn9POcm9wiSBC4EM56lZWRr-z_3JEwT0w7zmykhVhZ0h63xcOIx1Zhxwm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#032439]/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#032439]/85 backdrop-blur-md p-3.5 rounded-lg border border-white/10 text-white">
                  <div className="flex items-center justify-between text-[12px] text-[#e6f2ff]">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#ffdf93] text-sm">verified</span>
                      Classroom Pilot Engagement: St Ninian's Cluster
                    </span>
                    <span className="text-[#ffdf93] font-bold">P4 Cohort Session</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: SYSTEM ARCHITECTURE (THE MODULAR TOPIC PACK) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-[30px] md:text-[38px] text-[#041d2e] font-bold tracking-tight">
              Inside the All-Inclusive Topic Pack
            </h2>
            <p className="text-[17px] text-[#42474c] mt-3 leading-relaxed">
              Watch This Space Group eliminates lesson preparation friction for generalist primary educators. Every topic pack arrives fully organized with tactile supplies, structured pedagogical timings, and digital demonstrations engineered for immediate classroom deployment.
            </p>
          </div>

          {/* Bento Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Box Product Imagery Column */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-[#ecf4ff] rounded-xl p-6 border border-[#c3c7cd]/60 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-white text-[#032439] text-[12px] rounded-lg border border-[#c3c7cd]/40 mb-3 font-bold">
                    MODULAR PHYSICAL UNIT
                  </span>
                  <h3 className="text-[22px] text-[#041d2e] font-bold">Turnkey Box Delivery</h3>
                  <p className="text-[14px] text-[#42474c] mt-1 mb-4 leading-relaxed">
                    Standardized, reusable storage containing materials for 30 pupils across 6 sequential curriculum stages.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden border border-[#c3c7cd]/40 bg-white shadow-sm relative group">
                  <img
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt="Physical Topic Pack box Explore & Create The Rainforest Adventure"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP3wmIIIF34diP63nuvfRXBM1kNSylr49Uk1y6RwAqbFzjZmdVY7ZpS6tiqKUDEz1zBqDSkl8UsOTFizvnuxyluEU9iZ1I-7kZ6u-qAeUET-48BL730yKV0ThEaauNgmJC1QwD8iJdOlGrzS9Y74XqMgmJ0Rk7ugfO9mRW1H990VUXeG460sCSR8TvdR2l5tWBik3JjoZ7MOlf0hJrG_4WPCiYrVg7CBAO6uLFOnbz9z0qMDa09lmn"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button
                      onClick={onOpenSampleModule}
                      className="bg-[#b9003d] text-white px-5 py-2.5 rounded-full text-[13px] font-bold shadow-lg flex items-center gap-2 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">visibility</span>
                      Inspect Sample Topic Box
                    </button>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#c3c7cd]/40 flex items-center justify-between text-[12px] text-[#42474c]">
                  <span>Unit Weight: 3.4 kg</span>
                  <span className="text-[#b9003d] font-bold">100% Recyclable Materials</span>
                </div>
              </div>
            </div>

            {/* 4 Breakdown Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Tactile Physical Inventory */}
              <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/60 shadow-sm hover:border-[#1d3a50]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#ecf4ff] text-[#032439] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#b9003d]">handyman</span>
                  </div>
                  <h4 className="text-[18px] text-[#041d2e] font-bold">
                    Tactile Physical Inventory
                  </h4>
                  <p className="text-[14px] text-[#42474c] mt-2 leading-relaxed">
                    High-grade art materials, tactile sculpture components, percussion instruments, fabric, and bespoke drama props for up to 30 pupils with zero classroom top-up required.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#c3c7cd]/30 text-[12px] text-[#032439] font-bold">
                  Capacity: 30 Pupils per kit
                </div>
              </div>

              {/* Card 2: Step-by-Step Practitioner Guides */}
              <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/60 shadow-sm hover:border-[#1d3a50]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#ecf4ff] text-[#032439] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#b9003d]">menu_book</span>
                  </div>
                  <h4 className="text-[18px] text-[#041d2e] font-bold">
                    Step-by-Step Practitioner Guides
                  </h4>
                  <p className="text-[14px] text-[#42474c] mt-2 leading-relaxed">
                    Plain-language, timed 45-60 min lesson scaffolds that give any generalist educator total instructional assurance without prior specialist training.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#c3c7cd]/30 text-[12px] text-[#032439] font-bold">
                  Session Cadence: 45–60 Mins
                </div>
              </div>

              {/* Card 3: Digital Video Masterclasses */}
              <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/60 shadow-sm hover:border-[#1d3a50]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#ecf4ff] text-[#032439] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#b9003d]">play_circle</span>
                  </div>
                  <h4 className="text-[18px] text-[#041d2e] font-bold">
                    Digital Video Masterclasses
                  </h4>
                  <p className="text-[14px] text-[#42474c] mt-2 leading-relaxed">
                    3–5 minute high-fidelity video demonstrations for classroom whiteboard projection, modeling artistic techniques directly to pupils in clear micro-steps.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#c3c7cd]/30 text-[12px] text-[#032439] font-bold">
                  Resolution: 4K Projection Ready
                </div>
              </div>

              {/* Card 4: CfE & Expressive Benchmark Rubrics */}
              <div className="bg-white p-6 rounded-xl border border-[#c3c7cd]/60 shadow-sm hover:border-[#1d3a50]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#ecf4ff] text-[#032439] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#b9003d]">fact_check</span>
                  </div>
                  <h4 className="text-[18px] text-[#041d2e] font-bold">
                    CfE & Expressive Benchmark Rubrics
                  </h4>
                  <p className="text-[14px] text-[#42474c] mt-2 leading-relaxed">
                    Pre-mapped assessment criteria measuring pupil engagement, fine motor skills, emotional literacy, and creative expression against Scottish inspection criteria.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#c3c7cd]/30 text-[12px] text-[#032439] font-bold">
                  Alignment: Education Scotland CfE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE 6 EXPRESSIVE ARTS MODALITIES */}
      <section className="py-20 md:py-28 bg-[#ecf4ff] border-y border-[#c3c7cd]/40" id="modalities">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="max-w-3xl mb-12">
            <h2 className="text-[30px] md:text-[38px] text-[#041d2e] font-bold tracking-tight">
              Multi-Modal Holistic Learning
            </h2>
            <p className="text-[17px] text-[#42474c] mt-3 leading-relaxed">
              Structured intentionally across 6 core disciplinary pillars to guarantee cognitive breadth, emotional development, and technical capability throughout every academic term.
            </p>
          </div>

          {/* 6-Card Modality Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modalities.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelectedModality(selectedModality === m.id ? null : m.id)}
                className={`bg-white rounded-xl p-6 border transition-all flex flex-col justify-between cursor-pointer ${
                  selectedModality === m.id
                    ? 'border-[#b9003d] ring-2 ring-[#b9003d]/30 shadow-md'
                    : 'border-[#c3c7cd]/60 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 bg-[#e1f0ff] text-[#032439] text-[11px] rounded font-bold uppercase tracking-wider">
                      Modality 0{m.id}
                    </span>
                    <span className="text-[12px] text-[#42474c] font-medium">{m.hours}</span>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#041d2e] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#b9003d] text-xl">{m.icon}</span>
                    {m.name}
                  </h3>
                  <p className="text-[14px] text-[#42474c] mt-2.5 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#c3c7cd]/30">
                  <span className="text-[12px] font-bold text-[#032439] block mb-1">Key Pupil Outcomes:</span>
                  <p className="text-[12px] text-[#42474c]">{m.outcomes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: CURRICULUM PROGRESSION ACROSS STAGES */}
      <section className="py-20 md:py-28 bg-white" id="progression">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="max-w-3xl mb-12">
            <h2 className="text-[30px] md:text-[38px] text-[#041d2e] font-bold tracking-tight">
              Structured Developmental Scaffolding (Early to Second Level)
            </h2>
            <p className="text-[17px] text-[#42474c] mt-3 leading-relaxed">
              Pedagogical progression mapped directly to Scottish Curriculum for Excellence levels, ensuring age-appropriate cognitive challenge, fine-motor calibration, and expressive fluency.
            </p>
          </div>

          {/* Academic Data Table */}
          <div className="overflow-x-auto rounded-xl border border-[#c3c7cd]/60 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#ecf4ff] border-b-2 border-[#d1a621]">
                  <th className="p-4 md:py-5 md:px-6 text-[14px] text-[#032439] font-bold uppercase tracking-wider">Stage Level</th>
                  <th className="p-4 md:py-5 md:px-6 text-[14px] text-[#032439] font-bold uppercase tracking-wider">Cohort Age</th>
                  <th className="p-4 md:py-5 md:px-6 text-[14px] text-[#032439] font-bold uppercase tracking-wider">Pedagogical Focus & Modality Objectives</th>
                  <th className="p-4 md:py-5 md:px-6 text-[14px] text-[#032439] font-bold uppercase tracking-wider">CfE Benchmark Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c3c7cd]/30 text-[14px] text-[#041d2e]">
                {/* Early Level */}
                <tr className="hover:bg-[#e1f0ff]/30 transition-colors">
                  <td className="p-4 md:py-5 md:px-6 font-bold text-[#032439] align-top">
                    <span className="inline-block px-2.5 py-1 bg-[#d6ebff] rounded text-[12px] font-bold">
                      Early Level (P1)
                    </span>
                  </td>
                  <td className="p-4 md:py-5 md:px-6 align-top text-[#42474c] font-medium">Ages 4–5</td>
                  <td className="p-4 md:py-5 md:px-6 align-top leading-relaxed">
                    <strong className="text-[#041d2e] block mb-1">Sensory discovery & baseline motor control:</strong>
                    Tactile confidence, imaginative play, free exploration of sound and texture, baseline gross/fine motor control, and associative color play.
                  </td>
                  <td className="p-4 md:py-5 md:px-6 align-top text-[#42474c]">
                    EXA 0-01a to EXA 0-14a: Explores media, sounds, and physical rhythms with confidence.
                  </td>
                </tr>

                {/* First Level */}
                <tr className="bg-[#ecf4ff]/40 hover:bg-[#e1f0ff]/40 transition-colors">
                  <td className="p-4 md:py-5 md:px-6 font-bold text-[#032439] align-top">
                    <span className="inline-block px-2.5 py-1 bg-[#d6ebff] rounded text-[12px] font-bold">
                      First Level (P2–P4)
                    </span>
                  </td>
                  <td className="p-4 md:py-5 md:px-6 align-top text-[#42474c] font-medium">Ages 6–8</td>
                  <td className="p-4 md:py-5 md:px-6 align-top leading-relaxed">
                    <strong className="text-[#041d2e] block mb-1">Collaborative storytelling & technique:</strong>
                    Mixed-modality expression, foundational technique in drawing/sculpting, structured role-play improvisation, rhythmic synchrony, and peer appreciation.
                  </td>
                  <td className="p-4 md:py-5 md:px-6 align-top text-[#42474c]">
                    EXA 1-02a to EXA 1-15a: Creates and presents expressive works demonstrating intentional design.
                  </td>
                </tr>

                {/* Second Level */}
                <tr className="hover:bg-[#e1f0ff]/30 transition-colors">
                  <td className="p-4 md:py-5 md:px-6 font-bold text-[#032439] align-top">
                    <span className="inline-block px-2.5 py-1 bg-[#d6ebff] rounded text-[12px] font-bold">
                      Second Level (P5–P7)
                    </span>
                  </td>
                  <td className="p-4 md:py-5 md:px-6 align-top text-[#42474c] font-medium">Ages 9–12</td>
                  <td className="p-4 md:py-5 md:px-6 align-top leading-relaxed">
                    <strong className="text-[#041d2e] block mb-1">Critical creative thinking & autonomy:</strong>
                    Independent portfolio projects, multi-disciplinary media production, stop-motion animation, nuanced characterization, and cultural contextual awareness.
                  </td>
                  <td className="p-4 md:py-5 md:px-6 align-top text-[#42474c]">
                    EXA 2-04a to EXA 2-18a: Evaluates personal creative output and integrates varied aesthetic styles.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 04: COMPLIANCE & PRICING NOTE */}
      <section className="py-12 bg-[#ecf4ff] border-t border-[#c3c7cd]/40">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="bg-white rounded-xl p-6 md:p-8 border border-[#c3c7cd]/60 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#1d3a50] text-white flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#ffdf93] text-2xl">gavel</span>
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 bg-[#e1f0ff] text-[#032439] text-[11px] rounded font-bold uppercase tracking-wider mb-1">
                  PRICING & IMPLEMENTATION SPECIFICATION
                </span>
                <h3 className="text-[22px] text-[#041d2e] font-bold">
                  £25 per pupil / year <span className="font-normal text-[15px] text-[#42474c]">(working price)</span>
                </h3>
                <p className="text-[12px] text-[#42474c] mt-1 max-w-2xl leading-relaxed">
                  All figures illustrative, not forecast sales. Commercial pricing model accounts for school cluster bulk procurement, seasonal kit replenishment, and continuous digital curriculum library updates. Timing and release conditions require investor agreement.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ecf4ff] rounded-lg text-[#032439] text-[12px] font-bold border border-[#c3c7cd]/40">
                <span className="material-symbols-outlined text-base">lock</span>
                Commercial in Confidence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="bg-[#1d3a50] text-white py-16 md:py-20 relative border-t-2 border-[#b9003d]">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <span className="text-[#ffdf93] text-[13px] uppercase tracking-widest block mb-3 font-bold">
            ACADEMIC & INVESTOR ENGAGEMENT
          </span>
          <h2 className="text-[28px] md:text-[38px] text-white max-w-3xl mx-auto font-bold tracking-tight">
            Review the Complete Creative Curriculum Directory
          </h2>
          <p className="text-[17px] text-[#e6f2ff]/90 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            Explore complete syllabus documentation, pilot feedback matrices, and financial projections for national local authority rollouts across Scotland.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestInvestorPack}
              className="bg-[#b9003d] text-white px-8 py-3.5 rounded-full text-[14px] font-bold hover:bg-[#dd2a54] transition-all duration-150 shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Investor Pack</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <button
              onClick={onOpenSampleModule}
              className="border-2 border-white text-white hover:bg-white hover:text-[#1d3a50] px-8 py-3.5 rounded-full text-[14px] font-bold transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Sample Topic Pack Module</span>
              <span className="material-symbols-outlined text-base">visibility</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
