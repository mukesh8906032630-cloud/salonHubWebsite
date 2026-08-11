import type { ReactNode } from 'react';
import styled from 'styled-components';
import { PublicHeader } from './PublicHeader';
import { PublicFooter } from './PublicFooter';

const Page = styled.div`
  background: #f8fafc;
`;

const HeroBlock = styled.div`
  background: #090d16;
  padding: 56px 24px 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin: 0 0 8px;
`;

const Updated = styled.p`
  font-size: 13px;
  color: #94a3b8;
  margin: 0;
`;

const Body = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 48px 24px 88px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
    margin: 36px 0 12px;

    &:first-child {
      margin-top: 0;
    }
  }

  p, li {
    font-size: 14px;
    line-height: 1.75;
    color: #475569;
  }

  ul {
    list-style: disc;
    margin: 8px 0 0;
    padding-left: 20px;
  }

  li + li {
    margin-top: 6px;
  }

  a {
    color: #b45309;
    font-weight: 600;
    text-decoration: underline;
  }
`;

const Notice = styled.div`
  max-width: 780px;
  margin: -24px auto 0;
  padding: 0 24px;
  position: relative;

  div {
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 10px;
    padding: 14px 16px;
    font-size: 12.5px;
    color: #92400e;
    line-height: 1.6;
  }
`;

interface LegalPageLayoutProps {
  title: string;
  updatedLabel: string;
  children: ReactNode;
}

// Shared chrome for Privacy Policy and Terms & Conditions — same header/footer as the landing
// page so the whole site reads as one product, plus a placeholder-content notice since neither
// page's boilerplate has been reviewed by counsel yet.
export const LegalPageLayout = ({ title, updatedLabel, children }: LegalPageLayoutProps) => (
  <Page>
    <PublicHeader />
    <HeroBlock>
      <Title>{title}</Title>
      <Updated>{updatedLabel}</Updated>
    </HeroBlock>
    <Notice>
      <div>
        This is standard starter content, not legal advice — have it reviewed by counsel and filled
        in with your business's actual details before relying on it.
      </div>
    </Notice>
    <Body>{children}</Body>
    <PublicFooter />
  </Page>
);
