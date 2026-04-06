import {
  Hero,
  WhoWeHelp,
  HowWeHelp,
  ProcessSteps,
  WhyVerdent,
  CaseStudyPreview,
  FAQSection,
  CTABanner,
} from '@/components/sections';
import { HOME_FAQ, HOME_PROCESS_STEPS } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Verdent helps coordinate incentive-supported clean equipment purchases."
        subheadline="We work alongside buyers, dealers, and OEMs to navigate complex incentive processes. From quotes to documentation, Verdent keeps your equipment purchase moving forward."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Learn How It Works', href: '#process' }}
        showTrustSignals={true}
      />

      {/* Who We Help */}
      <WhoWeHelp />

      {/* How Verdent Helps */}
      <HowWeHelp />

      {/* Process Steps */}
      <div id="process">
        <ProcessSteps
          title="How the coordination process works"
          subtitle="Verdent provides structured support at each stage of your incentive-supported equipment purchase."
          steps={HOME_PROCESS_STEPS}
        />
      </div>

      {/* Why Verdent */}
      <WhyVerdent />

      {/* Case Studies Preview */}
      <CaseStudyPreview limit={3} showViewAll={true} />

      {/* FAQ Preview */}
      <FAQSection
        title="Common questions about Verdent"
        faqs={HOME_FAQ}
        showViewAll={true}
      />

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to discuss your project?"
        description="Whether you're a buyer, dealer, or OEM, Verdent can help coordinate your next incentive-supported equipment transaction."
        primaryCta={{ label: 'Contact Verdent', href: '/contact' }}
        secondaryCta={{ label: 'Learn About CORE Support', href: '/california-core' }}
        variant="dark"
      />
    </>
  );
}
