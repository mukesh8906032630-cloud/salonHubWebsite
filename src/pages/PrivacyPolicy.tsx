import dayjs from 'dayjs';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const PrivacyPolicy = () => (
  <LegalPageLayout title="Privacy Policy" updatedLabel={`Last updated: ${dayjs().format('MMMM D, YYYY')}`}>
    <h2>1. What We Collect</h2>
    <p>When you or your salon use JT Parlour, we collect:</p>
    <ul>
      <li>Account details — name, email, phone number, and date of birth for salon owners.</li>
      <li>Verification documents — Aadhaar Card, PAN Card, Shop & Establishment Registration, and GST/Udyam Registration, submitted during salon onboarding.</li>
      <li>Operational data — salon, staff, service, booking, attendance, leave, resignation, and payroll records entered by you or your team.</li>
      <li>Technical data — login sessions and basic device/browser information needed to keep your account secure.</li>
    </ul>

    <h2>2. How We Use It</h2>
    <p>We use this information to:</p>
    <ul>
      <li>Create and verify salon owner accounts.</li>
      <li>Operate the features you use — staff management, scheduling, attendance, payroll, and bookings.</li>
      <li>Send account-related email, such as approval notices, temporary passwords, and password resets.</li>
      <li>Maintain an audit log of sensitive account actions for security and accountability.</li>
    </ul>

    <h2>3. How We Store and Protect It</h2>
    <p>
      Access to your data is role-based: staff, salon owners, and platform administrators each see
      only what is relevant to their role. Passwords are stored using one-way hashing, never in
      plain text. Verification documents are stored securely and are only visible to the platform
      administrator and the salon's own owner.
    </p>

    <h2>4. Who We Share It With</h2>
    <p>
      We do not sell your data. Information is shared only where necessary to operate the
      platform — for example, with our email delivery provider to send account notifications — and
      is never shared with unrelated third parties without your consent.
    </p>

    <h2>5. Cookies & Local Storage</h2>
    <p>
      We use your browser's local storage to keep you signed in between visits. We do not use
      third-party advertising or tracking cookies.
    </p>

    <h2>6. Your Rights</h2>
    <p>
      You may request access to, correction of, or deletion of your personal data at any time by
      contacting us at <a href="mailto:support@jtparlour.com">support@jtparlour.com</a>. Some
      operational records (such as payroll history) may need to be retained for a reasonable
      period for accounting and legal purposes even after a deletion request.
    </p>

    <h2>7. Children's Privacy</h2>
    <p>JT Parlour is intended for business use by salon owners, staff, and customers of legal working age, and is not directed at children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>
      We may update this policy from time to time. Material changes will be reflected by updating
      the "Last updated" date above.
    </p>

    <h2>9. Contact Us</h2>
    <p>
      Questions about this policy can be sent to <a href="mailto:support@jtparlour.com">support@jtparlour.com</a>.
    </p>
  </LegalPageLayout>
);
