import Hero from './components/Hero';
import Planets from './components/Planets';
import Facts from './components/Facts';

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Hero />
      <Planets />
      <Facts />

      <footer className="mx-auto max-w-7xl px-6 py-12 text-center text-white/60">
        Built for exploration • Cosmic, minimalist vibe
      </footer>
    </div>
  );
}

export default App;
