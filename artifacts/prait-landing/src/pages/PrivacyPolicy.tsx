import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" data-testid="back-home-link">
            <img src="/prait-logo.jpeg" alt="PRAIT Consulting Logo" className="h-12 w-auto object-contain rounded-md" />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-back-home">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: April 30, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10 text-foreground">

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              PRAIT Consulting Inc. ("PRAIT," "we," "our," or "us") is committed to protecting the privacy and personal information of all individuals who interact with our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By accessing our website or using our services — including education consulting, career training, international student support, and business growth consulting — you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We collect information that is necessary to provide our consulting and educational services:</p>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Personal Identification Information</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Full name, email address, and phone number</li>
              <li>Country of origin and current country of residence</li>
              <li>Educational background and credentials</li>
              <li>Career history and professional experience</li>
              <li>Immigration status (where relevant to our services)</li>
            </ul>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Service-Related Information</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Program preferences and areas of interest</li>
              <li>Application documents and academic records</li>
              <li>Consultation notes and service history</li>
              <li>Payment information (processed through secure third-party providers)</li>
            </ul>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Technical Information</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>IP address, browser type, and device information</li>
              <li>Pages visited, time spent, and navigation patterns on our website</li>
              <li>Cookies and similar tracking technologies (see Section 8)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use your personal information only for legitimate purposes directly related to our services:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>To provide, administer, and improve our consulting and training services</li>
              <li>To communicate with you about consultations, programs, and application updates</li>
              <li>To match you with appropriate educational institutions and career programs</li>
              <li>To send relevant information about programs, updates, and opportunities (with your consent)</li>
              <li>To process payments and maintain billing records</li>
              <li>To comply with legal obligations and regulatory requirements in Canada and other jurisdictions we operate in</li>
              <li>To improve our website experience through analytics and feedback</li>
              <li>To protect the security and integrity of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
            </p>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Educational Partners</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With your explicit consent, we share relevant information with educational institutions such as Conestoga College and other partner colleges in Canada for the purpose of processing your application. These partners operate under their own privacy policies and applicable Canadian privacy law.
            </p>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Service Providers</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We work with trusted service providers (CRM platforms, email systems, payment processors) who access your information solely to help us deliver our services. These providers are contractually obligated to maintain confidentiality and are prohibited from using your data for any other purpose.
            </p>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Legal Requirements</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose information if required by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Consultation records and application materials are typically retained for a minimum of seven (7) years in accordance with Canadian business record-keeping requirements. You may request deletion of your personal data at any time, subject to our legal obligations (see Section 7).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, use, alteration, or disclosure. These measures include encryption of data in transit, access controls, and regular security reviews. While we take every reasonable precaution, no method of transmission over the internet is 100% secure, and we encourage you to contact us immediately if you suspect any unauthorized access to your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Under Canadian privacy law, you have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent to non-essential data processing at any time</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements</li>
              <li><strong>Complaint:</strong> File a complaint with the Office of the Privacy Commissioner of Canada if you believe your privacy rights have been violated</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise any of these rights, please contact us at the information provided in Section 10.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand how visitors interact with our content. You may configure your browser to refuse cookies, though some features of our website may not function correctly as a result. We use analytics tools (such as Google Analytics) to gather aggregated, anonymized usage data to improve our services. This data does not identify you personally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              PRAIT Consulting operates between Canada and Africa. When you engage with our services from outside Canada, your personal information may be transferred to and processed in Canada. We ensure that all such transfers comply with applicable data protection laws and that your information receives an equivalent level of protection regardless of where it is processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Privacy Officer:
            </p>
            <div className="bg-muted/50 rounded-xl p-6 space-y-2">
              <p className="font-semibold text-foreground">PRAIT Consulting Inc.</p>
              <p className="text-muted-foreground">Privacy Officer</p>
              <p className="text-muted-foreground">Canada</p>
              <p className="text-muted-foreground">Email: privacy@praitconsulting.ca</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We will respond to all privacy-related inquiries within 30 days of receipt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or services. The updated policy will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically. Continued use of our services following any changes constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>
      </main>

      <footer className="bg-foreground text-background py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} PRAIT Consulting Inc. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
