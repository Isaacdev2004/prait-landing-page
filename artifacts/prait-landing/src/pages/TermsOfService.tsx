import React from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: April 30, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-10 text-foreground">

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and PRAIT Consulting Inc. ("PRAIT," "we," "our," or "us"), a corporation registered in Canada. By accessing our website, booking a consultation, enrolling in any program, or using any of our services, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you do not agree to these Terms, please refrain from using our services. We reserve the right to modify these Terms at any time, and your continued use of our services following any modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Services Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PRAIT Consulting provides cross-border education, career development, and business consulting services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Domestic Recruitment:</strong> Career college placement and support for individuals in Canada seeking funded programs, career switches, or new academic pathways</li>
              <li><strong>International Student Recruitment:</strong> End-to-end application support, visa guidance, and admissions consulting for African students applying to Canadian institutions, including Conestoga College</li>
              <li><strong>Career Training & Bootcamps:</strong> Short and intensive programs in AI, cybersecurity, digital skills, resume optimization, and LinkedIn profile development</li>
              <li><strong>Business Consulting:</strong> Strategic advisory services for entrepreneurs and small businesses including marketing, SEO, AI tools integration, and business growth planning</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Specific terms, timelines, deliverables, and fees for each service will be outlined in a separate service agreement or engagement letter provided at the time of enrollment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are available to individuals who are 18 years of age or older, or to minors with the written consent of a parent or legal guardian. By using our services, you represent and warrant that you meet this eligibility requirement and that all information you provide is accurate, current, and complete. PRAIT reserves the right to refuse service to anyone at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Consultation Bookings</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Initial consultations may be offered free of charge as part of our onboarding process. For scheduled consultations:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You are responsible for attending at the agreed time. Please provide at least 24 hours' notice if you need to reschedule or cancel</li>
              <li>Repeated no-shows or late cancellations may result in a cancellation fee or suspension of consulting services</li>
              <li>Consultation advice is provided for informational purposes. PRAIT does not guarantee specific outcomes related to admission decisions, visa approvals, or employment results</li>
              <li>All consultation content is confidential and may not be recorded or shared without PRAIT's prior written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Fees, Payments, and Refunds</h2>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Fees</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All service fees are outlined in your individual service agreement. Fees are quoted in Canadian Dollars (CAD) unless otherwise stated. PRAIT reserves the right to adjust fees with reasonable notice.
            </p>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Payment</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Payment is due as outlined in your service agreement. Accepted payment methods include credit card, bank transfer, and other methods specified at the time of enrollment. All payments are processed through secure, encrypted payment platforms. PRAIT does not store your payment card details.
            </p>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Refund Policy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Refund eligibility varies by service type. As a general guideline: services not yet commenced are eligible for a full refund within 7 business days of payment. Services in progress may be eligible for a partial refund at PRAIT's discretion, based on the value of work already delivered. Training program refunds are subject to the specific program's enrollment agreement. Refund requests must be submitted in writing to our billing team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">To receive the full benefit of our services, you agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide accurate, truthful, and complete information about your background, qualifications, and goals</li>
              <li>Respond to communications from PRAIT in a timely manner</li>
              <li>Submit required documents, applications, and materials by agreed deadlines</li>
              <li>Disclose any information relevant to your eligibility for programs or institutions</li>
              <li>Comply with the requirements of third-party institutions, government bodies, and regulatory agencies involved in your pathway</li>
              <li>Notify PRAIT promptly of any changes in your circumstances that may affect your application or enrollment</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              PRAIT is not liable for negative outcomes arising from your failure to fulfill these responsibilities, including providing false, inaccurate, or incomplete information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Limitation of Liability and Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PRAIT Consulting provides advisory and facilitation services only. We do not guarantee:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Acceptance into any educational institution or program</li>
              <li>Approval of any visa, permit, or immigration application</li>
              <li>Employment or career advancement outcomes</li>
              <li>Specific business growth results from our consulting services</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by applicable law, PRAIT's total liability to you for any claim arising from these Terms or our services shall not exceed the total fees paid by you in the 12 months preceding the claim. In no event shall PRAIT be liable for indirect, incidental, special, consequential, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on our website and in our training materials — including text, graphics, logos, program content, course materials, and design elements — is the intellectual property of PRAIT Consulting Inc. and is protected by Canadian copyright law. You may not reproduce, distribute, modify, or create derivative works from any of our content without prior written permission. Training materials provided to enrolled students are for personal, non-commercial use only and may not be shared or resold.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              Both parties agree to keep confidential any proprietary or sensitive information shared in the course of the consulting relationship. PRAIT will not disclose your personal information to third parties except as outlined in our Privacy Policy. You agree not to disclose PRAIT's proprietary methodologies, tools, pricing structures, or business processes to any third party without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Governing Law and Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. In the event of any dispute arising from these Terms or our services, both parties agree to first attempt to resolve the matter through good-faith negotiation. If a resolution cannot be reached within 30 days, disputes shall be submitted to binding arbitration in Ontario in accordance with the Arbitration Act, 1991 (Ontario). The language of arbitration shall be English.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate a service engagement upon written notice in accordance with the terms of the applicable service agreement. PRAIT reserves the right to immediately suspend or terminate services — without refund — in cases of fraud, misrepresentation, abusive conduct toward our staff, or violation of these Terms. Upon termination, all outstanding fees become immediately due and payable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-muted/50 rounded-xl p-6 space-y-2">
              <p className="font-semibold text-foreground">PRAIT Consulting Inc.</p>
              <p className="text-muted-foreground">Legal Department</p>
              <p className="text-muted-foreground">Canada</p>
              <p className="text-muted-foreground">Email: legal@praitconsulting.ca</p>
            </div>
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
