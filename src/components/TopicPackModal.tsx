import React, { useState } from 'react';

interface TopicPackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestInvestorPack: () => void;
}

export const TopicPackModal: React.FC<TopicPackModalProps> = ({
  isOpen,
  onClose,
  onRequestInvestorPack,
}) => {
  const [activeSession, setActiveSession] = useState(1);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!isOpen) return null;

  const sessions = [
    {
      num: 1,
      title: 'Canopy Soundscapes & Acoustic Percussion',
      modality: 'Music & Percussion',
      duration: '50 mins',
      objective: 'Exploring polyrhythm and acoustic layering using rainforest animal calls and wooden shakers.',
      cfe: 'EXA 1-17a / EXA 1-19a',
      videoStep: 'Step 1: Introducing seed pod rattles and rhythmic repetition with classroom conductor cues.',
    },
    {
      num: 2,
      title: 'Biomorphic Sculptures & Tactile Flora',
      modality: 'Art & Design',
      duration: '60 mins',
      objective: 'Manipulating non-toxic modelling clay and natural dyes to sculpt understory tropical leaves.',
      cfe: 'EXA 1-02a / EXA 1-05a',
      videoStep: 'Step 2: Finger rolling technique, leaf vein embossing, and color gradation blending.',
    },
    {
      num: 3,
      title: 'Kinetic Animal Locomotion & Somatics',
      modality: 'Dance & Movement',
      duration: '45 mins',
      objective: 'Translating jaguar and tree frog movement patterns into synchronized group choreography.',
      cfe: 'EXA 1-08a / EXA 1-10a',
      videoStep: 'Step 3: Low-level prowling, spring mechanics, and kinetic frozen tableaux.',
    },
    {
      num: 4,
      title: 'Tribal Folklore & Expressive Improvisation',
      modality: 'Drama & Roleplay',
      duration: '55 mins',
      objective: 'Roleplaying community protectors navigating ecological balance using drama prompt cards.',
      cfe: 'EXA 1-12a / EXA 1-14a',
      videoStep: 'Step 4: Character vocal projection, posture shifts, and collective conflict resolution.',
    },
    {
      num: 5,
      title: 'Eco-Myth Writing & Poetic Meter',
      modality: 'Creative Writing',
      duration: '50 mins',
      objective: 'Composing alliterative chants and mythic narratives based on the rainforest water cycle.',
      cfe: 'EXA 1-01a / LIT 1-26a',
      videoStep: 'Step 5: Sensory word-banks, sensory metaphor pairing, and choral recitation.',
    },
    {
      num: 6,
      title: 'Stop-Motion Claymation & Digital Showcase',
      modality: 'Digital Media & Animation',
      duration: '60 mins',
      objective: 'Capturing 12-frame clay animation loops with classroom tablets for the digital portfolio.',
      cfe: 'EXA 1-04a / TCH 1-01a',
      videoStep: 'Step 6: Onion-skinning preview, frame timing, and digital soundscape synchronisation.',
    },
  ];

  const current = sessions[activeSession - 1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#c3c7cd]/60 shadow-2xl relative">
        {/* Modal Header */}
        <div className="bg-[#1d3a50] p-6 text-white border-b-[3px] border-[#b9003d] sticky top-0 z-20 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#ffdf93] text-[12px] font-bold uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[16px]">inventory_2</span>
              Sample Topic Pack Inspection • P4 Cohort Specification
            </div>
            <h2 className="text-[22px] md:text-[26px] font-bold text-white tracking-tight">
              Explore & Create: The Rainforest Adventure
            </h2>
            <p className="text-[14px] text-[#88a4be] mt-1">
              Turnkey Physical Box + Whiteboard Masterclass Integration (30 Pupils • 6 Full Modules)
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Top Overview: Photo + Inventory Stats */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#f7f9ff] p-5 rounded-xl border border-[#c3c7cd]/50">
            <div className="md:col-span-5 rounded-lg overflow-hidden border border-[#c3c7cd]/40 bg-white shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP3wmIIIF34diP63nuvfRXBM1kNSylr49Uk1y6RwAqbFzjZmdVY7ZpS6tiqKUDEz1zBqDSkl8UsOTFizvnuxyluEU9iZ1I-7kZ6u-qAeUET-48BL730yKV0ThEaauNgmJC1QwD8iJdOlGrzS9Y74XqMgmJ0Rk7ugfO9mRW1H990VUXeG460sCSR8TvdR2l5tWBik3JjoZ7MOlf0hJrG_4WPCiYrVg7CBAO6uLFOnbz9z0qMDa09lmn"
                alt="Open physical topic pack box"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#1d3a50] text-white text-[11px] font-bold uppercase tracking-wider">
                  Level: CfE First Level (P4)
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#ffdadc] text-[#b9003d] text-[11px] font-bold">
                  Weight: 3.4 kg
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#ffdf93] text-[#503d00] text-[11px] font-bold">
                  EN71 Certified Non-Toxic
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-[#032439]">
                Zero-Prerequisite Generalist Classroom Deployment
              </h3>
              <p className="text-[14px] text-[#42474c] leading-relaxed">
                Contains complete physical materials, teacher practitioner guides, and interactive whiteboard streaming masterclasses. Restores generalist teacher confidence with scripted, timed lesson flows.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#c3c7cd]/30 text-center">
                <div className="bg-white p-2 rounded border border-[#c3c7cd]/30">
                  <div className="text-[16px] font-bold text-[#b9003d]">30 Pupils</div>
                  <div className="text-[11px] text-[#73777d]">Capacity per kit</div>
                </div>
                <div className="bg-white p-2 rounded border border-[#c3c7cd]/30">
                  <div className="text-[16px] font-bold text-[#032439]">4.2 Hours</div>
                  <div className="text-[11px] text-[#73777d]">Prep Saved/Wk</div>
                </div>
                <div className="bg-white p-2 rounded border border-[#c3c7cd]/30">
                  <div className="text-[16px] font-bold text-[#d1a621]">6 Modalities</div>
                  <div className="text-[11px] text-[#73777d]">Full Arts Breadth</div>
                </div>
              </div>
            </div>
          </div>

          {/* 6-Week Session Scaffolding Interactive Selector */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#b9003d]">
                  Curricular Architecture
                </span>
                <h4 className="text-[18px] font-bold text-[#032439]">
                  Sequential 6-Stage Curriculum Scaffolding
                </h4>
              </div>
              <span className="text-[12px] text-[#73777d]">Click stage to inspect session blueprint</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-6">
              {sessions.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setActiveSession(s.num)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    activeSession === s.num
                      ? 'border-[#b9003d] bg-[#ffdadc]/40 shadow-sm ring-1 ring-[#b9003d]'
                      : 'border-[#c3c7cd]/60 bg-white hover:bg-[#f7f9ff]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#73777d] mb-1">
                    <span>Week 0{s.num}</span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeSession === s.num ? '#b9003d' : '#c3c7cd' }}></span>
                  </div>
                  <div className="text-[13px] font-bold text-[#032439] line-clamp-2">
                    {s.modality}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Session Deep Dive Card */}
            <div className="bg-white rounded-xl border border-[#c3c7cd]/60 p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#c3c7cd]/30 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-[#1d3a50] text-white text-[11px] font-bold uppercase">
                      Session 0{current.num} of 06
                    </span>
                    <span className="text-[12px] font-bold text-[#b9003d]">
                      {current.modality}
                    </span>
                    <span className="text-[12px] text-[#73777d]">({current.duration})</span>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#032439]">{current.title}</h3>
                </div>
                <div className="bg-[#f7f9ff] px-3 py-1.5 rounded-lg border border-[#c3c7cd]/40 text-right">
                  <div className="text-[11px] text-[#73777d] uppercase tracking-wide">CfE Benchmark</div>
                  <div className="text-[13px] font-bold text-[#032439]">{current.cfe}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-7 space-y-3">
                  <h5 className="text-[13px] font-bold uppercase tracking-wider text-[#73777d]">
                    Learning Intentions & Technique
                  </h5>
                  <p className="text-[15px] text-[#041d2e] leading-relaxed">
                    {current.objective}
                  </p>
                  <div className="bg-[#ecf4ff] p-3.5 rounded-lg border border-[#adcae5]/50 text-[13px] text-[#032439]">
                    <strong className="font-bold">Practitioner Prompt:</strong> Display the synchronized 4-minute demonstration on the interactive whiteboard while handing out pupil materials.
                  </div>
                </div>

                {/* Simulated Digital Masterclass Video Projection */}
                <div className="md:col-span-5 bg-[#032439] rounded-xl p-4 text-white space-y-3 shadow-md">
                  <div className="flex items-center justify-between text-[11px] text-[#88a4be]">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      Whiteboard Feed
                    </span>
                    <span>4K Projection Ready</span>
                  </div>
                  <div className="aspect-video bg-black/40 rounded-lg border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
                    <button
                      onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                      className="w-12 h-12 rounded-full bg-[#b9003d] hover:bg-[#dd2a54] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {isPlayingVideo ? 'pause' : 'play_arrow'}
                      </span>
                    </button>
                    <span className="text-[11px] text-white/90 mt-2 font-medium">
                      {isPlayingVideo ? 'Playing Demonstration...' : 'Watch Teacher Micro-Demo (3m 40s)'}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#88a4be] italic">
                    {current.videoStep}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Inventory Manifest Breakdown */}
          <div className="border-t border-[#c3c7cd]/40 pt-6">
            <h4 className="text-[16px] font-bold text-[#032439] mb-3">
              Included Physical Materials Checklist (Zero Classroom Prep)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-[13px] text-[#42474c]">
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#f7f9ff] border border-[#c3c7cd]/30">
                <span className="material-symbols-outlined text-[#b9003d] text-base">check_circle</span>
                <span>30x Wooden Rainforest Shakers</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#f7f9ff] border border-[#c3c7cd]/30">
                <span className="material-symbols-outlined text-[#b9003d] text-base">check_circle</span>
                <span>30x Clay sculpting palettes & tools</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#f7f9ff] border border-[#c3c7cd]/30">
                <span className="material-symbols-outlined text-[#b9003d] text-base">check_circle</span>
                <span>120x Pre-cut botanical felt sheets</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#f7f9ff] border border-[#c3c7cd]/30">
                <span className="material-symbols-outlined text-[#b9003d] text-base">check_circle</span>
                <span>30x Drama character role prompt cards</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#f7f9ff] border border-[#c3c7cd]/30">
                <span className="material-symbols-outlined text-[#b9003d] text-base">check_circle</span>
                <span>1x Bound Master Practitioner Guide</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#f7f9ff] border border-[#c3c7cd]/30">
                <span className="material-symbols-outlined text-[#b9003d] text-base">check_circle</span>
                <span>Cloud whiteboard access tokens</span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#c3c7cd]/40">
            <span className="text-[13px] text-[#73777d]">
              Full 164 topic packs catalog available in the confidential data room.
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full border border-[#c3c7cd] text-[14px] font-bold text-[#032439] hover:bg-[#f7f9ff] cursor-pointer"
              >
                Close Inspector
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestInvestorPack();
                }}
                className="bg-[#b9003d] hover:bg-[#dd2a54] text-white px-6 py-2.5 rounded-full text-[14px] font-bold tracking-wider shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Request Full Curriculum Dossier</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
