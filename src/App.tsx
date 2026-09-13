import React, { useState } from 'react';
import { ScrollProgress } from './components/common/ScrollProgress';
import { StorySpine } from './components/common/StorySpine';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { NotificationDrawer } from './components/common/NotificationDrawer';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { WhyNowSection } from './components/sections/WhyNowSection';
import { MediaSection } from './components/sections/MediaSection';
import { ApplicationSection } from './components/sections/ApplicationSection';
import { ContactSection } from './components/sections/ContactSection';

import { PortfolioDetailModal } from './components/modals/PortfolioDetailModal';
import { MediaStoryModal } from './components/modals/MediaStoryModal';
import { ApplicationModal } from './components/modals/ApplicationModal';
import { AnnouncementDetailModal } from './components/modals/AnnouncementDetailModal';
import { ChatbotDrawer } from './components/features/ChatbotDrawer';

import { PortfolioItem, MediaStory, Announcement } from './types';

export default function App() {
  // Modal & Drawer State
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [initialApplyCategory, setInitialApplyCategory] = useState<string>('eng-student');
  
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadAnnouncementsCount, setUnreadAnnouncementsCount] = useState(3);
  
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedMediaStory, setSelectedMediaStory] = useState<MediaStory | null>(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  // Handlers
  const handleOpenApply = (category: string = 'eng-student') => {
    setInitialApplyCategory(category);
    setIsApplyOpen(true);
  };

  const handleOpenNotifications = () => {
    setIsNotificationsOpen(true);
    setUnreadAnnouncementsCount(0);
  };

  const handleExploreJourney = () => {
    const el = document.getElementById('why-now');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleActionFromNotice = (url: string) => {
    if (url.startsWith('#')) {
      const el = document.getElementById(url.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E2022] relative selection:bg-[#E8DFC9] selection:text-[#191A1B]">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Sticky Header */}
      <Header
        onOpenApply={() => handleOpenApply('eng-student')}
        onOpenNotifications={handleOpenNotifications}
        unreadCount={unreadAnnouncementsCount}
      />

      {/* Vertical Storytelling Spine (Translation of hand-drawn vertical spine) */}
      <StorySpine />

      {/* Main Page Flow (Exact Order from Prompt & Reference Sketch) */}
      <main className="relative">
        {/* 1. HOME / HERO */}
        <HeroSection
          onOpenApply={() => handleOpenApply('eng-student')}
          onExploreJourney={handleExploreJourney}
        />

        {/* 2. ABOUT US + PORTFOLIO */}
        <AboutSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenApply={() => handleOpenApply('eng-student')}
        />

        {/* 3. WHY NOW / OUR STORY / OUR PLAN */}
        <WhyNowSection
          onOpenApply={() => handleOpenApply('eng-student')}
        />

        {/* 4. ARTICLES / MEDIA */}
        <MediaSection
          onSelectStory={(story) => setSelectedMediaStory(story)}
        />

        {/* 5. APPLICATION */}
        <ApplicationSection
          onSelectCategoryToApply={(catId) => handleOpenApply(catId)}
        />

        {/* 6. CONTACT US */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating AI Assistant / Chatbot (bottom-right) */}
      <ChatbotDrawer
        onOpenApply={() => handleOpenApply('eng-student')}
      />

      {/* Interactive Drawers and Modals */}
      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onSelectAnnouncement={(ann) => {
          setSelectedAnnouncement(ann);
        }}
      />

      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        initialCategory={initialApplyCategory}
      />

      <PortfolioDetailModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        onApplyForSimilar={(cat) => handleOpenApply('eng-student')}
      />

      <MediaStoryModal
        story={selectedMediaStory}
        onClose={() => setSelectedMediaStory(null)}
      />

      <AnnouncementDetailModal
        announcement={selectedAnnouncement}
        onClose={() => setSelectedAnnouncement(null)}
        onActionClick={handleActionFromNotice}
      />
    </div>
  );
}
