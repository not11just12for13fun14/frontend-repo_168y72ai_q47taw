import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t7ourXf4CdN9XTF3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <Sparkles className="h-4 w-4 text-blue-300" />
          Explore the cosmic playground
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
          Solar System
          <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-purple-300 bg-clip-text text-transparent"> Atlas</span>
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 md:text-lg">
          A minimalist, futuristic window into our neighboring worlds —
          glide through space, discover planets, and learn fast facts about our celestial home.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#planets" className="group inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:translate-y-[-2px] hover:bg-blue-400">
            Explore planets
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#facts" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10">
            Quick facts
          </a>
        </div>
      </div>
    </section>
  );
}
