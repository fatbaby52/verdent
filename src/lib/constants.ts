// Site-wide constants for Verdent

import type { NavLink, FAQ, ProcessStep, ServiceCard, CaseStudy, Testimonial, TeamMember } from '@/types';

// Company Information
// TODO: Update these with real company details
export const COMPANY = {
  name: 'Verdent',
  tagline: 'Clean Equipment Coordination',
  // TODO: Replace with actual email
  email: 'contact@verdent.com',
  // TODO: Replace with actual phone
  phone: '(555) 123-4567',
  // TODO: Replace with actual address if applicable
  address: 'California, USA',
  // TODO: Add actual LinkedIn URL
  linkedIn: 'https://linkedin.com/company/verdent',
  // TODO: Update founded year
  foundedYear: '2023',
  // TODO: Update service area
  serviceArea: 'California and Western United States',
} as const;

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'California CORE', href: '/california-core' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

// Footer Links organized by section
export const FOOTER_LINKS = {
  services: [
    { label: 'Incentive Coordination', href: '/services#incentive-coordination' },
    { label: 'Quote Coordination', href: '/services#quote-coordination' },
    { label: 'Documentation Support', href: '/services#documentation-support' },
    { label: 'Dealer Enablement', href: '/services#dealer-enablement' },
  ],
  resources: [
    { label: 'California CORE Support', href: '/california-core' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQ', href: '/faq' },
  ],
  company: [
    { label: 'About Verdent', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

// Homepage FAQ Preview (subset of full FAQ)
export const HOME_FAQ: FAQ[] = [
  {
    question: 'Does Verdent provide incentives directly?',
    answer: 'No. Verdent does not provide, approve, or guarantee incentives. Verdent helps coordinate the process of preparing for and navigating incentive-supported equipment purchases. Incentive decisions are made by the relevant program administrators.',
  },
  {
    question: 'Is Verdent the dealer?',
    answer: 'No. Verdent is not a dealer and does not sell equipment. Verdent works alongside approved dealers to help coordinate quotes, paperwork, and communication throughout the purchase process.',
  },
  {
    question: 'Can Verdent help with California CORE-related purchases?',
    answer: 'Yes. Verdent provides coordination support for California CORE-related clean equipment purchases, helping buyers, dealers, and OEMs navigate the process from initial interest through to documentation submission by the approved dealer.',
  },
  {
    question: 'Who actually submits the voucher paperwork?',
    answer: 'CORE-approved dealers submit voucher requests to the California CORE program. Verdent helps coordinate the preparation of documentation and supports communication between all parties, but does not submit vouchers directly.',
  },
];

// Full FAQ for FAQ page
export const FULL_FAQ: FAQ[] = [
  ...HOME_FAQ,
  {
    question: 'Can Verdent help me compare eligible equipment options?',
    answer: 'Verdent can help you understand the coordination process and connect you with appropriate dealers who can discuss eligible equipment options. We do not make equipment recommendations ourselves, but we can help ensure you have the information needed to make informed decisions.',
  },
  {
    question: 'Do you work with OEMs and dealers too?',
    answer: 'Yes. Verdent works with equipment manufacturers (OEMs) and dealers to help enable smoother customer adoption of clean equipment. We can help coordinate communications, support documentation workflows, and assist with purchaser readiness.',
  },
  {
    question: 'What information should I have ready before reaching out?',
    answer: 'It helps to know: the type of equipment you are considering, your general timeline, your location (for determining program eligibility), and whether you have been in contact with any dealers or manufacturers already. However, you can reach out at any stage of the process.',
  },
  {
    question: 'How long does the coordination process typically take?',
    answer: 'Timelines vary depending on the specific program, equipment availability, and documentation requirements. Verdent helps keep the process moving efficiently, but actual approval timelines are determined by the relevant program administrators.',
  },
  {
    question: 'What does Verdent charge for services?',
    answer: 'Verdent offers different engagement models depending on the scope of coordination support needed. Contact us to discuss your specific situation and learn about available options.',
  },
  {
    question: 'Is Verdent affiliated with the California CORE program?',
    answer: 'No. Verdent is an independent third-party coordination service. We are not the California CORE program, its administrator, or an official program partner. We help clients navigate the process of working with approved dealers and preparing documentation.',
  },
];

// Process Steps for Home page
export const HOME_PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We learn about your equipment needs, timeline, and current stage in the purchase process.',
  },
  {
    step: 2,
    title: 'Coordination Planning',
    description: 'We help identify relevant programs, connect you with appropriate dealers, and outline the documentation pathway.',
  },
  {
    step: 3,
    title: 'Quote and Documentation Support',
    description: 'We coordinate between you, dealers, and OEMs to gather quotes and prepare required paperwork.',
  },
  {
    step: 4,
    title: 'Submission Preparation',
    description: 'We help ensure documentation is organized and ready for the approved dealer to submit to the program.',
  },
  {
    step: 5,
    title: 'Ongoing Communication',
    description: 'We support communication between all parties throughout the process until the transaction is complete.',
  },
];

// California CORE specific process steps
export const CORE_PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Understand Your Eligibility',
    description: 'Verdent helps you understand the general CORE program requirements and determines if coordination support would be valuable for your situation.',
  },
  {
    step: 2,
    title: 'Connect with Approved Dealers',
    description: 'We help facilitate introductions to CORE-approved dealers who can provide quotes on eligible equipment.',
  },
  {
    step: 3,
    title: 'Coordinate Quote Process',
    description: 'Verdent supports communication between you, dealers, and OEMs to gather accurate quotes and equipment specifications.',
  },
  {
    step: 4,
    title: 'Prepare Documentation',
    description: 'We help organize the documentation required for the voucher request, ensuring nothing is missed.',
  },
  {
    step: 5,
    title: 'Support Dealer Submission',
    description: 'The CORE-approved dealer submits the voucher request. Verdent helps ensure the package is complete and supports any follow-up coordination.',
  },
  {
    step: 6,
    title: 'Transaction Coordination',
    description: 'Once approved, Verdent continues to support communication and coordination through equipment delivery and project completion.',
  },
];

// Services data
export const SERVICES: ServiceCard[] = [
  {
    title: 'Incentive Coordination Support',
    description: 'Navigate the complex landscape of clean equipment incentive programs with organized, professional coordination support.',
    forWhom: 'Equipment buyers seeking to utilize incentive programs for clean equipment purchases.',
    problemSolved: 'Incentive programs often have complex requirements, multiple stakeholders, and strict documentation needs. Missing a step can delay or derail a purchase.',
    typicalEngagement: 'Verdent reviews your situation, identifies relevant programs, coordinates with approved dealers, and helps organize documentation throughout the process.',
  },
  {
    title: 'Quote and Dealer Coordination',
    description: 'Streamline communication between buyers, dealers, and manufacturers to ensure accurate quotes and clear expectations.',
    forWhom: 'Buyers who need help coordinating between multiple dealers or equipment options, and dealers managing complex customer requests.',
    problemSolved: 'Getting accurate quotes that align with incentive requirements requires coordination between multiple parties who may not be used to working together.',
    typicalEngagement: 'Verdent facilitates introductions, coordinates quote requests, ensures specifications meet program requirements, and maintains clear communication between all parties.',
  },
  {
    title: 'Purchaser Readiness and Documentation Support',
    description: 'Prepare buyers to successfully complete incentive-supported purchases with organized documentation and clear process guidance.',
    forWhom: 'First-time incentive program participants and organizations without dedicated staff to manage complex procurement.',
    problemSolved: 'Documentation requirements can be extensive and unfamiliar. Missing or incorrect paperwork delays approvals and frustrates all parties.',
    typicalEngagement: 'Verdent provides checklists, reviews documentation for completeness, coordinates with dealers on required formats, and helps organize submission packages.',
  },
  {
    title: 'OEM and Dealer Enablement',
    description: 'Help equipment manufacturers and dealers serve customers more effectively on incentive-supported transactions.',
    forWhom: 'OEMs looking to increase adoption of their equipment through incentive programs, and dealers seeking to streamline their incentive transaction workflows.',
    problemSolved: 'OEMs and dealers often face questions about incentive programs they are not equipped to answer, leading to lost sales or frustrated customers.',
    typicalEngagement: 'Verdent provides coordination support that allows dealers to focus on equipment sales while we handle process management and customer communication.',
  },
  {
    title: 'Process Management and Communications Support',
    description: 'Keep complex equipment purchases on track with professional process management and proactive communication.',
    forWhom: 'Any organization involved in incentive-supported equipment purchases who needs help managing the process.',
    problemSolved: 'These transactions involve multiple parties, long timelines, and many handoffs. Without active management, deals stall or fail.',
    typicalEngagement: 'Verdent serves as a central coordination point, tracking progress, following up on outstanding items, and keeping all parties informed.',
  },
];

// Case Studies (placeholders)
// TODO: Replace with actual case studies
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-study-1',
    // TODO: Replace with actual client type (e.g., "Municipal Fleet Operator", "Landscape Contractor")
    clientType: '[Client Type - e.g., Fleet Operator]',
    // TODO: Replace with actual problem description
    problem: '[Description of the challenge the client faced, such as: navigating CORE program requirements for the first time while managing a tight equipment replacement timeline]',
    // TODO: Replace with actual description of Verdent\'s role
    verdentRole: '[What Verdent did - e.g., coordinated between client and three potential dealers, organized documentation requirements, maintained timeline tracking]',
    // TODO: Replace with actual outcome
    outcome: '[Result - e.g., Successfully completed equipment purchase with incentive support, reducing total cost by X%]',
    // TODO: Add actual metrics if available
    metrics: [
      { label: 'Incentive Amount', value: '[$XX,XXX]' },
      { label: 'Time to Completion', value: '[X weeks]' },
    ],
    timeline: '[X weeks/months]',
    incentiveAmount: '[$XX,XXX]',
  },
  {
    id: 'case-study-2',
    // TODO: Replace with actual client type
    clientType: '[Client Type - e.g., Construction Company]',
    // TODO: Replace with actual problem description
    problem: '[Description of challenge - e.g., needed to replace aging equipment but was unfamiliar with available incentive programs and approved dealers in their area]',
    // TODO: Replace with actual description of Verdent\'s role
    verdentRole: '[What Verdent did - e.g., provided program overview, connected client with local approved dealer, coordinated quote and documentation process]',
    // TODO: Replace with actual outcome
    outcome: '[Result - e.g., Client successfully upgraded equipment with significant incentive support, dealer reported smoothest CORE transaction to date]',
    metrics: [
      { label: 'Equipment Units', value: '[X]' },
      { label: 'Total Savings', value: '[$XX,XXX]' },
    ],
  },
  {
    id: 'case-study-3',
    // TODO: Replace with actual client type
    clientType: '[Client Type - e.g., Equipment Dealer]',
    // TODO: Replace with actual problem description
    problem: '[Description of challenge - e.g., dealer was losing sales due to customer confusion about incentive programs and complex documentation requirements]',
    // TODO: Replace with actual description of Verdent\'s role
    verdentRole: '[What Verdent did - e.g., provided coordination support for dealer\'s customers, handled documentation preparation, managed customer communications]',
    // TODO: Replace with actual outcome
    outcome: '[Result - e.g., Dealer increased incentive-supported sales by X%, customer satisfaction improved significantly]',
    metrics: [
      { label: 'Transactions Supported', value: '[X]' },
      { label: 'Customer Satisfaction', value: '[High/Excellent]' },
    ],
  },
];

// Testimonials (placeholders)
// TODO: Replace with actual testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    // TODO: Replace with actual quote
    quote: '[Testimonial quote from a satisfied client about how Verdent helped coordinate their equipment purchase]',
    // TODO: Replace with actual name (or use initials if preferred)
    author: '[Client Name or Initials]',
    // TODO: Replace with actual role
    role: '[Title/Role]',
    // TODO: Replace with actual company (or general industry if confidential)
    company: '[Company or Industry]',
  },
  {
    // TODO: Replace with actual quote
    quote: '[Testimonial quote from a dealer about working with Verdent to serve their customers better]',
    author: '[Dealer Contact Name]',
    role: '[Role at Dealership]',
    company: '[Dealership Name or "CORE-Approved Dealer"]',
  },
  {
    // TODO: Replace with actual quote
    quote: '[Testimonial quote about the professionalism and organization Verdent brought to the process]',
    author: '[Client Name]',
    role: '[Title]',
    company: '[Company]',
  },
];

// Team Members (placeholders)
// TODO: Replace with actual team information
export const TEAM_MEMBERS: TeamMember[] = [
  {
    // TODO: Replace with founder name
    name: '[Founder Name]',
    role: 'Founder',
    // TODO: Replace with actual bio
    bio: '[Brief professional bio highlighting relevant experience in clean equipment, incentive programs, operations, or related fields. 2-3 sentences.]',
    // TODO: Add LinkedIn URL
    linkedIn: 'https://linkedin.com/in/founder',
    // TODO: Add professional headshot
    image: '/images/team/founder.jpg',
  },
];

// Trust Signals (placeholders)
// TODO: Replace with actual metrics
export const TRUST_SIGNALS = {
  // TODO: Update with actual years of experience
  yearsExperience: '[X]',
  // TODO: Update with actual transaction count
  transactionsSupported: '[XX]',
  // TODO: Update with actual response time
  averageResponseTime: '[24 hours]',
  // TODO: List actual industries served
  industriesServed: ['Construction', 'Landscaping', 'Municipal Fleets', 'Agriculture'],
};

// Who We Help content
export const WHO_WE_HELP = [
  {
    title: 'Equipment Buyers',
    description: 'Contractors, fleet operators, municipalities, and businesses purchasing clean equipment with incentive support.',
    benefits: [
      'Navigate complex program requirements',
      'Connect with approved dealers',
      'Organize documentation',
      'Keep the process on track',
    ],
    cta: { label: 'Buyer Services', href: '/services#buyers' },
  },
  {
    title: 'Dealers',
    description: 'Equipment dealers who want support coordinating incentive paperwork and buyer readiness for their customers.',
    benefits: [
      'Focus on selling equipment',
      'Reduce customer confusion',
      'Streamline documentation',
      'Improve transaction success rates',
    ],
    cta: { label: 'Dealer Services', href: '/services#dealers' },
  },
  {
    title: 'OEMs',
    description: 'Equipment manufacturers looking to enable dealer and customer adoption through smoother incentive processes.',
    benefits: [
      'Enable dealer success',
      'Support customer adoption',
      'Reduce program friction',
      'Increase equipment sales',
    ],
    cta: { label: 'OEM Services', href: '/services#oems' },
  },
];

// How Verdent Helps content
export const HOW_WE_HELP = [
  {
    title: 'Program Navigation',
    description: 'We help you understand which incentive programs apply to your situation and what the requirements are.',
    icon: 'compass',
  },
  {
    title: 'Dealer Coordination',
    description: 'We facilitate connections with approved dealers and coordinate the quote process.',
    icon: 'handshake',
  },
  {
    title: 'Documentation Support',
    description: 'We help organize paperwork and ensure nothing falls through the cracks.',
    icon: 'document',
  },
  {
    title: 'Process Management',
    description: 'We track progress and keep all parties informed throughout the transaction.',
    icon: 'checklist',
  },
  {
    title: 'Communication Hub',
    description: 'We serve as a central point of contact to reduce confusion and delays.',
    icon: 'chat',
  },
  {
    title: 'Timeline Tracking',
    description: 'We monitor deadlines and follow up proactively to keep things moving.',
    icon: 'calendar',
  },
];
