import type { Metadata } from 'next';
import { Container } from '@/components/layout';
import { Badge } from '@/components/ui';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Verdent privacy policy describing how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary-50/50 to-background">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Badge variant="primary" className="mb-4">Legal</Badge>
            <h1 className="text-display text-secondary-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-body-lg text-secondary-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </Container>
      </section>

      {/* Legal Review Notice */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <Container>
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-body font-semibold text-amber-800">
                Legal Review Required
              </p>
              <p className="text-body-sm text-amber-700 mt-1">
                This privacy policy is a placeholder template. Before launching your website,
                have this document reviewed by a qualified attorney to ensure compliance with
                applicable laws (including CCPA, if applicable) and accurate representation
                of your actual data practices.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto prose-custom">
            <h2>Introduction</h2>
            <p>
              {COMPANY.name} ("we," "our," or "us") respects your privacy and is committed
              to protecting the personal information you share with us. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Contact information (name, email address, phone number)</li>
              <li>Company or organization name</li>
              <li>Information about your equipment needs or projects</li>
              <li>Communications you send to us</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <p>
              When you visit our website, we may automatically collect certain information,
              including:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>IP address (which may be anonymized)</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information to third parties. We may share your
              information in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> With third-party vendors who assist us in
                operating our website or providing services (e.g., email hosting, analytics)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our
                rights, safety, or property
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition,
                or sale of assets
              </li>
              <li>
                <strong>With Your Consent:</strong> When you have given us permission to share
                your information
              </li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your
              experience. You can control cookie settings through your browser preferences.
              Note that disabling cookies may affect website functionality.
            </p>
            {/* TODO: Add specific details about cookies used */}

            <h2>Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security
              measures to protect your personal information. However, no method of
              transmission over the Internet or electronic storage is completely secure,
              and we cannot guarantee absolute security.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfill the
              purposes for which it was collected, comply with legal obligations, resolve
              disputes, and enforce our agreements.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt out of certain data processing activities</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>

            {/* California-specific section */}
            <h2>California Privacy Rights</h2>
            <p>
              If you are a California resident, you may have additional rights under the
              California Consumer Privacy Act (CCPA). These may include:
            </p>
            <ul>
              <li>The right to know what personal information we collect and how it is used</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt out of the sale of personal information (note: we do not sell personal information)</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>
            {/* TODO: Have attorney review CCPA compliance */}

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices of these external sites. We encourage you to review
              their privacy policies.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not
              knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              material changes by posting the updated policy on our website with a new
              "Last Updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <address className="not-italic">
              {COMPANY.name}<br />
              {/* TODO: Replace with actual contact information */}
              Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a><br />
              Phone: <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}>{COMPANY.phone}</a>
            </address>
          </div>
        </Container>
      </section>
    </>
  );
}
