import { images } from '../data/content';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { careerJobs } from '../data/career-meta';
import { Btn, PageBanner, Reveal } from '../components/ui';

const northQualifications = [
  'Associate’s degree in Biomedical Technology or Electronics.',
  'Minimum of two years of hands-on experience in a hospital biomedical department.',
  'Experience inspecting, testing, troubleshooting, repairing, and maintaining a broad range of medical equipment.',
  'Working knowledge of surgical equipment and high-risk medical devices.',
  'Proficiency in electrical safety testing and preventive maintenance procedures.',
  'Understanding of applicable regulatory standards and healthcare compliance requirements.',
  'Ability to work independently while maintaining a high level of professionalism and customer service.',
];

const atlantaQualifications = [
  'Associate’s degree in Biomedical Technology or Electronics',
  'Minimum of two years of hands-on experience in a hospital-based biomedical equipment department.',
  'Experience inspecting, testing, troubleshooting, repairing, and maintaining a broad range of medical equipment.',
  'Working knowledge of surgical equipment and high-risk medical devices.',
  'Proficiency in electrical safety testing and preventive maintenance procedures.',
  'Understanding of applicable regulatory standards, healthcare compliance requirements, and equipment documentation.',
  'Ability to work independently, manage multiple facility assignments, and prioritize service requests.',
  'Strong communication, organizational, and customer service skills.',
  'Professional demeanor and commitment to providing exceptional service to healthcare facilities.',
];

const benefits = [
  'Health Insurance',
  'Dental Insurance',
  'Vision Insurance',
  'Life Insurance',
  '401(k) with Company Matching',
];

const atlantaBenefits = [
  'Company Vehicle: Company-provided vehicle for travel between assigned healthcare facilities.',
  'Test Equipment Provided: All necessary biomedical test equipment and tools provided.',
  ...benefits,
  'Full-Time, Stable Employment',
  'Opportunity to work independently while supporting a variety of healthcare facilities.',
];

const jobTitle = 'font-display text-3xl font-bold text-ink md:text-4xl';
const heading = 'font-display text-xl font-bold text-brand-dark';
const jobClass = 'space-y-6 text-lg leading-relaxed text-slate-600';
const employment = 'Vision Biomedical Services, LLC | Full-Time Position';
const jobsEmail = 'Jobs@visionbiomedicalservices.com';

function JobList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function NorthJobContent() {
  return (
    <>
      <p>Vision Biomedical Services, LLC is seeking a skilled and experienced Biomedical Equipment Technician II (BMET II) to join our growing team. The ideal candidate will have a minimum of two years of hospital-based biomedical equipment experience and a strong commitment to equipment reliability, service excellence, and patient safety.</p>
      <p>{careerJobs.north.description}</p>
      <h2 className={heading}>Key Qualifications &amp; Responsibilities:</h2>
      <JobList items={northQualifications} />
      <p>If you are an experienced BMET II looking for an opportunity to advance your career with a company committed to quality, reliability, and exceptional customer service, we encourage you to apply.</p>
      <JobList items={benefits} />
      <p>Apply today! We look forward to hearing from you.</p>
      <p>Email: <a href={`mailto:${jobsEmail}`} className="break-words font-semibold text-brand underline">{jobsEmail}</a></p>
    </>
  );
}

function AtlantaJobContent() {
  return (
    <>
      <h2 className={heading}>Position Overview</h2>
      <p>Vision Biomedical Services, LLC is seeking an experienced and motivated Biomedical Equipment Technician II (BMET II) to join our growing team. The ideal candidate will have a minimum of two years of hands-on experience in a hospital-based biomedical department, with a strong commitment to equipment reliability, quality service, and patient safety.</p>
      <p>This is an excellent opportunity for a technician who enjoys variety, independence, and working in different healthcare environments.</p>
      <p>Rather than being assigned to a single facility, this position will provide biomedical equipment services to multiple surgical centers and small hospitals throughout the greater Atlanta, Georgia area and surrounding communities.</p>
      <p>{careerJobs.atlanta.description}</p>
      <h2 className={heading}>Key Qualifications &amp; Responsibilities</h2>
      <JobList items={atlantaQualifications} />
      <h2 className={heading}>What We Offer</h2>
      <p>Vision Biomedical Services is committed to providing our technicians with the tools, resources, and benefits needed to succeed.</p>
      <JobList items={atlantaBenefits} />
      <h2 className={heading}>Why Join Vision Biomedical Services?</h2>
      <p>At Vision Biomedical Services, we understand that our technicians are the foundation of our company. We take pride in providing dependable biomedical support, maintaining high standards of service, and building lasting relationships with the healthcare facilities we serve.</p>
      <p>If you are an experienced BMET who enjoys working independently, traveling to different facilities, and taking pride in your work, we would like to hear from you.</p>
      <h2 className={heading}>Apply Today!</h2>
      <p>Join a growing biomedical service company that values experience, professionalism, and quality workmanship.</p>
      <p>Vision Biomedical Services, LLC</p>
      <p>Submit your resume and qualifications to be considered for this opportunity.</p>
      <p>Email: <a href={`mailto:${jobsEmail}`} className="break-words font-semibold text-brand underline">{jobsEmail}</a></p>
    </>
  );
}

export default function CareerPage() {
  return (
    <>
      <PageBanner title="Career" image={images.heroMedical} />
      <section className="relative bg-page py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-6 text-lg font-semibold leading-relaxed text-brand-dark">
            We are always looking for experienced Biomed Technicians.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.values(careerJobs).map((job) => (
              <Reveal key={job.path} className="h-full">
                <article className="flex h-full flex-col items-start rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200/80 sm:p-8">
                  <p className="font-semibold text-brand-dark">{job.location}</p>
                  <h2 className={`mt-2 ${jobTitle}`}>{job.title}</h2>
                  <p className="mt-3 text-slate-600">{employment}</p>
                  <p className="mb-6 mt-4 text-lg leading-relaxed text-slate-600">{job.description}</p>
                  <Btn to={job.path} className="mt-auto">View Full Job Description</Btn>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function CareerJobPage({ jobId }: { jobId: keyof typeof careerJobs }) {
  const job = careerJobs[jobId];

  return (
    <>
      <PageBanner title={job.title} image={images.heroMedical} />
      <section className="relative bg-page py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link to="/career/" className="mb-8 inline-flex items-center gap-2 font-semibold text-brand hover:underline">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to all openings
          </Link>
          <article className={`max-w-4xl ${jobClass}`}>
            <header className="space-y-2">
              <p className="font-semibold text-brand-dark">{job.location}</p>
              <p>{employment}</p>
            </header>
            {jobId === 'north' ? <NorthJobContent /> : <AtlantaJobContent />}
          </article>
        </div>
      </section>
    </>
  );
}
