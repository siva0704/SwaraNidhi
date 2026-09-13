import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { SITE_METADATA } from '../../data/cms';

interface HeaderProps {
  onOpenApply: () => void;
  onOpenNotifications: () => void;
  unreadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenApply,
  onOpenNotifications,
  unreadCount = 3,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Why Now', href: '#why-now' },
    { label: 'Articles', href: '#articles' },
    { label: 'Apply', href: '#apply' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E5E0D5] py-3.5 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1E2022] text-[#FAF9F5] flex items-center justify-center font-bold tracking-wider text-lg shadow-sm group-hover:bg-[#B45309] transition-colors">
              SN
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#1E2022] leading-none">
                {SITE_METADATA.brandName}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#71717A] mt-1 font-medium hidden sm:block">
                {SITE_METADATA.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4A4E53] hover:text-[#1E2022] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B45309] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Notification Bell */}
            <button
              id="header-notification-button"
              onClick={onOpenNotifications}
              className="relative p-2.5 rounded-full text-[#4A4E53] hover:text-[#1E2022] hover:bg-[#EFECE6] transition-colors"
              aria-label="View announcements"
              title="Announcements & Notices"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#B45309] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Apply Now Primary CTA */}
            <button
              id="header-apply-cta-btn"
              onClick={onOpenApply}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E2022] text-[#FAF9F5] text-xs font-semibold tracking-wide uppercase hover:bg-[#B45309] active:scale-98 transition-all shadow-xs"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1E2022] hover:bg-[#EFECE6] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF9F5] animate-in fade-in duration-200">
          <div className="p-5 border-b border-[#E5E0D5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#1E2022] text-[#FAF9F5] flex items-center justify-center font-bold text-sm">
                SN
              </div>
              <span className="font-extrabold text-base tracking-tight text-[#1E2022]">
                {SITE_METADATA.brandName}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[#71717A] hover:bg-[#EFECE6]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-widest text-[#A1A1AA] font-mono">
                Explore Sections
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-2xl font-serif text-[#1E2022] hover:text-[#B45309] py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-[#E5E0D5]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNotifications();
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#E5E0D5] rounded-xl text-sm font-medium text-[#1E2022]"
              >
                <span className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#B45309]" />
                  Announcements & Notices
                </span>
                <span className="text-xs bg-[#B45309] text-white px-2 py-0.5 rounded-full font-bold">
                  {unreadCount} New
                </span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3.5 bg-[#1E2022] text-[#FAF9F5] text-center rounded-xl text-sm font-semibold tracking-wide uppercase shadow-md flex items-center justify-center gap-2"
              >
                <span>Apply for SwaraNidhi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-[#71717A]">
                {SITE_METADATA.motto}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
