import React, { useState, useEffect } from 'react';
import type { NavTab } from './types';
import { TopNavBar } from './components/TopNavBar';
import { Footer } from './components/Footer';
import { InvestorPackModal } from './components/InvestorPackModal';
import { TopicPackModal } from './components/TopicPackModal';
import { HomeView } from './views/HomeView';
import { OpportunityView } from './views/OpportunityView';
import { CurriculumView } from './views/CurriculumView';
import { InvestmentView } from './views/InvestmentView';
import PilotView from './views/PilotView';
import AboutView from './views/AboutView';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);

  // Scroll to top when switching navigation tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9ff] text-[#041d2e] selection:bg-[#b9003d] selection:text-white font-['Lato',sans-serif]">
      {/* Institutional Top Navigation Bar with Crimson Rule */}
      <TopNavBar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onRequestInvestorPack={() => setIsInvestorModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <HomeView
            onSelectTab={setActiveTab}
            onRequestInvestorPack={() => setIsInvestorModalOpen(true)}
          />
        )}

        {activeTab === 'opportunity' && (
          <OpportunityView
            onSelectTab={setActiveTab}
            onRequestInvestorPack={() => setIsInvestorModalOpen(true)}
          />
        )}

        {activeTab === 'curriculum' && (
          <CurriculumView
            onSelectTab={setActiveTab}
            onRequestInvestorPack={() => setIsInvestorModalOpen(true)}
            onOpenSampleModule={() => setIsTopicModalOpen(true)}
          />
        )}

        {activeTab === 'investment' && (
          <InvestmentView
            onSelectTab={setActiveTab}
            onRequestInvestorPack={() => setIsInvestorModalOpen(true)}
          />
        )}

        {activeTab === 'pilot' && (
          <PilotView
            onNavigate={setActiveTab}
            onRequestInvestorPack={() => setIsInvestorModalOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            onNavigate={setActiveTab}
            onRequestInvestorPack={() => setIsInvestorModalOpen(true)}
          />
        )}
      </main>


      {/* Institutional Shared Footer */}
      <Footer
        onSelectTab={setActiveTab}
        onRequestInvestorPack={() => setIsInvestorModalOpen(true)}
        onOpenDataRoom={() => setIsInvestorModalOpen(true)}
      />

      {/* Interactive Investor Pack Request & Clearance Modal */}
      <InvestorPackModal
        isOpen={isInvestorModalOpen}
        onClose={() => setIsInvestorModalOpen(false)}
      />

      {/* Interactive Sample Topic Pack Inspection Modal */}
      <TopicPackModal
        isOpen={isTopicModalOpen}
        onClose={() => setIsTopicModalOpen(false)}
        onRequestInvestorPack={() => {
          setIsTopicModalOpen(false);
          setIsInvestorModalOpen(true);
        }}
      />
    </div>
  );
}
