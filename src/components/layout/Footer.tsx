import Link from 'next/link';
import { Container } from './Container';
import { COMPANY, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      {/* Main Footer */}
      <div className="section-padding">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 text-white font-semibold text-xl mb-4">
                <svg
                  className="w-8 h-8 text-primary-400"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M16 2L4 8v8c0 7.732 5.268 14.464 12 16 6.732-1.536 12-8.268 12-16V8L16 2z"
                    fill="currentColor"
                    fillOpacity="0.2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16l3 3 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{COMPANY.name}</span>
              </Link>
              <p className="text-body-sm text-secondary-400 mb-6 max-w-sm">
                {COMPANY.name} helps coordinate incentive-supported clean equipment purchases,
                working alongside buyers, dealers, and OEMs to navigate complex processes.
              </p>
              <div className="space-y-2 text-body-sm">
                <p>
                  <span className="text-secondary-500">Email:</span>{' '}
                  {/* TODO: Replace with actual email */}
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                    {COMPANY.email}
                  </a>
                </p>
                <p>
                  <span className="text-secondary-500">Phone:</span>{' '}
                  {/* TODO: Replace with actual phone */}
                  <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">
                    {COMPANY.phone}
                  </a>
                </p>
                <p>
                  <span className="text-secondary-500">Service Area:</span>{' '}
                  {COMPANY.serviceArea}
                </p>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {/* TODO: Add actual LinkedIn URL */}
                <a
                  href={COMPANY.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-secondary-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-secondary-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-secondary-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm text-secondary-500">
            <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
            <p className="text-center sm:text-right">
              {COMPANY.name} is an independent coordination service. Not affiliated with any government incentive program.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
