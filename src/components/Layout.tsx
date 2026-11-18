import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { company, images, nav, type NavChild } from '../data/content';
import { btnBase, btnVariants, EASE } from './ui';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-teal to-brand"
    />
  );
}

const linkBase = 'isolate relative rounded-full px-4 py-2.5 text-[15px] font-semibold transition-colors duration-300';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  const salesActive = pathname.startsWith('/sales');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdown(false);
  }, [pathname]);

  const mobileLinks: NavChild[] = nav.flatMap((item) =>
    item.children ? item.children : [{ label: item.label, to: item.to! }],
  );

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-500 ${scrolled ? 'shadow-xl shadow-brand-dark/10' : ''}`}>
        <div
          className={`overflow-hidden bg-brand-dark text-[13px] text-white transition-all duration-500 ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-5 lg:px-8">
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-white/90 transition hover:text-teal">
              <Mail size={14} />
              {company.email}
            </a>
            <div className="flex items-center gap-6">
              <a href={company.phoneHref} className="flex items-center gap-2 font-medium transition hover:text-teal">
                <Phone size={14} />
                {company.phone}
              </a>
              <Link to="/get-a-quote" className="font-semibold transition hover:text-teal">
                Get A Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white transition-all duration-500">
          <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
            <Link to="/" aria-label="Vision Biomedical Services home" className="flex items-center">
              <img
                src={images.logo}
                alt="Vision Biomedical Services"
                className={`w-auto transition-all duration-500 ${scrolled ? 'h-12' : 'h-14'}`}
              />
            </Link>

            <nav className="hidden items-center lg:flex" aria-label="Main">
              {nav.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdown((v) => !v)}
                      aria-expanded={dropdown}
                      className={`${linkBase} flex items-center gap-1 ${salesActive ? 'text-brand' : 'text-slate-800 hover:text-brand'}`}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform duration-300 ${dropdown ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {dropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.25 }}
                          className="absolute left-0 top-full w-60 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-200"
                        >
                          {item.children.map((c) => (
                            <NavLink
                              key={c.to}
                              to={c.to}
                              className={({ isActive }) =>
                                `block rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                                  isActive ? 'bg-brand/10 text-brand' : 'text-slate-700 hover:bg-slate-100 hover:text-brand'
                                }`
                              }
                            >
                              {c.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to!}
                    className={({ isActive }) => `${linkBase} ${isActive ? 'text-brand' : 'text-slate-800 hover:text-brand'}`}
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-brand/10"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ),
              )}
              <Link
                to="/get-a-quote"
                className="ml-4 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[4px_4px_0_0_#19c1c7] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#19c1c7]"
              >
                Get A Quote
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand lg:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[70] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white p-7 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <img src={images.logo} alt="Vision Biomedical Services" className="h-11 w-auto" />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-ink"
                >
                  <X size={22} />
                </button>
              </div>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-teal">Select Page</p>
              <nav className="mt-4 flex flex-col">
                {mobileLinks.map((l, k) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + k * 0.05, duration: 0.5, ease: EASE }}
                  >
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-slate-100 py-4 font-display text-xl font-bold ${
                          isActive ? 'text-brand' : 'text-ink'
                        }`
                      }
                    >
                      {l.label}
                      <ArrowUpRight size={18} />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <Link to="/get-a-quote" className={`${btnBase} ${btnVariants.primary} mt-auto justify-center`}>
                Get A Quote
              </Link>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-[#0b2550] text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-24 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="inline-block rounded-2xl bg-white p-4">
              <img src={images.logo} alt="Vision Biomedical Services" className="h-14 w-auto" />
            </div>
            <Link
              to="/get-a-quote"
              className={`${btnBase} ${btnVariants.light} mt-10`}
            >
              Get A Quote
            </Link>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">Select Page</p>
            <ul className="mt-6 space-y-4">
              {nav.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <span className="text-lg font-medium text-white/60">{item.label}</span>
                    <ul className="mt-3 space-y-3 border-l border-white/15 pl-5">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to} className="text-white/90 transition hover:text-teal">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.to}>
                    <Link to={item.to!} className="text-lg font-medium text-white/90 transition hover:text-teal">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">Get In Touch</p>
            <div className="mt-6 space-y-8 text-white/90">
              <div>
                <p className="text-sm text-white/50">Email</p>
                <a href="mailto:service@visionbiomedicalservices.com" className="mt-1 block transition hover:text-teal">
                  service@visionbiomedicalservices.com
                </a>
                <a href={`mailto:${company.email}`} className="mt-1 block transition hover:text-teal">
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-white/50">Address:</p>
                {company.address.map((line) => (
                  <p key={line} className="mt-1">
                    {line}
                  </p>
                ))}
                <p className="mt-1 text-white/70">{company.appointment}</p>
              </div>
              <div>
                <p className="text-sm text-white/50">Call</p>
                <a href={company.phoneHref} className="mt-1 block font-display text-2xl font-bold transition hover:text-teal">
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="flex items-center gap-6 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
            <div className="shrink-0 rounded-xl bg-white p-2">
              <img src={images.hometownLogo} alt="Hometown Health" className="h-24 w-auto" />
            </div>
            <p className="leading-relaxed text-white/80">Vision Biomedical is a business partner of Hometown Health, LLC, an organization of rural and small hospitals</p>
          </div>
          <div className="flex items-center gap-6 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
            <div className="shrink-0 rounded-xl bg-white p-2">
              <img src={images.gsascLogo} alt="Georgia Society of Ambulatory Surgery Centers" className="h-24 w-auto" />
            </div>
            <p className="leading-relaxed text-white/80">We are also a proud business partner of the Georgia Society of Ambulatory Surgery Centers</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright © 2020 | All Rights Reserved | Powered by{' '}
            <a href="https://www.vroooom.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-white/90 hover:text-teal">
              Vroooom
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
