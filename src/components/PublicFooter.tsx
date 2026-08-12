import { Link } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrap = styled.footer`
  background: #090d16;
  color: #94a3b8;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 24px 32px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #04060b;
  flex-shrink: 0;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BrandName = styled.span`
  font-size: 17px;
  font-weight: 800;
  color: #ffffff;
`;

const BrandBlurb = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: #94a3b8;
  max-width: 280px;
`;

const ColTitle = styled.h4`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #f59e0b;
  margin: 0 0 16px;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled(Link)`
  font-size: 13px;
  color: #cbd5e1;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`;

const FooterAnchor = styled.a`
  font-size: 13px;
  color: #cbd5e1;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #cbd5e1;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 40px 0 20px;
`;

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 12px;
  color: #64748b;
`;

export const PublicFooter = () => {
  return (
    <Wrap>
      <Inner>
        <Grid>
          <BrandCol>
            <BrandRow>
              <LogoIconWrapper>
                <LogoImg src="/jt_parlour_logo.png" alt="JT PARLOUR" />
              </LogoIconWrapper>
              <BrandName>JT PARLOUR</BrandName>
            </BrandRow>
            <BrandBlurb>
              Smart salon management & booking portal — staff, bookings, payroll, and multi-branch
              operations, all in one place.
            </BrandBlurb>
          </BrandCol>

          <div>
            <ColTitle>Quick Links</ColTitle>
            <LinkList>
              <FooterLink to="/">Home</FooterLink>
              <FooterAnchor href="/#features">Features</FooterAnchor>
              <FooterAnchor href="/#how-it-works">How It Works</FooterAnchor>
              <FooterAnchor href="/#pricing">Pricing</FooterAnchor>
              <FooterAnchor href="/#faq">FAQ</FooterAnchor>
              <FooterAnchor href="/#contact">Contact</FooterAnchor>
            </LinkList>
          </div>

          <div>
            <ColTitle>Legal</ColTitle>
            <LinkList>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms-and-conditions">Terms & Conditions</FooterLink>
            </LinkList>
          </div>

          <div>
            <ColTitle>Contact</ColTitle>
            <LinkList>
              <ContactRow>
                <MailOutlined />
                <FooterAnchor href="mailto:support@jtparlour.com">support@jtparlour.com</FooterAnchor>
              </ContactRow>
              <FooterAnchor href="/#pricing">Onboard your salon</FooterAnchor>
            </LinkList>
          </div>
        </Grid>

        <Divider />

        <BottomBar>
          <span>JT PARLOUR Enterprise Platform ©{new Date().getFullYear()} • Smart Salon Management</span>
          <span>Built for salons that run more than one chair.</span>
        </BottomBar>
      </Inner>
    </Wrap>
  );
};
