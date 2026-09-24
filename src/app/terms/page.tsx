import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { CONTACT_EMAIL, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Nowaitt",
  description:
    "The terms and conditions that govern your use of the Nowaitt app, business dashboard, and website.",
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you and Nowaitt (&ldquo;Nowaitt&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) and govern your use of the Nowaitt mobile
          application, the Nowaitt business dashboard, and the website at{" "}
          <a href="https://nowaitt.com">nowaitt.com</a> (together, the &ldquo;Services&rdquo;).
        </p>
        <p>
          By creating an account or using the Services, you agree to these Terms and to our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you do not agree, please do not use the Services.
        </p>
      </>
    ),
  },
  {
    id: "the-service",
    title: "What Nowaitt Does",
    content: (
      <>
        <p>
          Nowaitt is a platform that connects customers with participating businesses such as salons, clinics,
          hospitals, garages, and service centres. It lets customers join a queue or book a slot remotely, see their
          live position and estimated wait time, and receive alerts when their turn is approaching.
        </p>
        <p>
          Nowaitt is a technology platform only. <strong>We do not provide the services offered by businesses</strong>{" "}
          (for example, haircuts, medical consultations, or vehicle repairs). Those services are provided solely by the
          business, which is responsible for their quality, safety, pricing, and legality.
        </p>
        <p>
          Nowaitt does not provide medical advice. In a medical emergency, contact emergency services or go to the
          nearest hospital directly — do not rely on a Nowaitt queue.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility and Accounts",
    content: (
      <ul>
        <li>
          You must be at least 18 years old, or at least 13 years old and using the Services with the consent and
          supervision of a parent or guardian.
        </li>
        <li>You must give accurate information when creating an account and keep it up to date.</li>
        <li>
          You are responsible for keeping your login credentials secure and for all activity under your account. Tell
          us immediately at {mail} if you suspect unauthorised use.
        </li>
        <li>One person may not hold multiple customer accounts to gain an unfair queue advantage.</li>
      </ul>
    ),
  },
  {
    id: "queues",
    title: "Queues, Bookings, and Wait Times",
    content: (
      <ul>
        <li>
          Estimated wait times are calculated from queue position and the business&apos;s average service time. They
          are estimates only and <strong>are not guaranteed</strong>; actual times may vary.
        </li>
        <li>
          Each business sets its own policies for late arrivals, missed turns, no-shows, and cancellations. If you miss
          your turn, the business may mark you absent and you may need to rejoin the queue.
        </li>
        <li>You can leave a queue or cancel a booking at any time from the App.</li>
        <li>
          Notifications and reminder calls depend on your device, network, and settings. We are not responsible for
          alerts that are delayed or not delivered for reasons beyond our control.
        </li>
      </ul>
    ),
  },
  {
    id: "businesses",
    title: "Terms for Businesses",
    content: (
      <>
        <p>If you register a business on Nowaitt, you also agree that:</p>
        <ul>
          <li>You are authorised to act on behalf of the business, and the information you provide is accurate.</li>
          <li>You hold all licences and registrations required to operate your business.</li>
          <li>You will manage your queue honestly and serve customers in the order shown, unless a clear, fair reason applies.</li>
          <li>
            You will use customer information received through Nowaitt only to serve those customers, keep it
            confidential, and comply with applicable data protection laws.
          </li>
          <li>You are solely responsible for the services you provide and for any dispute with your customers.</li>
        </ul>
      </>
    ),
  },
  {
    id: "fees",
    title: "Fees and Payments",
    content: (
      <>
        <p>
          Nowaitt is currently free for customers to download and use. Businesses may be offered paid plans; any fees
          will be clearly shown before you agree to them.
        </p>
        <p>
          Where in-app payments are offered, they are processed by third-party payment gateways under their own terms.
          Refunds for services provided by a business are governed by that business&apos;s refund policy. We will
          notify you in advance before introducing any new charges.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Join queues or make bookings you do not intend to attend, or reserve spots to resell them.</li>
          <li>Use bots, scripts, or automated means to access the Services or manipulate queues.</li>
          <li>Impersonate any person or business, or provide false information.</li>
          <li>Post reviews or content that is false, abusive, defamatory, obscene, or infringes others&apos; rights.</li>
          <li>Attempt to hack, reverse engineer, disrupt, or overload the Services.</li>
          <li>Use the Services for anything unlawful.</li>
        </ul>
      </>
    ),
  },
  {
    id: "content",
    title: "Your Content",
    content: (
      <p>
        You keep ownership of content you submit, such as reviews, photos, and business listings. You give Nowaitt a
        non-exclusive, royalty-free, worldwide licence to host, display, and use that content to operate and promote
        the Services. You confirm you have the rights to the content you submit. We may remove content that breaks
        these Terms.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual Property",
    content: (
      <p>
        The Services, including the Nowaitt name, logo, design, software, and content (other than user content), are
        owned by Nowaitt and protected by law. We grant you a limited, personal, non-transferable, revocable licence to
        use the App for its intended purpose. You may not copy, modify, distribute, or create derivative works from
        the Services without our written permission.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: (
      <p>
        The Services may use or link to third-party services, such as Google Sign-In, maps, and payment gateways. Your
        use of those services is governed by their own terms and privacy policies, and we are not responsible for them.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Suspension and Termination",
    content: (
      <>
        <p>
          You may stop using the Services and delete your account at any time — see our{" "}
          <Link href="/delete-account">Account Deletion page</Link>.
        </p>
        <p>
          We may suspend or terminate your access if you break these Terms, misuse the Services, or if required by law.
          Where reasonable, we will tell you why and give you a chance to respond.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the fullest extent permitted
        by law, we make no warranties that the Services will be uninterrupted, error-free, or that wait times,
        business listings, or other information will be accurate or complete. We do not endorse or guarantee any
        business listed on Nowaitt.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by law, Nowaitt will not be liable for any indirect, incidental, special, or
        consequential damages, or for loss of time, profits, or data, arising from your use of the Services or from any
        service provided by a business. Our total liability for any claim relating to the Services will not exceed the
        greater of the amount you paid to Nowaitt in the 12 months before the claim or ₹1,000. Nothing in these Terms
        limits liability that cannot be limited by law.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: (
      <p>
        You agree to indemnify and hold harmless Nowaitt from any claims, losses, or expenses (including reasonable
        legal fees) arising from your breach of these Terms, your misuse of the Services, or, for businesses, the
        services you provide to customers.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing Law and Disputes",
    content: (
      <p>
        These Terms are governed by the laws of India. Before starting any legal proceedings, you agree to first
        contact us at {mail} so we can try to resolve the issue informally. Any dispute that cannot be resolved will
        be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. We will post the updated Terms on this page and change the
        &ldquo;Last updated&rdquo; date. For significant changes, we will notify you in the App or by email. Continuing
        to use the Services after changes take effect means you accept the updated Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <p>
        For questions about these Terms, email {mail} or write to us at Nowaitt, Pune, Maharashtra, India.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Terms of Service"
      lastUpdated="September 24, 2026"
      intro={
        <p>
          Please read these Terms carefully. They explain your rights and responsibilities when using Nowaitt, whether
          you are a customer joining a queue or a business managing one.
        </p>
      }
      sections={sections}
    />
  );
}
