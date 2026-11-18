import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Btn, ContactBand, EASE, PageBanner, Reveal, SplitText } from '../components/ui';
import { company, equipmentGallery, images, partsGallery } from '../data/content';

type ProductProps = {
  title: string;
  banner: string;
  name: string;
  price: string;
  gallery: string[];
  comingSoon?: boolean;
  showPhone?: boolean;
  emails: string[];
  subject: string;
};

function ProductPage({
  title,
  banner,
  name,
  price,
  gallery,
  comingSoon = false,
  showPhone = false,
  emails,
  subject,
}: ProductProps) {
  const [index, setIndex] = useState(0);
  const count = gallery.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((v) => (v + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);

  const go = (d: number) => setIndex((v) => (v + d + count) % count);

  return (
    <>
      <PageBanner title={title} image={banner} />
      <section className="relative bg-white py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-7">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={gallery[index]}
                  src={gallery[index]}
                  alt={name}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand-dark shadow-lg transition hover:scale-110"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand-dark shadow-lg transition hover:scale-110"
              >
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="mt-5 flex flex-wrap gap-4">
              {gallery.map((src, k) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(k)}
                  aria-label={`View image ${k + 1}`}
                  className={`h-20 w-28 overflow-hidden rounded-xl ring-2 transition ${
                    k === index ? 'ring-brand' : 'opacity-60 ring-transparent hover:opacity-100'
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              <SplitText text={name} />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-10 font-display text-5xl font-extrabold text-brand md:text-6xl">{price}</p>
            </Reveal>
            <Reveal delay={0.25} className="mt-10">
              <Btn href={company.ebay}>BUY ITEM</Btn>
            </Reveal>
            {comingSoon && (
              <Reveal delay={0.35} className="mt-14">
                <div className="rounded-3xl border-2 border-dashed border-brand/30 bg-brand/5 p-8">
                  <p className="font-display text-2xl font-bold text-brand-dark">More Coming Soon</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
      <ContactBand showPhone={showPhone} emails={emails} subject={subject} />
    </>
  );
}

export function EquipmentPage() {
  return (
    <ProductPage
      title="Equipment"
      banner={images.equipmentHero}
      name="Midmark M11-022 Sterilizer Autoclave, WITH PRINTER, WARRANTY AND FREE SHIPPING"
      price="$3,599.00"
      gallery={equipmentGallery}
      comingSoon
      emails={[company.serviceEmail, company.email]}
      subject="Equipment inquiry - Midmark M11-022"
    />
  );
}

export function PartsPage() {
  return (
    <ProductPage
      title="Parts"
      banner={images.partsHero}
      name="Ohmeda Excel 210 Anesthesia Machine Parts- Flow meters with proportioning system"
      price="$300.00"
      gallery={partsGallery}
      showPhone
      emails={[company.partsEmail, company.email]}
      subject="Parts inquiry - Ohmeda Excel 210"
    />
  );
}
