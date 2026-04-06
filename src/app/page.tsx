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
        headline="Verdent is a third-party coordinator for incentive-supported clean equipment transactions."
        subheadline="We help buyers, dealers, and OEMs organize and move incentive-supported clean equipment purchases forward, including California CORE-related coordination. From quotes to documentation, Verdent keeps transactions on track."
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
        description="Verdent is a third-party coordinator that helps buyers, dealers, and OEMs organize and move incentive-supported clean equipment transactions forward."
        primaryCta={{ label: 'Contact Verdent', href: '/contact' }}
        secondaryCta={{ label: 'Learn About CORE Support', href: '/california-core' }}
        variant="dark"
      />
    </>
  );
}
