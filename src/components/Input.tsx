import { Input as AntdInput, type InputProps as AntdInputProps } from 'antd';
import styled from 'styled-components';

export interface InputProps extends AntdInputProps {
  $fullWidth?: boolean;
}

const StyledInput = styled(AntdInput)<InputProps>`
  && {
    border-radius: 6px;
    padding: 8px 12px;
    transition: all 0.2s;
    ${(props) => props.$fullWidth && 'width: 100%;'}

    &:hover, &:focus {
      border-color: #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;

export const Input = (props: InputProps) => <StyledInput {...props} />;
