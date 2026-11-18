import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Btn, ContactBand, EASE, ParallaxBg, PageBanner, Reveal, SplitText } from '../components/ui';
import { company, images } from '../data/content';

const servicesList = [
  'On-site Clinical/Biomedical Engineering Manager',
  'Preventive Maintenance (PM) inspections',
  'Onsite or depot equipment repairs',
  'Electrical safety and performance verification inspections',
  'The Joint Commission, DNV, and state survey preparation',
  'Monthly Environment of Care/Safety Committee Reports',
  'Operator error documentation and training',
  'Recall/Modification notifications and resolution',
];

const otherServices = [
  'Current service provider or inhouse biomed evaluation',
  'Medical equipment inventory verification and management',
  'Equipment pre-purchase consulting and life cycle cost analysis',
  'Equipment maintenance scheduling',
  'Manufacturer required maintenance facilitation',
  'Other vendor or manufacturer contract management',
];

export function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" image={images.stethoscopeAbout} />
      <section className="relative bg-white py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">
          <Reveal className="relative lg:col-span-6">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-teal" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
              <ParallaxBg src={images.aboutBody} strength={60} />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl">
              <SplitText text="Healthcare Technology Management" />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 text-xl leading-relaxed text-brand-dark">
                Vision Biomedical assists healthcare facilities in achieving the highest standard of biomedical equipment performance.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                In addition to providing personalized service, we help our clients significantly reduce costs by consolidating current contracts and by simply providing better service at a lower cost. We strive to be the best at delivering innovative solutions to improve the quality of healthcare.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-12">
              <Btn to="/get-a-quote">Get A Quote</Btn>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" image={images.servicesHero} />
      <section className="relative bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="max-w-5xl font-display text-3xl font-semibold leading-snug tracking-tight text-ink md:text-5xl">
              Vision Biomedical Services provides everything from a complete medical equipment management program to inspections and repairs on an as needed basis.
            </p>
          </Reveal>

          <div className="mt-24 grid items-center gap-16 lg:grid-cols-12">
            <Reveal className="relative lg:col-span-5">
              <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-teal" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                <ParallaxBg src={images.servicesBody} strength={60} />
              </div>
            </Reveal>
            <ul className="lg:col-span-7">
              {servicesList.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                  className="group flex items-center gap-5 border-b border-slate-200 py-6"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition duration-500 group-hover:bg-brand group-hover:text-white">
                    <Check size={18} />
                  </span>
                  <span className="text-lg font-medium text-slate-800">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <Reveal className="mt-28 max-w-4xl">
            <p className="text-xl leading-relaxed text-brand-dark">
              We also offer consulting services to help ensure all areas of healthcare technology management are being managed effectively.
            </p>
          </Reveal>

          <div className="mt-20">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Other services include:</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((s, k) => (
                <Reveal key={s} delay={k * 0.07}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-xl">
                    <span className="font-display text-sm font-bold text-teal">{String(k + 1).padStart(2, '0')}</span>
                    <p className="mt-4 text-lg font-medium leading-snug text-slate-800">{s}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactBand emails={[company.serviceEmail, company.email]} subject="Services inquiry" />
    </>
  );
}

export function RegulatoryPage() {
  return (
    <>
      <PageBanner title="Regulatory Compliance" image={images.regulatoryHero} />
      <section className="relative bg-white py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <p className="font-display text-3xl font-semibold leading-snug text-ink md:text-4xl">
                Preparing for regulatory agency inspections can be stressful and many times there is misinformation surrounding what the surveyors expect.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                We can provide support preparing for these inspections and can even be onsite during them.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We will work with your staff to ensure everything is up to date and compliant ahead of time, so that inspections go as smoothly as possible.
              </p>
            </Reveal>
            <Reveal delay={0.35} className="mt-12">
              <Btn to="/contact-us">Contact Us</Btn>
            </Reveal>
          </div>
          <Reveal y={60} className="relative">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-teal" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
              <ParallaxBg src={images.regulatoryBody} strength={60} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
