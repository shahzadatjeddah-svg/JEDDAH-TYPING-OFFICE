import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { EnquiryForm } from './components/EnquiryForm';
import { LegalModal } from './components/LegalModals';
import { AdminModal } from './components/AdminModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TypingServicesPage } from './pages/TypingServicesPage';
import { BusinessSetupPage } from './pages/BusinessSetupPage';
import { ProServicesPage } from './pages/ProServicesPage';
import { GovernmentServicesPage } from './pages/GovernmentServicesPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { BusinessSettings } from './types';
import { Language, translations } from './data/translations';
import { X } from 'lucide-react';

const defaultSettings: BusinessSettings = {
  businessName: 'Jeddah Typing Office',
  address: 'Office No. 3, same building as Panoor Restaurant, opposite Lulu Hypermarket, Al Rashidiya 3, Ajman, UAE',
  mobile: '0522709196',
  telephone: '06 747 3013',
  email: 'jeddahuae@gmail.com',
  whatsappUrl: 'https://wa.me/971522709196',
  openingHours: {
    weekdays: 'Saturday – Thursday: 8:00 AM – 9:30 PM',
    friday: 'Friday: 4:00 PM – 9:30 PM',
    note: 'Open on most public holidays. Walk-ins welcomed during all operating hours.'
  },
  announcement: {
    enabled: true,
    text: 'Office Open: Direct assistance for UAE Residence Visas, Emirates ID typing, and Ajman DED Business Setup paperwork.',
    badge: 'Notice'
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [settings, setSettings] = useState<BusinessSettings>(defaultSettings);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  // Language state: 'en' | 'ar'
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jto_lang') as Language;
      if (saved === 'ar' || saved === 'en') return saved;
    }
    return 'en';
  });

  // Sync document direction and lang attribute with selected language
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      localStorage.setItem('jto_lang', lang);
    }
  }, [lang]);

  // Modals state
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryPreselectedService, setEnquiryPreselectedService] = useState('');
  const [legalModalState, setLegalModalState] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy'
  });
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Fetch live settings on mount
  useEffect(() => {
    fetch('/api/settings')
      .then((res) => {
        if (res.ok) return res.json();
        return defaultSettings;
      })
      .then((data) => {
        if (data && data.businessName) {
          setSettings(data);
        }
      })
      .catch((err) => {
        console.warn('Using default business settings:', err);
      });
  }, []);

  // Listen to browser hash if user navigates with direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'typing', 'business-setup', 'pro', 'government', 'about', 'faq', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (serviceName?: string) => {
    setEnquiryPreselectedService(serviceName || '');
    setEnquiryModalOpen(true);
  };

  const announcementText = lang === 'ar'
    ? 'المكتب مفتوح لاستقبالكم: خدمات طباعة الهوية الإماراتية، الفحص الطبي، وتأسيس وتجديد رخص اقتصادية عجمان.'
    : settings.announcement.text;

  const announcementBadge = lang === 'ar' ? 'تنبيه' : (settings.announcement.badge || 'Notice');

  return (
    <div className={`min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* 1. Optional Editable Announcement Bar */}
      {settings.announcement?.enabled && !announcementDismissed && (
        <div className="bg-[#1E3A8A] text-white text-xs px-4 py-2 border-b border-blue-900 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="bg-[#C5A059] text-[#0B192C] font-extrabold text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                {announcementBadge}
              </span>
              <p className="truncate text-slate-100 font-medium">
                {announcementText}
              </p>
            </div>
            <button
              onClick={() => setAnnouncementDismissed(true)}
              className="text-slate-300 hover:text-white p-1 shrink-0"
              aria-label="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Top Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        settings={settings}
        onOpenEnquiry={handleOpenEnquiry}
        lang={lang}
        setLang={setLang}
      />

      {/* 3. Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={handlePageChange}
            settings={settings}
            onOpenEnquiry={handleOpenEnquiry}
            lang={lang}
          />
        )}
        {currentPage === 'typing' && (
          <TypingServicesPage
            settings={settings}
            onOpenEnquiry={handleOpenEnquiry}
            lang={lang}
          />
        )}
        {currentPage === 'business-setup' && (
          <BusinessSetupPage
            settings={settings}
            onOpenEnquiry={handleOpenEnquiry}
            lang={lang}
          />
        )}
        {currentPage === 'pro' && (
          <ProServicesPage
            settings={settings}
            onOpenEnquiry={handleOpenEnquiry}
            lang={lang}
          />
        )}
        {currentPage === 'government' && (
          <GovernmentServicesPage
            settings={settings}
            onOpenEnquiry={handleOpenEnquiry}
            lang={lang}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            settings={settings}
            onOpenEnquiry={handleOpenEnquiry}
            lang={lang}
          />
        )}
        {currentPage === 'faq' && (
          <FaqPage
            settings={settings}
            onOpenEnquiry={handleOpenEnquiry}
            lang={lang}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            settings={settings}
            onOpenEnquiry={handleOpenEnquiry}
            lang={lang}
          />
        )}
      </main>

      {/* 4. Footer */}
      <Footer
        setCurrentPage={handlePageChange}
        settings={settings}
        onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModalState({ isOpen: true, type: 'terms' })}
        onOpenAdmin={() => setAdminModalOpen(true)}
        lang={lang}
      />

      {/* 5. Floating WhatsApp and Quick Phone Action Cluster */}
      <FloatingActions settings={settings} lang={lang} />

      {/* 6. Quick Enquiry Modal (Triggered from any CTA button) */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-xl w-full bg-transparent">
            <button
              onClick={() => setEnquiryModalOpen(false)}
              className={`absolute -top-10 text-white/80 hover:text-white p-1 text-xs flex items-center gap-1 font-semibold ${lang === 'ar' ? 'left-0' : 'right-0'}`}
            >
              <X className="w-5 h-5" />
              <span>{lang === 'ar' ? 'إغلاق' : 'Close'}</span>
            </button>
            <EnquiryForm
              preselectedService={enquiryPreselectedService}
              lang={lang}
              onSuccess={() => {
                // Keep modal open so the user sees the reference ID confirmation
              }}
            />
          </div>
        </div>
      )}

      {/* 7. Legal Modals (Privacy Policy / Terms of Service) */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        lang={lang}
        onClose={() => setLegalModalState({ ...legalModalState, isOpen: false })}
      />

      {/* 8. Office Owner Management Modal */}
      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        settings={settings}
        onSettingsUpdated={(newSettings) => setSettings(newSettings)}
      />
    </div>
  );
}
