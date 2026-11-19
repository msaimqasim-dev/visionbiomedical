export const careerTitle = 'Biomedical Jobs in Georgia | Vision Biomedical Services';
export const careerDescription = 'Explore two full-time BMET II openings with Vision Biomedical Services: a North Georgia hospital position and a traveling biomedical equipment technician position in the Atlanta area.';

export const careerJobs = {
  north: {
    path: '/career/north-georgia-bmet-ii/',
    location: 'North Ga position',
    title: 'BMET II – Biomedical Equipment Technician',
    description: 'This opportunity is located within a respected hospital system in beautiful North Georgia, offering an excellent professional environment and the opportunity to work with a diverse range of medical equipment and technologies.',
  },
  atlanta: {
    path: '/career/atlanta-traveling-bmet-ii/',
    location: 'Mobile Biomed Tech Atlanta Area',
    title: 'Traveling BMET II – Biomedical Equipment Technician',
    description: 'The technician will travel between assigned facilities, performing inspections, preventive maintenance, electrical safety testing, troubleshooting, and repairs on a wide range of medical equipment.',
  },
};

export function careerMetadata(path: string) {
  const normalized = path.toLowerCase().replace(/\/$/, '');
  if (normalized === '/career') return { title: careerTitle, description: careerDescription };
  const job = Object.values(careerJobs).find(({ path }) => path.slice(0, -1) === normalized);
  if (job) return { title: `${job.title} | Vision Biomedical Services`, description: job.description };
}
