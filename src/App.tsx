import { Preloader } from './components/Preloader';
import { Particles } from './components/Particles';
import { RadioPlayer } from './components/RadioPlayer';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Leaders } from './components/Leaders';
import { Code } from './components/Code';
import { Hierarchy } from './components/Hierarchy';
import { Fleet } from './components/Fleet';
import { Diplomacy } from './components/Diplomacy';
import { FAQ } from './components/FAQ';
import { Blacklist } from './components/Blacklist';
import { Recruitment } from './components/Recruitment';
import { ScaryNotifications } from './components/ScaryNotifications';

function App() {
  return (
    <main className="relative bg-black min-h-screen selection:bg-amber-500 selection:text-black">
      <Preloader />
      <Particles />
      <RadioPlayer />
      <ScaryNotifications />
      
      <Hero />
      <Stats />
      <Leaders />
      <Code />
      <Hierarchy />
      <Fleet />
      <Diplomacy />
      <FAQ />
      <Blacklist />
      <Recruitment />

      <footer className="py-12 text-center border-t border-zinc-900 bg-black">
        <div className="container mx-auto px-6">
          <p className="text-[10px] tracking-[0.5em] text-zinc-600 font-bold uppercase">
            CORONA SYNDICATE • 2026 • УСІ ПРАВА ЗАХИЩЕНІ
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
