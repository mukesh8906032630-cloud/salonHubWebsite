import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  background: #090d16;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoIconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
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

const LogoText = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 860px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #cbd5e1;
  transition: color 0.15s ease;

  &:hover {
    color: #f59e0b;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 640px) {
    display: none;
  }
`;

const GoldButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  padding: 11px 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  color: #ffffff;
  border: 1px solid #f59e0b;
  box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);
  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    transform: translateY(-1px);
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;

  @media (max-width: 860px) {
    display: inline-flex;
  }
`;

const MobilePanel = styled.div<{ $open: boolean }>`
  display: ${(props) => (props.$open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 4px;
  padding: 12px 24px 20px;
  background: #090d16;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (min-width: 861px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  padding: 12px 4px;
  font-size: 15px;
  font-weight: 600;
  color: #e2e8f0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
`;

const MobileGoldButton = styled(GoldButton)`
  justify-content: center;
`;

// Shared across every page of this site — same logo chip treatment and dark navy (#090d16) as
// the product's own sidebar, so this marketing site reads as the same brand, not a bolt-on.
export const PublicHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <Bar>
      <Inner>
        <LogoLink to="/" onClick={closeMobile}>
          <LogoIconWrapper>
            <LogoImg src="/jt_parlour_logo.png" alt="JT PARLOUR" />
          </LogoIconWrapper>
          <LogoText>JT PARLOUR</LogoText>
        </LogoLink>

        <Nav>
          <NavLink href="/#features">Features</NavLink>
          <NavLink href="/#how-it-works">How It Works</NavLink>
          <NavLink href="/#pricing">Pricing</NavLink>
          <NavLink href="/#faq">FAQ</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </Nav>

        <Actions>
          <GoldButton to="/#pricing">Onboard Your Salon</GoldButton>
        </Actions>

        <MobileToggle onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </MobileToggle>
      </Inner>

      <MobilePanel $open={mobileOpen}>
        <MobileNavLink href="/#features" onClick={closeMobile}>Features</MobileNavLink>
        <MobileNavLink href="/#how-it-works" onClick={closeMobile}>How It Works</MobileNavLink>
        <MobileNavLink href="/#pricing" onClick={closeMobile}>Pricing</MobileNavLink>
        <MobileNavLink href="/#faq" onClick={closeMobile}>FAQ</MobileNavLink>
        <MobileNavLink href="/#contact" onClick={closeMobile}>Contact</MobileNavLink>
        <MobileActions>
          <MobileGoldButton to="/#pricing" onClick={closeMobile}>Onboard Your Salon</MobileGoldButton>
        </MobileActions>
      </MobilePanel>
    </Bar>
  );
};
