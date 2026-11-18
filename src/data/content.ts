import logo from '../assets/images/logo.png';
import hometownLogo from '../assets/images/hometown.png';
import gsascLogo from '../assets/images/gsasc.png';
import ecg from '../assets/images/ecg.jpg';
import appointment from '../assets/images/appointment.jpg';
import stethoscopeAbout from '../assets/images/stethoscope-about.jpg';
import aboutBody from '../assets/images/about-body.jpg';
import servicesHero from '../assets/images/services-hero.jpg';
import servicesBody from '../assets/images/services-body.jpg';
import docStethoscope from '../assets/images/doc-stethoscope.jpg';
import equipmentHero from '../assets/images/equipment-hero.jpg';
import m11_1 from '../assets/images/m11-1.jpg';
import m11_2 from '../assets/images/m11-2.jpg';
import m11_3 from '../assets/images/m11-3.jpg';
import m11_4 from '../assets/images/m11-4.jpg';
import partsHero from '../assets/images/parts-hero.jpg';
import excel1 from '../assets/images/excel-1.jpg';
import excel2 from '../assets/images/excel-2.jpg';
import excel3 from '../assets/images/excel-3.jpg';
import regulatoryHero from '../assets/images/regulatory-hero.jpg';
import regulatoryBody from '../assets/images/regulatory-body.jpg';
import newsHero from '../assets/images/news-hero.jpg';
import newsArticle from '../assets/images/news-article.jpg';
import quoteHero from '../assets/images/quote-hero.jpg';
import heroMedical from '../assets/images/hero-medical.jpg';

export const images = {
  logo,
  hometownLogo,
  gsascLogo,
  ecg,
  appointment,
  stethoscopeAbout,
  aboutBody,
  servicesHero,
  servicesBody,
  docStethoscope,
  equipmentHero,
  partsHero,
  regulatoryHero,
  regulatoryBody,
  newsHero,
  newsArticle,
  quoteHero,
  heroMedical,
};

/* The original homepage hero slider images, without the first doctor (doc1.jpg). */
export const heroBackgrounds = [
  images.heroMedical,
  images.newsHero,
  images.regulatoryHero,
  images.docStethoscope,
];

export const equipmentGallery = [m11_1, m11_2, m11_3, m11_4];
export const partsGallery = [excel1, excel2, excel3];

export const company = {
  phone: '(866) 571-9770',
  phoneHref: 'tel:8665719770',
  email: 'sales@visionbiomedicalservices.com',
  serviceEmail: 'service@visionbiomedicalservices.com',
  partsEmail: 'services@visionbiomedicalservices.com',
  address: ['Vision Biomedical Services', '3021-2 Sandy Parkway Suite I', 'Columbus, GA 31909'],
  appointment: 'By Appointment Only',
  copyright: 'Copyright © 2020 | All Rights Reserved | Powered by Vroooom',
  ebay: 'https://www.ebay.com/itm/264145749269?ssPageName=STRK:MESELX:IT&_trksid=p3984.m1555.l2649',
};

export type NavChild = { label: string; to: string };
export type NavItem = { label: string; to?: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  {
    label: 'Sales',
    children: [
      { label: 'Equipment', to: '/sales/equipment' },
      { label: 'Parts', to: '/sales/parts' },
    ],
  },
  { label: 'Regulatory Compliance', to: '/regulatory-compliance' },
  { label: 'News', to: '/news' },
  { label: 'Contact Us', to: '/contact-us' },
];

export const copy = {
  founded:
    'Vision Biomedical was founded by an AAMI certified Biomed Tech with over 30 years experience due to a clear need for medical equipment management by one company.',
  provides:
    'Vision Biomedical Services provides a complete medical equipment management program and offers services in all areas.',
  quote: 'Vision Biomedical Services can provide a free quote for all of your medical equipment needs.',
  specializes: 'Vision Biomedical Services specializes in healthcare technology management.',
  includes:
    'This includes preventive maintenance and repair, contract management, and new or refurbished equipment purchases. It also includes providing all documentation and support needed for state and regulatory agency compliance. Our management staff can also be onsite to assist during any Joint Commission, DNV, or state visits.',
  technicians:
    'Our technicians are experienced, manufacturer trained professionals. We service general medical, anesthesia, sterilization, and imaging equipment. Our technicians are continuously learning new technology and being trained by various manufacturer’s so we can meet all of your service needs. We can also manage the service on any specialty equipment that can only be serviced by the manufacturer, taking the burden off of your department managers or administrators.',
  partnerHometown:
    'Vision Biomedical is a business partner of Hometown Health, LLC, an organization of rural and small hospitals',
  partnerGsasc:
    'We are also a proud business partner of the Georgia Society of Ambulatory Surgery Centers',
};

export const heroSlides = [
  { title: 'Vision Biomedical Services', text: copy.specializes },
  { title: 'About Us', text: copy.founded },
  { title: 'Our Services', text: copy.provides },
  { title: 'Contact Us', text: copy.quote },
  { title: 'For All Your Medical Equipment Needs', text: '' },
];

export const homeCards = [
  { title: 'About Us', text: copy.founded, to: '/about-us' },
  { title: 'Our Services', text: copy.provides, to: '/services' },
  { title: 'Contact Us', text: copy.quote, to: '/contact-us' },
];

export const marqueeItems = [
  'About Us',
  'Our Services',
  'Contact Us',
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
