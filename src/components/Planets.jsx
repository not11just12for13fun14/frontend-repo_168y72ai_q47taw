import { useEffect, useState } from 'react';
import { Planet } from 'lucide-react';

const PLANETS = [
  { name: 'Mercury', color: 'from-zinc-400 to-zinc-200', fact: 'Smallest planet and closest to the Sun.' },
  { name: 'Venus', color: 'from-amber-300 to-amber-100', fact: 'Hottest planet with a thick toxic atmosphere.' },
  { name: 'Earth', color: 'from-emerald-400 to-cyan-300', fact: 'Our home, the only known planet with life.' },
  { name: 'Mars', color: 'from-orange-400 to-red-300', fact: 'The red planet with the tallest volcano.' },
  { name: 'Jupiter', color: 'from-yellow-300 to-amber-300', fact: 'Largest planet with a giant storm.' },
  { name: 'Saturn', color: 'from-amber-200 to-yellow-100', fact: 'Famous for its stunning rings.' },
  { name: 'Uranus', color: 'from-cyan-300 to-sky-200', fact: 'An ice giant that rotates on its side.' },
  { name: 'Neptune', color: 'from-blue-400 to-indigo-300', fact: 'The windiest planet in the solar system.' },
];

export default function Planets() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(PLANETS);

  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(PLANETS.filter(p => p.name.toLowerCase().includes(q)));
  }, [query]);

  return (
    <section id="planets" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold md:text-4xl">Planets</h2>
          <p className="mt-1 text-white/70">Browse the worlds of our solar system.</p>
        </div>

        <div className="relative">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search planets..."
            className="w-56 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-white/20"
          />
          <Planet className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.name} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/10">
            <div className={`h-24 w-24 rounded-full bg-gradient-to-br ${p.color} shadow-lg shadow-black/40 ring-1 ring-white/10`} />
            <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-white/70">{p.fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
