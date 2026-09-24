import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { CONTACT_EMAIL, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Nowaitt",
  description:
    "How Nowaitt collects, uses, shares, and protects your personal information across the Nowaitt app and website.",
  alternates: { canonical: "/privacy" },
};

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    content: (
      <>
        <p>
          Nowaitt (&ldquo;Nowaitt&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the
          Nowaitt mobile application (the &ldquo;App&rdquo;), the Nowaitt business dashboard, and the website at{" "}
          <a href="https://nowaitt.com">nowaitt.com</a> (together, the &ldquo;Services&rdquo;). Nowaitt lets customers
          join queues and book slots at participating businesses remotely, track their position in real time, and
          receive alerts when their turn is approaching.
        </p>
        <p>
          We are based in Pune, Maharashtra, India. For any privacy question you can reach us at {mail}.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Account information:</strong> your name, mobile phone number, email address, and, if you choose,
            a profile photo.
          </li>
          <li>
            <strong>Queue and booking details:</strong> the businesses you join queues at, the services you select,
            booking times, and any notes you add for the business.
          </li>
          <li>
            <strong>Business account information:</strong> if you register a business, we collect the business name,
            address, category, operating hours, services offered, contact details, and staff account details.
          </li>
          <li>
            <strong>Communications:</strong> messages you send to our support team, feedback, reviews, and ratings.
          </li>
        </ul>

        <h3>Information from sign-in providers</h3>
        <p>
          If you sign in with Google, we receive your name, email address, and profile picture from your Google
          account, as permitted by the permissions you approve. See{" "}
          <a href="#google-user-data">Google User Data</a> below.
        </p>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Location:</strong> with your permission, we use your device&apos;s approximate or precise location
            to show nearby businesses and estimate travel time. You can turn this off in your device settings at any
            time; you can still search for businesses manually.
          </li>
          <li>
            <strong>Device information:</strong> device model, operating system version, app version, language, and a
            push notification token so we can send you queue alerts.
          </li>
          <li>
            <strong>Usage and diagnostics:</strong> app interactions, crash reports, and performance logs that help us
            fix bugs and improve the Services.
          </li>
          <li>
            <strong>Website data:</strong> when you visit nowaitt.com, standard server logs (IP address, browser type,
            pages visited) and essential cookies.
          </li>
        </ul>

        <h3>Payment information</h3>
        <p>
          Where in-app payments are available, payments are processed by third-party payment gateways. We do not store
          your full card number, UPI PIN, or bank credentials. We receive only a transaction reference, payment status,
          and amount.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use your information only to:</p>
        <ul>
          <li>Create and manage your account and verify your phone number or email.</li>
          <li>Add you to queues, confirm bookings, and show your live queue position and estimated wait time.</li>
          <li>
            Send push notifications and place automated reminder calls or SMS when your turn is approaching (you can
            turn these off in the App settings).
          </li>
          <li>Show nearby businesses and relevant search results.</li>
          <li>Let businesses see who is in their queue so they can serve you.</li>
          <li>Process payments and prevent fraud.</li>
          <li>Respond to support requests and send important service messages (such as changes to these terms).</li>
          <li>Keep the Services secure, diagnose problems, and improve features.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information, and we do not use it for third-party
          advertising.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How We Share Your Information",
    content: (
      <>
        <p>We share personal information only in these situations:</p>
        <ul>
          <li>
            <strong>With the businesses you queue at:</strong> when you join a queue or book a slot, that business
            receives your name, phone number, selected service, and queue status so it can serve you.
          </li>
          <li>
            <strong>With service providers:</strong> companies that host our servers and database, deliver push
            notifications, place reminder calls or SMS, process payments, and provide crash reporting. They may use
            your information only to perform services for us and must protect it.
          </li>
          <li>
            <strong>For legal reasons:</strong> if required by law, court order, or a government authority, or to
            protect the rights, safety, or property of Nowaitt, our users, or the public.
          </li>
          <li>
            <strong>Business transfers:</strong> if Nowaitt is involved in a merger, acquisition, or sale of assets,
            your information may be transferred, subject to this Privacy Policy.
          </li>
          <li>
            <strong>With your consent:</strong> in any other case, only when you ask us to.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "google-user-data",
    title: "Google User Data",
    content: (
      <>
        <p>
          When you choose &ldquo;Sign in with Google&rdquo;, Nowaitt requests access only to your basic profile
          information (name, email address, and profile picture). We use this data solely to create your Nowaitt
          account, sign you in, and display your name and photo within the App.
        </p>
        <ul>
          <li>We do not access your Gmail, contacts, calendar, Drive files, or any other Google data.</li>
          <li>We do not sell Google user data or share it with third parties, except as needed to operate the Services (for example, our hosting provider) or as required by law.</li>
          <li>We do not use Google user data for advertising or to train artificial intelligence or machine learning models.</li>
          <li>Humans do not read this data unless you give consent, it is needed for security or to comply with law, or it is aggregated and anonymised for internal operations.</li>
        </ul>
        <p>
          Nowaitt&apos;s use and transfer of information received from Google APIs adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
        <p>
          You can remove Nowaitt&apos;s access at any time from your Google Account at{" "}
          <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
            myaccount.google.com/permissions
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    title: "App Permissions",
    content: (
      <>
        <p>The App may ask for the following device permissions. Each is optional unless noted.</p>
        <ul>
          <li><strong>Notifications:</strong> to alert you when your turn is near.</li>
          <li><strong>Location:</strong> to find businesses near you.</li>
          <li><strong>Phone / calls:</strong> only to receive our automated reminder calls; we do not read your call log or contacts.</li>
          <li><strong>Camera / photos:</strong> only if you choose to upload a profile or business photo.</li>
          <li><strong>Internet:</strong> required to show live queue data.</li>
        </ul>
        <p>You can change these permissions at any time in your device settings.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We keep your account information for as long as your account is active. Queue and booking history is kept
          so you and the business can refer to past visits, and is removed when you delete your account.
        </p>
        <p>
          When you delete your account, we delete or anonymise your personal information within 30 days, except
          where we must keep certain records longer to meet legal, tax, accounting, or fraud-prevention obligations
          (for example, payment transaction records). Backups are overwritten on a rolling basis within 90 days.
        </p>
      </>
    ),
  },
  {
    id: "deletion",
    title: "Deleting Your Account and Data",
    content: (
      <>
        <p>You can delete your Nowaitt account and associated data at any time:</p>
        <ul>
          <li>In the App: go to <strong>Profile → Settings → Delete Account</strong>, or</li>
          <li>
            Follow the steps on our <Link href="/delete-account">Account Deletion page</Link>, or email {mail} from
            the email address or with the phone number linked to your account.
          </li>
        </ul>
        <p>
          You can also ask us to delete specific data (such as booking history) without deleting your whole account.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        We protect your information using industry-standard measures, including encryption in transit (HTTPS/TLS),
        access controls that limit who at Nowaitt can see personal data, and secure cloud infrastructure. No method of
        transmission or storage is completely secure, but we work to protect your data and will notify you and the
        relevant authorities of a data breach as required by law.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>
          Subject to applicable law, including India&apos;s Digital Personal Data Protection Act, 2023, you have the
          right to:
        </p>
        <ul>
          <li>Access a summary of the personal data we hold about you.</li>
          <li>Correct or update inaccurate or incomplete information.</li>
          <li>Delete your personal data and account.</li>
          <li>Withdraw consent you have given (for example, to location or notifications).</li>
          <li>Nominate another person to exercise your rights in case of death or incapacity.</li>
          <li>Raise a grievance with us, and escalate to the Data Protection Board of India if unresolved.</li>
        </ul>
        <p>To exercise any of these rights, email {mail}. We will respond within 30 days.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <p>
        Nowaitt is not directed at children under 13, and we do not knowingly collect personal information from them.
        Users between 13 and 18 may use the Services only with the involvement and consent of a parent or guardian.
        If you believe a child has given us personal information without such consent, contact us at {mail} and we
        will delete it.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies on Our Website",
    content: (
      <p>
        Our website uses only essential cookies needed for it to work properly. We do not use advertising or
        cross-site tracking cookies. You can block cookies in your browser settings, though some parts of the site
        may not work as intended.
      </p>
    ),
  },
  {
    id: "international",
    title: "Where Your Data Is Stored",
    content: (
      <p>
        Your information is stored on secure cloud servers that may be located in India or other countries. Where
        data is transferred outside India, we make sure it is protected in line with this Privacy Policy and
        applicable law.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. We will post the new version on this page and update the
        &ldquo;Last updated&rdquo; date. If the changes are significant, we will notify you in the App or by email
        before they take effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact & Grievance Officer",
    content: (
      <>
        <p>
          In accordance with the Information Technology Act, 2000 and the rules made under it, and the Digital
          Personal Data Protection Act, 2023, you can contact our Grievance Officer:
        </p>
        <p>
          <strong>Grievance Officer, Nowaitt</strong>
          <br />
          Email: {mail}
          <br />
          Location: Pune, Maharashtra, India
        </p>
        <p>We will acknowledge your complaint within 24 hours and resolve it within 15 days.</p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Privacy Policy"
      lastUpdated="September 24, 2026"
      intro={
        <p>
          Your privacy matters to us. This Privacy Policy explains what information Nowaitt collects when you use our
          App, business dashboard, and website, how we use it, who we share it with, and the choices you have. By
          using Nowaitt, you agree to the practices described here.
        </p>
      }
      sections={sections}
    />
  );
}
