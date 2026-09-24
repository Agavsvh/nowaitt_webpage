import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { CONTACT_EMAIL, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Delete Your Account — Nowaitt",
  description:
    "How to request deletion of your Nowaitt account and associated data, what is deleted, and what is retained.",
  alternates: { canonical: "/delete-account" },
};

const deletionMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Account Deletion Request"
)}&body=${encodeURIComponent(
  "Please delete my Nowaitt account and associated data.\n\nRegistered phone number:\nRegistered email:\nName on account:\n"
)}`;

const sections: LegalSection[] = [
  {
    id: "in-app",
    title: "Delete From the App",
    content: (
      <ol>
        <li>Open the <strong>Nowaitt</strong> app and sign in.</li>
        <li>Tap <strong>Profile</strong>, then <strong>Settings</strong>.</li>
        <li>Tap <strong>Delete Account</strong>.</li>
        <li>Confirm the request. You will be signed out and your account will be scheduled for deletion.</li>
      </ol>
    ),
  },
  {
    id: "by-email",
    title: "Request Deletion by Email",
    content: (
      <>
        <p>If you no longer have the App installed or can&apos;t sign in, you can request deletion by email:</p>
        <ol>
          <li>
            Send an email to <a href={deletionMailto}>{CONTACT_EMAIL}</a> with the subject{" "}
            <strong>&ldquo;Account Deletion Request&rdquo;</strong>.
          </li>
          <li>Include the phone number and/or email address registered with your Nowaitt account.</li>
          <li>
            To protect your account, we may ask you to confirm the request (for example, with a one-time code sent to
            your registered phone or email).
          </li>
          <li>We will confirm by email once your account has been deleted.</li>
        </ol>
        <p>
          <a
            href={deletionMailto}
            className="inline-block !no-underline px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 !text-white font-semibold shadow-lg hover:opacity-90 transition-opacity"
          >
            Email a Deletion Request
          </a>
        </p>
      </>
    ),
  },
  {
    id: "what-is-deleted",
    title: "Data That Is Deleted",
    content: (
      <ul>
        <li>Your profile: name, phone number, email address, and profile photo.</li>
        <li>Sign-in links to Google or other providers.</li>
        <li>Queue history, bookings, saved businesses, and preferences.</li>
        <li>Location data, device identifiers, and push notification tokens.</li>
        <li>Reviews and ratings you posted (removed or permanently anonymised).</li>
        <li>For business accounts: the business listing, services, staff accounts, and queue data.</li>
      </ul>
    ),
  },
  {
    id: "what-is-retained",
    title: "Data That May Be Retained",
    content: (
      <>
        <p>We may keep a limited amount of data where required by law or for legitimate purposes:</p>
        <ul>
          <li>
            <strong>Payment and transaction records</strong> — kept for up to 8 years to meet tax and accounting laws
            in India.
          </li>
          <li>
            <strong>Records needed for fraud prevention, security, or legal claims</strong> — kept only as long as
            necessary for that purpose.
          </li>
          <li>
            <strong>Anonymised, aggregated statistics</strong> (for example, total queues served) that cannot identify
            you.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "timeline",
    title: "How Long It Takes",
    content: (
      <p>
        Your account is deactivated immediately after you confirm the request. All personal data listed above is
        permanently deleted within <strong>30 days</strong>. Copies in encrypted backups are overwritten within{" "}
        <strong>90 days</strong>. Deletion is permanent and cannot be undone — if you want to use Nowaitt again, you
        will need to create a new account.
      </p>
    ),
  },
  {
    id: "partial",
    title: "Delete Some Data Without Deleting Your Account",
    content: (
      <p>
        You can ask us to delete specific data — such as your booking history or profile photo — while keeping your
        account. Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and tell us what you&apos;d like removed.
        For more details, see our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
];

export default function DeleteAccountPage() {
  return (
    <LegalPage
      badge="Account"
      title="Delete Your Nowaitt Account"
      lastUpdated="September 24, 2026"
      intro={
        <p>
          This page explains how to delete your account in the <strong>Nowaitt</strong> app (developer: Nowaitt) and
          the personal data associated with it. You can delete your account from within the App or by sending us a
          request — no App required.
        </p>
      }
      sections={sections}
    />
  );
}
