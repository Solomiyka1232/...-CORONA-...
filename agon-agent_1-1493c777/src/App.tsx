import Preloader from './components/Preloader';
import GoldDust from './components/GoldDust';
import RadioPlayer from './components/RadioPlayer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import LeadersSection from './components/LeadersSection';
import CodeSection from './components/CodeSection';
import HierarchySection from './components/HierarchySection';
import FleetSection from './components/FleetSection';
import DiplomacySection from './components/DiplomacySection';
import FAQSection from './components/FAQSection';
import BlacklistSection from './components/BlacklistSection';
import JoinSection from './components/JoinSection';

export default function App() {
  return (
    <>
      <Preloader />
      <GoldDust />
      <div className="noise-overlay" />
      <RadioPlayer />

      <HeroSection />
      <StatsSection />
      <LeadersSection />
      <CodeSection />
      <HierarchySection />
      <FleetSection />
      <DiplomacySection />
      <FAQSection />
      <BlacklistSection />
      <JoinSection />

      <footer className="site-footer">
        CORONA SYNDICATE &bull; 2026 &bull; УСІ ПРАВА ЗАХИЩЕНІ
      </footer>
    </>
  );
}
