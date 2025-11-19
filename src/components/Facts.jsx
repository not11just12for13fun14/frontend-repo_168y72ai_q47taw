import { Sun, Orbit } from 'lucide-react';

export default function Facts() {
  const facts = [
    { icon: Sun, title: '4.6 Billion Years', text: 'Estimated age of our solar system, formed from a giant rotating cloud of gas and dust.' },
    { icon: Orbit, title: 'Eight Planets', text: 'Mercury to Neptune, each with unique orbits, atmospheres, and characteristics.' },
    { icon: Sun, title: 'The Sun', text: 'Contains 99.8% of the total mass, a G-type main-sequence star powering our system.' },
  ];

  return (
    <section id="facts" className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white">
      <h2 className="text-3xl font-semibold md:text-4xl">Quick Facts</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {facts.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Icon className="h-6 w-6 text-blue-300" />
            <h3 className="mt-3 text-xl font-semibold">{title}</h3>
            <p className="mt-1 text-white/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
