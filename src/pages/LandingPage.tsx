import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  TeamOutlined,
  WalletOutlined,
  HomeOutlined,
  ScheduleOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  ShopOutlined,
  CalendarOutlined,
  FileProtectOutlined,
  MailOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import styled from 'styled-components';
import { PublicHeader } from '../components/PublicHeader';
import { PublicFooter } from '../components/PublicFooter';
import { Faq } from '../components/Faq';

const Page = styled.div`
  background: #f8fafc;
`;

/* ---------- Hero ---------- */
const Hero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 24px 120px;
  background: linear-gradient(rgba(9, 13, 22, 0.82), rgba(9, 13, 22, 0.88)), url('/jt_parlour_bg.png') no-repeat center center / cover;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(217, 119, 6, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.35);
  color: #fbbf24;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1px;
  line-height: 1.15;
  max-width: 780px;
  margin: 0 0 20px;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 17px;
  color: #cbd5e1;
  max-width: 560px;
  line-height: 1.6;
  margin: 0 0 36px;
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 10px;
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  color: #ffffff;
  border: 1px solid #f59e0b;
  box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  }
`;

const HeroTrustRow = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 52px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  width: 100%;
  max-width: 720px;
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;

  .anticon {
    color: #22c55e;
  }
`;

/* ---------- Shared section chrome ---------- */
const Section = styled.section<{ $tint?: boolean }>`
  padding: 88px 24px;
  background: ${(props) => (props.$tint ? '#ffffff' : 'transparent')};
`;

const SectionInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 620px;
  margin: 0 auto 56px;
`;

const SectionKicker = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d97706;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.5px;
  margin: 0 0 12px;

  @media (max-width: 640px) {
    font-size: 26px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
`;

/* ---------- Features ---------- */
const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 28px 24px;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
    border-color: #fcd34d;
  }
`;

const FeatureIcon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 16px;
`;

const FeatureTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px;
`;

const FeatureDesc = styled.p`
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
`;

const FEATURES = [
  { icon: <ShopOutlined />, title: 'Multi-Salon Management', desc: 'Run every branch from one account and switch between them instantly with the salon switcher.' },
  { icon: <TeamOutlined />, title: 'Staff Onboarding & Roster', desc: 'Onboard staff with role, skill level, shift hours, and the exact pay structure that fits them.' },
  { icon: <WalletOutlined />, title: 'Payroll & Commission', desc: 'Commission (flat or per-service), daily rate, or monthly salary — payroll cycles and settlements tracked automatically.' },
  { icon: <ScheduleOutlined />, title: 'Booking Tracking', desc: 'See every appointment across your salon in real time, from confirmed to completed.' },
  { icon: <CalendarOutlined />, title: 'Attendance & Leave', desc: 'Mark attendance, and approve or decline leave and resignation requests from one queue.' },
  { icon: <HomeOutlined />, title: 'Home Service Settings', desc: 'Turn at-home visits on or off per salon, and set your own travel radius and surcharge.' },
  { icon: <SafetyCertificateOutlined />, title: 'Role-Based Access Control', desc: 'The platform team can grant or withhold specific tools per salon — owners only see what they need.' },
  { icon: <AuditOutlined />, title: 'Audit Logging', desc: 'Sensitive actions are recorded with who did what and when, for full accountability.' },
  { icon: <FileProtectOutlined />, title: 'KYC-Verified Onboarding', desc: 'Every salon owner is verified against government documents before their account goes live.' },
];

/* ---------- How it works ---------- */
const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  position: relative;
  padding: 32px 24px 24px;
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
  color: #fbbf24;
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 18px;
`;

const StepTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px;
`;

const StepDesc = styled.p`
  font-size: 13.5px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
`;

const STEPS = [
  {
    title: 'Submit your details',
    desc: 'Tell us about your salon and yourself, and upload your Aadhaar Card, PAN Card, Shop & Establishment Registration, and GST/Udyam Registration.',
  },
  {
    title: 'Get verified',
    desc: 'A platform administrator reviews your submission personally — you’ll be notified by email the moment a decision is made.',
  },
  {
    title: 'Start managing',
    desc: 'Once approved, your login is emailed to you and your salon is live — staff, bookings, and payroll, ready to go.',
  },
];

/* ---------- FAQ data ---------- */
const FAQ_ITEMS = [
  { q: 'What documents do I need to onboard my salon?', a: 'Four government documents: Aadhaar Card, PAN Card, Shop & Establishment Registration, and GST or Udyam/MSME Registration. All four are required to register as a new owner.' },
  { q: 'How long does approval take?', a: 'Every submission is reviewed personally by a platform administrator. You’ll receive an email the moment your salon is approved or if anything needs correcting.' },
  { q: 'Can I manage more than one salon branch?', a: 'Yes. Once your first salon is approved, you can add additional branches from your dashboard and switch between them at any time using the salon switcher.' },
  { q: 'How is staff pay calculated?', a: 'You choose per staff member: commission (a flat rate or a custom rate per service), a daily rate, or a fixed monthly salary. Payroll cycles, adjustments, and settlements are all tracked for you automatically.' },
  { q: 'Is my data secure?', a: 'Access is role-based — staff, owners, and platform administrators each see only what’s relevant to them — and sensitive actions are recorded in an audit log.' },
  { q: 'I forgot my password — what do I do?', a: 'Use the "Forgot password" link on the login page. A reset link is sent to your registered email.' },
];

/* ---------- Contact ---------- */
const ContactCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 20px;
  padding: 44px 40px;
  color: #ffffff;

  @media (max-width: 640px) {
    padding: 32px 24px;
  }
`;

const ContactText = styled.div`
  max-width: 480px;
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 8px;
`;

const ContactDesc = styled.p`
  font-size: 14px;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0;
`;

const ContactEmail = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #fbbf24;
  margin-top: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LandingPage = () => {
  const location = useLocation();

  // React Router doesn't auto-scroll to a hash on navigation.
  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash]);

  return (
    <Page>
      <PublicHeader />

      <Hero>
        <Eyebrow>Multi-Branch Salon Management</Eyebrow>
        <HeroTitle>Run every chair, every branch, from one dashboard.</HeroTitle>
        <HeroSubtitle>
          JT Parlour handles staff onboarding, attendance, payroll, bookings, and home service —
          so you can spend less time on spreadsheets and more time on your clients.
        </HeroSubtitle>
        <HeroActions>
          <PrimaryBtn to="/signup">
            Onboard Your Salon <ArrowRightOutlined />
          </PrimaryBtn>
        </HeroActions>
        <HeroTrustRow>
          <TrustItem><CheckCircleFilled /> KYC-verified onboarding</TrustItem>
          <TrustItem><CheckCircleFilled /> Role-based access control</TrustItem>
          <TrustItem><CheckCircleFilled /> Built for multi-branch salons</TrustItem>
        </HeroTrustRow>
      </Hero>

      <Section id="features" $tint>
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Features</SectionKicker>
            <SectionTitle>Everything a salon owner actually needs</SectionTitle>
            <SectionSubtitle>No bloated feature list — just the tools that keep a busy salon running smoothly.</SectionSubtitle>
          </SectionHeader>
          <FeatureGrid>
            {FEATURES.map((f) => (
              <FeatureCard key={f.title}>
                <FeatureIcon>{f.icon}</FeatureIcon>
                <FeatureTitle>{f.title}</FeatureTitle>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </SectionInner>
      </Section>

      <Section id="how-it-works">
        <SectionInner>
          <SectionHeader>
            <SectionKicker>Getting Started</SectionKicker>
            <SectionTitle>How onboarding works</SectionTitle>
            <SectionSubtitle>Three steps between you and a fully set-up salon portal.</SectionSubtitle>
          </SectionHeader>
          <Steps>
            {STEPS.map((s, i) => (
              <StepCard key={s.title}>
                <StepNumber>{i + 1}</StepNumber>
                <StepTitle>{s.title}</StepTitle>
                <StepDesc>{s.desc}</StepDesc>
              </StepCard>
            ))}
          </Steps>
        </SectionInner>
      </Section>

      <Section id="faq" $tint>
        <SectionInner style={{ maxWidth: 760 }}>
          <SectionHeader>
            <SectionKicker>FAQ</SectionKicker>
            <SectionTitle>Frequently asked questions</SectionTitle>
          </SectionHeader>
          <Faq items={FAQ_ITEMS} />
        </SectionInner>
      </Section>

      <Section id="contact">
        <SectionInner>
          <ContactCard>
            <ContactText>
              <ContactTitle>Still have a question?</ContactTitle>
              <ContactDesc>
                Reach out and a member of the platform team will get back to you — typically within
                one business day.
              </ContactDesc>
              <ContactEmail href="mailto:support@jtparlour.com">
                <MailOutlined /> support@jtparlour.com
              </ContactEmail>
            </ContactText>
            <PrimaryBtn to="/signup">Onboard Your Salon</PrimaryBtn>
          </ContactCard>
        </SectionInner>
      </Section>

      <PublicFooter />
    </Page>
  );
};
