import styled from 'styled-components';

// Same frosted-glass-card-over-photo treatment as the product's own public pages
// (salonHubFrontend/src/pages/Public/AuthLayout.tsx) — ported verbatim for visual consistency.
export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.7)),
    url('/jt_parlour_bg.png') no-repeat center center / cover;
  box-sizing: border-box;
`;

export const AuthCard = styled.div<{ $maxWidth?: number; $scrollable?: boolean }>`
  width: 100%;
  max-width: ${(props) => props.$maxWidth ?? 420}px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  margin: 24px 0;

  ${(props) =>
    props.$scrollable
      ? `
    display: flex;
    flex-direction: column;
    max-height: 88vh;
    overflow: hidden;
  `
      : `
    padding: 40px 32px;
  `}
`;

export const AuthCardHeader = styled.div`
  flex-shrink: 0;
  padding: 32px 32px 0;
`;

export const AuthCardBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 16px 32px;
`;

export const AuthCardFooter = styled.div`
  flex-shrink: 0;
  padding: 16px 32px 28px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
`;

export const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: 8px;
  font-size: 28px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.5px;
`;

export const AuthSubtitle = styled.p`
  text-align: center;
  margin-bottom: 28px;
  color: #64748b;
  font-size: 14px;
`;
