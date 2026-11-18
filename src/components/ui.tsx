import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Check, Mail, MapPin, Phone, Upload, type LucideIcon } from 'lucide-react';
import { company, images } from '../data/content';

export const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Word-by-word text reveal ---------- */
export function SplitText({
  text,
  delay = 0,
  stagger = 0.07,
  immediate = false,
  className = '',
}: {
  text: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
  className?: string;
}) {
  const words = text.split(' ');
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            {...(immediate
              ? { animate: { y: '0%' } }
              : { whileInView: { y: '0%' }, viewport: { once: true } })}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </span>
  );
}

/* ---------- Parallax image layer ---------- */
export function ParallaxBg({ src, strength = 100 }: { src: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt=""
        style={{ y }}
        className="absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover"
      />
    </div>
  );
}

/* ---------- Buttons ---------- */
export const btnBase =
  'group inline-flex items-center gap-2.5 rounded-md px-7 py-4 text-[15px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60';
export const btnVariants = {
  primary: 'bg-brand text-white shadow-[6px_6px_0_0_#19c1c7] hover:shadow-[9px_9px_0_0_#19c1c7]',
  light: 'bg-white text-brand-dark shadow-[6px_6px_0_0_#19c1c7] hover:shadow-[9px_9px_0_0_#19c1c7]',
  ghost: 'text-white ring-1 ring-white/40 backdrop-blur hover:bg-white/10',
};

export function Btn({
  to,
  href,
  variant = 'primary',
  children,
  className = '',
}: {
  to?: string;
  href?: string;
  variant?: keyof typeof btnVariants;
  children: ReactNode;
  className?: string;
}) {
  const cls = `${btnBase} ${btnVariants[variant]} ${className}`;
  const icon = (
    <ArrowUpRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
        {icon}
      </Link>
    );
  }
  const external = href?.startsWith('http');
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {icon}
    </a>
  );
}

/* ---------- Page banner (parallax title) ---------- */
export function PageBanner({ title, image }: { title: string; image: string }) {
  return (
    <section className="relative flex min-h-[64vh] items-end overflow-hidden bg-brand-dark pb-20 pt-48 lg:min-h-[78vh]">
      <ParallaxBg src={image} strength={120} />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: EASE }}
          className="mb-7 block h-1 w-20 origin-left rounded-full bg-teal"
        />
        <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">
          <SplitText text={title} immediate />
        </h1>
      </div>
    </section>
  );
}

/* ---------- Contact form ---------- */
const inputClass = (error: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3.5 text-[15px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/15 ${
    error ? 'border-red-400' : 'border-slate-200'
  }`;

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="text-teal"> *</span>}
      </span>
      {children}
    </div>
  );
}

const LABELS: Record<string, string> = {
  first: 'First name',
  last: 'Last name',
  title: 'Title',
  company: 'Company Name',
  email: 'Email',
  phone: 'Phone',
  message: 'Message',
  questions: 'Questions/ Comments',
  file: 'Inventory list (please attach to this email)',
};

export function ContactForm({
  mode = 'contact',
  showPhone = false,
  emails,
  subject,
}: {
  mode?: 'contact' | 'quote';
  showPhone?: boolean;
  emails: string[];
  subject: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [missing, setMissing] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [fileTooLarge, setFileTooLarge] = useState(false);
  const isQuote = mode === 'quote';
  const required = isQuote
    ? ['first', 'last', 'title', 'company', 'email', 'phone']
    : ['first', 'last', 'email', 'message'];

  const set = (key: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((p) => ({ ...p, [key]: e.target.value }));
  const isMissing = (key: string) => missing.includes(key);

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > 2 * 1024 * 1024) {
      setFileTooLarge(true);
      e.target.value = '';
      setValues((p) => ({ ...p, file: '' }));
      return;
    }
    setFileTooLarge(false);
    setValues((p) => ({ ...p, file: file?.name ?? '' }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const miss = required.filter((k) => !(values[k] ?? '').trim());
    setMissing(miss);
    if (miss.length) return;
    const body = Object.entries(values)
      .filter(([, val]) => val && val.trim())
      .map(([k, val]) => `${LABELS[k] ?? k}: ${val}`)
      .join('\n');
    window.location.href = `mailto:${emails.join(',')}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[340px] flex-col items-center justify-center rounded-2xl bg-slate-50 p-10 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-teal/15 text-teal">
          <Check size={30} />
        </div>
        <p className="mt-6 font-display text-2xl font-bold text-ink">Thank you</p>
        <p className="mt-2 text-slate-600">Your email app has opened with your request.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-sm font-semibold text-brand underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const text = (key: string, type = 'text') => (
    <Field key={key} label={LABELS[key]} required={required.includes(key)}>
      <input
        type={type}
        aria-label={LABELS[key]}
        value={values[key] ?? ''}
        onChange={set(key)}
        className={inputClass(isMissing(key))}
      />
    </Field>
  );

  const area = (key: string) => (
    <Field key={key} label={LABELS[key]} required={required.includes(key)}>
      <textarea
        rows={5}
        aria-label={LABELS[key]}
        value={values[key] ?? ''}
        onChange={set(key)}
        className={inputClass(isMissing(key))}
      />
    </Field>
  );

  const nameRow = (
    <Field key="name" label="Name" required>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          aria-label="First name"
          placeholder="First"
          value={values.first ?? ''}
          onChange={set('first')}
          className={inputClass(isMissing('first'))}
        />
        <input
          aria-label="Last name"
          placeholder="Last"
          value={values.last ?? ''}
          onChange={set('last')}
          className={inputClass(isMissing('last'))}
        />
      </div>
    </Field>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      <p className="text-sm text-slate-500">" * " indicates required fields</p>
      {isQuote ? (
        <>
          {nameRow}
          {text('title')}
          {text('company')}
          {text('email', 'email')}
          {text('phone', 'tel')}
          {area('questions')}
          <Field label="If you have an equipment inventory list, please attach it here.">
            <label className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-5 py-6 transition hover:border-brand">
              <Upload className="text-brand" size={22} />
              <span className="truncate text-sm text-slate-600">{values.file || 'Choose file'}</span>
              <input
                type="file"
                className="sr-only"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.jpg,.png"
                onChange={onFile}
              />
            </label>
            <p className={`mt-2 text-xs ${fileTooLarge ? 'font-semibold text-red-500' : 'text-slate-500'}`}>
              File Max. file size: 2 MB.
            </p>
          </Field>
        </>
      ) : (
        <>
          {nameRow}
          {text('email', 'email')}
          {area('message')}
          {showPhone && text('phone', 'tel')}
        </>
      )}
      <button type="submit" className={`${btnBase} ${btnVariants.primary}`}>
        Submit
        <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

function Info({
  icon: Icon,
  label,
  light = false,
  children,
}: {
  icon: LucideIcon;
  label: string;
  light?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <div
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ring-1 ${
          light ? 'bg-brand/10 text-brand ring-brand/15' : 'bg-white/10 text-white ring-white/20'
        }`}
      >
        <Icon size={20} />
      </div>
      <div>
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-brand' : 'text-teal'
          }`}
        >
          {label}
        </p>
        <div className={light ? 'text-slate-700' : 'text-white/90'}>{children}</div>
      </div>
    </div>
  );
}

/* ---------- "Get In Touch" band with form ---------- */
export function ContactBand({
  showPhone = false,
  light = false,
  emails,
  subject,
}: {
  showPhone?: boolean;
  light?: boolean;
  emails: string[];
  subject: string;
}) {
  return (
    <section className={`relative isolate overflow-hidden py-28 lg:py-36 ${light ? 'bg-white' : ''}`}>
      {!light && (
        <>
          <ParallaxBg src={images.docStethoscope} strength={80} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/90 to-brand/80" />
        </>
      )}
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12 lg:px-8">
        <Reveal className={`lg:col-span-5 ${light ? 'text-ink' : 'text-white'}`}>
          <h2 className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">Get In Touch</h2>
          <div className="mt-12 space-y-10">
            <Info icon={Mail} label="Email" light={light}>
              {emails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className={`block break-all text-lg transition ${
                    light ? 'font-medium text-ink hover:text-brand' : 'hover:text-teal'
                  }`}
                >
                  {e}
                </a>
              ))}
            </Info>
            <Info icon={MapPin} label="Address:" light={light}>
              {company.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className={`mt-1 ${light ? 'text-slate-500' : 'text-white/70'}`}>{company.appointment}</p>
            </Info>
            <Info icon={Phone} label="Call" light={light}>
              <a
                href={company.phoneHref}
                className={`font-display text-2xl font-bold transition ${
                  light ? 'text-brand-dark hover:text-brand' : 'hover:text-teal'
                }`}
              >
                {company.phone}
              </a>
            </Info>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7">
          <div
            className={`rounded-3xl bg-white p-8 shadow-2xl md:p-12 ${
              light ? 'shadow-brand-dark/15 ring-1 ring-slate-200/80' : ''
            }`}
          >
            <ContactForm showPhone={showPhone} emails={emails} subject={subject} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
