import dayjs from 'dayjs';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const TermsAndConditions = () => (
  <LegalPageLayout title="Terms & Conditions" updatedLabel={`Last updated: ${dayjs().format('MMMM D, YYYY')}`}>
    <h2>1. Acceptance of Terms</h2>
    <p>
      By creating an account or using JT Parlour ("the Platform"), you agree to these Terms &
      Conditions. If you do not agree, please do not use the Platform.
    </p>

    <h2>2. Eligibility & Verification</h2>
    <p>
      To onboard a salon, you must submit accurate personal and business details along with valid
      government identification and business registration documents. We reserve the right to
      reject or request corrections to any submission that appears incomplete or inaccurate.
    </p>

    <h2>3. Your Account</h2>
    <ul>
      <li>You are responsible for keeping your login credentials confidential.</li>
      <li>You are responsible for the accuracy of the staff, service, booking, and payroll data you enter.</li>
      <li>Temporary passwords issued at onboarding should be changed after your first login.</li>
    </ul>

    <h2>4. Acceptable Use</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use the Platform for any unlawful purpose.</li>
      <li>Attempt to access data belonging to another salon or account you are not authorized to access.</li>
      <li>Interfere with or disrupt the Platform's normal operation.</li>
    </ul>

    <h2>5. Roles & Access</h2>
    <p>
      The Platform uses role-based access control. Platform administrators may grant or withhold
      specific tools for a given salon at their discretion, and may access account and salon data
      as needed to operate, verify, and support the Platform.
    </p>

    <h2>6. Fees</h2>
    <p>
      Any fees for using the Platform, if applicable, will be communicated to you separately before
      being charged. No fees are collected as part of the onboarding process described on this site.
    </p>

    <h2>7. Termination</h2>
    <p>
      We may suspend or terminate an account that violates these terms or is found to have
      submitted fraudulent verification documents. You may request closure of your own account at
      any time by contacting us.
    </p>

    <h2>8. Disclaimer & Limitation of Liability</h2>
    <p>
      The Platform is provided "as is." While we take reasonable care to keep it accurate and
      available, we do not guarantee uninterrupted or error-free operation, and to the fullest
      extent permitted by law, we are not liable for indirect or consequential losses arising from
      your use of the Platform.
    </p>

    <h2>9. Changes to These Terms</h2>
    <p>
      We may update these terms from time to time. Continued use of the Platform after a change
      takes effect constitutes acceptance of the revised terms.
    </p>

    <h2>10. Governing Law</h2>
    <p>
      These terms are governed by the laws of the jurisdiction in which the Platform operator is
      registered. <em>[Jurisdiction to be specified by the business operating this Platform.]</em>
    </p>

    <h2>11. Contact Us</h2>
    <p>
      Questions about these terms can be sent to <a href="mailto:support@jtparlour.com">support@jtparlour.com</a>.
    </p>
  </LegalPageLayout>
);
