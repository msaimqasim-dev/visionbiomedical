import { Building2, Phone, Stethoscope } from 'lucide-react';
import logo from '../assets/images/logo.png';
import hometownLogo from '../assets/images/hometown.png';
import gsascLogo from '../assets/images/gsasc.png';
import appointment from '../assets/images/appointment.jpg';
import stethoscopeAbout from '../assets/images/stethoscope-about.jpg';
import aboutClientImage from '../assets/images/client-nov-2026/about-us-second-image.jpg';
import servicesClientHero from '../assets/images/client-nov-2026/services-header-image.jpg';
import servicesClientDetail from '../assets/images/client-nov-2026/services-detail-client.jpg';
import docStethoscope from '../assets/images/doc-stethoscope.jpg';
import regulatoryHero from '../assets/images/regulatory-hero.jpg';
import regulatoryClientImage from '../assets/images/client-nov-2026/regulatory-compliance-image.jpg';
import newsHero from '../assets/images/news-hero.jpg';
import contactHero from '../assets/images/client-nov-2026/contact-us-image.jpg';
import homeLastImage from '../assets/images/client-nov-2026/home-last-image.jpg';
import newsArticle from '../assets/images/news-article.jpg';
import quoteHero from '../assets/images/quote-hero.jpg';
import heroMedical from '../assets/images/hero-medical.jpg';

export const images = {
  logo,
  hometownLogo,
  gsascLogo,
  appointment,
  homeLastImage,
  stethoscopeAbout,
  aboutBody: aboutClientImage,
  servicesHero: servicesClientHero,
  servicesBody: servicesClientDetail,
  docStethoscope,
  regulatoryHero,
  regulatoryBody: regulatoryClientImage,
  newsHero,
  contactHero,
  newsArticle,
  quoteHero,
  heroMedical,
};

export const heroBackgrounds = [
  images.heroMedical,
  images.newsHero,
  images.regulatoryHero,
  images.docStethoscope,
];

export const company = {
  phone: '(866) 571-9770',
  phoneHref: 'tel:8665719770',
  serviceEmail: 'service@visionbiomedicalservices.com',
  address: ['Vision Biomedical Services', '3021-2 Sandy Parkway Suite I', 'Columbus, GA 31909'],
  appointment: 'By Appointment Only',
};

export const nav = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Regulatory Compliance', to: '/regulatory-compliance' },
  { label: 'News', to: '/news' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Career', to: '/career/' },
];

export const copy = {
  founded:
    'The founder of Vision Biomedical has 35+ years of individual biomedical equipment experience.',
  provides:
    'Vision Biomedical Services provides a complete medical equipment management program and offers services in all areas.',
  quote: 'Vision Biomedical Services can provide a free quote for your medical equipment service needs.',
  specializes: 'Vision Biomedical Services specializes in healthcare technology management.',
  includes:
    'This includes preventive maintenance, repair, and contract management. It also includes providing all documentation and support needed for state and regulatory agency compliance. Our management staff can also be onsite to assist during any Joint Commission, DNV, or state visits.',
  technicians:
    'Our technicians are experienced, manufacturer trained professionals. We service general medical, anesthesia, sterilization, and imaging equipment. Our technicians are continuously learning new technology and being trained by various manufacturer’s so we can meet all of your service needs. We can also manage the service on any specialty equipment that can only be serviced by the manufacturer, taking the burden off of your department managers or administrators.',
};

export const homeCards = [
  { title: 'About Us', text: copy.founded, to: '/about-us', icon: Building2 },
  { title: 'Our Services', text: copy.provides, to: '/services', icon: Stethoscope },
  { title: 'Contact Us', text: copy.quote, to: '/contact-us', icon: Phone },
];

export const marqueeItems = [
  'Vision Biomedical Services',
  'For All Your Medical Equipment Needs',
];

export const testimonials = [
  '“Our organization has worked with Greg, Melissa and their team since 2006. We appreciate their commitment to excellence and their consistent delivery of expert service for all of our bio-med services. They have grown with us over the years and have been beneficial in helping us achieve the level of patient care we are able to deliver to our patients and residents. We can’t imagine having any other company handle our bio-med needs.”',
  '“Vision Biomed is truly a “Home Town” business friend. They have been servicing us since Greg Herndon was the only Biomed Tech the company had! This company is very special to our organization and is an integral part of our success to date. Even though this company has grown throughout the years, you still get a live voice when you call and their turn around time on repairs always exceeds expectations. All the staff is very pleasant to work with (Ken, Greg, Melissa) and go above and beyond with their customer service. I really can’t say enough good things about them! Greg is very honest and will tell you when you are wasting good money on “junk” equipment! Highly recommend them to any one with absolutely no reservations whatsoever. I feel they are very deserving of this award and very long past due in receiving this honor.”',
  '“unsurpassed customer service at great value price”',
  '“12 years of great service and support with a personal touch”',
  '“Vision Biomedical has been a loyal vendor of mine at LifeBrite Community Hospital of Early for 8 years. Greg, Melissa, and Ken are extremely organized with their record keeping. They also go above and beyond to make sure that they are on site when DNV surveyors arrive. When we applied for ISO: 2001 certification, they were willing to go get additional certification in order to be compliant for our hospital. Not only are their biomedical skills superb, they help us find parts to outdated equipment. They have worked with us through a bankruptcy and never questioned our commitment to providing quality healthcare in a rural environment. I love the fact that they are a family helping us take care of the families we serve.”',
  '“Vision has been our partner for 12 years, and I do not have one bad word to say about them. Their service is always prompt, their customer service top notch, and every Joint Commission surveyor that has inspected their management of our medical equipment program has always been impressed. They are very deserving of HTH Business Partner of the Year.”',
  '“We have been a loyal business partner for 12 years and take pride in serving the HomeTown hospitals. We provide the best service at the lowest price possible to help ensure their survival. Many times we go above and beyond to extend the life of their equipment to avoid expensive replacement units. If replacement becomes necessary we work with them and our vendors to find the best product to meet their needs at a fair price. We provide support during DNV/Joint Commission inspections to ensure the standards are being met and exceeded. We love and appreciate our HomeTown hospitals and staff!”',
];

export const articleParagraphs = [
  'Vision Biomedical Services, a gold level business partner with HomeTown Health, was presented the “2018 Business Partner of the Year” award at HomeTown’s 19th Annual Fall Conference held at Callaway Gardens October 17-19, 2018.',
  '“This coveted award is presented each year by HomeTown Health to one of 60 Business partners who exhibit extraordinary support and dedication to HomeTown Health hospitals, commitment to excellence, exceptional customer service, and for their tireless efforts in helping rural hospitals survive,” said HomeTown’s CEO Jimmy Lewis. Each year HomeTown Health member hospitals vote to nominate the partner that provides them with a “best practice” solution and a high level of customer service and support that positively influences the delivery of rural health care in Georgia and the hospital communities that they serve.',
  '“Vision Biomedical has come beside our hospitals and worked tirelessly to support and partner with those hospitals for success in their communities. They are dedicated supporters of the HomeTown Health mission and vested partners in our many hospitals – and on behalf of all our hospitals, we thank them for their dedication,” says Kristy Thomson, COO of HomeTown Health, LLC.',
];
