import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Btn, EASE, ParallaxBg, Reveal, SplitText } from '../components/ui';
import { copy, heroBackgrounds, homeCards, images, marqueeItems } from '../data/content';

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((v) => (v + 1) % heroBackgrounds.length),
      6500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-dark pt-[136px]">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={heroBackgrounds[index]}
          alt=""
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: 'easeInOut' },
            scale: { duration: 9, ease: 'easeOut' },
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/30" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-7xl xl:text-[6.2rem]">
            <SplitText text="Vision Biomedical Services" immediate />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {copy.specializes}
          </motion.p>
        </div>

        <Reveal delay={0.3} className="mt-12 flex flex-wrap gap-5">
          <Btn to="/services">Services</Btn>
          <Btn to="/contact-us" variant="ghost">
            Contact Us
          </Btn>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-0 right-0 mx-auto flex max-w-7xl items-center gap-3 px-5 lg:px-8">
        {heroBackgrounds.map((src, k) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(k)}
            aria-label={`Show background image ${k + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              k === index ? 'w-16 bg-teal' : 'w-8 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const group = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {marqueeItems.map((t) => (
        <span key={t} className="flex items-center gap-10">
          {t}
          <span className="h-2.5 w-2.5 rounded-full bg-brand-dark" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-teal py-6 text-brand-dark">
      <div className="flex w-max animate-marquee whitespace-nowrap font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
        {group}
        {group}
      </div>
    </div>
  );
}

function Cards() {
  return (
    <section className="relative bg-white py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3 lg:px-8">
        {homeCards.map((card, k) => (
          <Reveal key={card.to} delay={k * 0.15}>
            <Link
              to={card.to}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-10 shadow-2xl shadow-brand-dark/30 ring-1 ring-slate-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-brand/25"
            >
              <div className="flex h-44 items-center justify-center">
                <img
                  src={images.ecg}
                  alt=""
                  className="max-h-40 w-auto mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-ink">{card.title}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">{card.text}</p>
              <span className="mt-auto grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand transition duration-500 group-hover:bg-brand group-hover:text-white mt-10">
                <ArrowUpRight size={20} />
              </span>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-teal transition-transform duration-700 group-hover:scale-x-100" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesSplit() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28 lg:py-40">
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl">
            <SplitText text="Vision Biomedical Services" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-10 text-2xl font-semibold leading-snug text-brand-dark">{copy.specializes}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{copy.includes}</p>
          </Reveal>
          <Reveal delay={0.4} className="mt-12">
            <Btn to="/services">Services</Btn>
          </Reveal>
        </div>
        <Reveal y={60} className="relative mb-16">
          <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2.5rem] bg-teal" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <ParallaxBg src={images.appointment} strength={60} />
          </div>
          <div className="absolute -bottom-16 left-6 right-6 rounded-3xl bg-white p-8 shadow-2xl md:-left-14 md:right-auto md:max-w-md">
            <p className="leading-relaxed text-slate-700">{copy.technicians}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden py-36">
      <ParallaxBg src={images.appointment} strength={120} />
      <div className="absolute inset-0 bg-brand-dark/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <h2 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-7xl">
          <SplitText text="For All Your Medical Equipment Needs" />
        </h2>
        <Reveal delay={0.25} className="mt-14 flex flex-wrap justify-center gap-5">
          <Btn to="/contact-us" variant="light">
            Contact Us
          </Btn>
          <Btn to="/get-a-quote" variant="ghost">
            Get A Quote
          </Btn>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Cards />
      <ServicesSplit />
      <CtaBand />
    </>
  );
}
