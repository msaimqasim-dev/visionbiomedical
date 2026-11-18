import { ContactBand, ContactForm, PageBanner, Reveal } from '../components/ui';
import { company, images } from '../data/content';

export function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" image={images.newsHero} />
      <ContactBand light showPhone emails={[company.serviceEmail, company.email]} subject="Contact Us inquiry" />
    </>
  );
}

export function GetAQuotePage() {
  return (
    <>
      <PageBanner title="Get A Quote" image={images.quoteHero} />
      <section className="relative bg-white py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display text-3xl font-semibold leading-snug tracking-tight text-ink md:text-4xl">
                Please complete the form below if you would like a quote for your medical equipment service
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-100 md:p-12">
              <ContactForm mode="quote" emails={[company.email]} subject="Get A Quote request" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
