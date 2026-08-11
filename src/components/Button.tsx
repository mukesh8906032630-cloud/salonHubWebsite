import { Button as AntdButton, type ButtonProps as AntdButtonProps } from 'antd';
import styled, { css } from 'styled-components';

export interface ButtonProps extends AntdButtonProps {
  $variant?: 'primary' | 'secondary' | 'gold';
  $fullWidth?: boolean;
}

const variantStyles = {
  primary: css`
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: #ffffff;
    border: 1px solid #334155;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.25);

    &:hover, &:focus {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%) !important;
      color: #ffffff !important;
      border-color: #475569 !important;
      transform: translateY(-1px);
    }
  `,
  gold: css`
    background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
    color: #ffffff;
    border: 1px solid #f59e0b;
    box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);

    &:hover, &:focus {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%) !important;
      color: #ffffff !important;
      border-color: #fbbf24 !important;
      transform: translateY(-1px);
    }
  `,
  secondary: css`
    background-color: #f1f5f9;
    color: #334155;
    border: 1px solid #e2e8f0;

    &:hover, &:focus {
      background-color: #e2e8f0 !important;
      color: #0f172a !important;
      border-color: #cbd5e1 !important;
      transform: translateY(-1px);
    }
  `,
};

const StyledButton = styled(AntdButton)<ButtonProps>`
  && {
    font-weight: 600;
    letter-spacing: -0.2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
    cursor: pointer;

    ${(props) => variantStyles[props.$variant || 'primary']}

    &:active {
      transform: translateY(0);
    }
  }
`;

export const Button = ({ $variant = 'primary', $fullWidth = false, children, ...props }: ButtonProps) => (
  <StyledButton $variant={$variant} $fullWidth={$fullWidth} {...props}>
    {children}
  </StyledButton>
);
