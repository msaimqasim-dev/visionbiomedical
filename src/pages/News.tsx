import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Btn, EASE, PageBanner, Reveal, SplitText } from '../components/ui';
import { articleParagraphs, images, testimonials } from '../data/content';

export default function NewsPage() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((v) => (v + 1) % count), 9000);
    return () => clearInterval(t);
  }, [count]);

  const go = (d: number) => setIndex((v) => (v + d + count) % count);
  const long = testimonials[index].length > 260;

  return (
    <>
      <PageBanner title="News" image={images.newsHero} />

      <section className="relative overflow-hidden bg-brand-dark py-28 lg:py-36">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">
            <SplitText text="Customer Reviews" />
          </h2>

          <div className="mt-16 flex min-h-[300px] items-center justify-center md:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <Quote className="mx-auto mb-8 text-teal" size={44} />
                <blockquote
                  className={`font-display font-semibold leading-relaxed text-white ${
                    long ? 'text-lg md:text-xl' : 'text-2xl md:text-4xl'
                  }`}
                >
                  {testimonials[index]}
                </blockquote>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid h-12 w-12 place-items-center rounded-full text-white ring-1 ring-white/30 transition hover:bg-white/10"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setIndex(k)}
                  aria-label={`Review ${k + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    k === index ? 'w-10 bg-teal' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid h-12 w-12 place-items-center rounded-full text-white ring-1 ring-white/30 transition hover:bg-white/10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-page py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">
          <Reveal className="relative lg:col-span-5">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-teal" />
            <img
              src={images.newsArticle}
              alt="Vision Biomedical Services"
              className="relative w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </Reveal>
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl">
              <SplitText text="Current News and Events" />
            </h2>
            <Reveal delay={0.1}>
              <h3 className="mt-8 font-display text-2xl font-bold text-brand">– Vision Biomedical Services</h3>
            </Reveal>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              {articleParagraphs.map((p, k) => (
                <Reveal key={k} delay={0.1 * k}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="mt-12">
              <Btn to="/contact-us">Contact Us</Btn>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
