import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const List = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
`;

const Question = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: transparent;
  border: none;
  padding: 16px 20px;
  font-size: 14.5px;
  font-weight: 700;
  color: #0f172a;
  text-align: left;
  cursor: pointer;
`;

const Chevron = styled.span<{ $open: boolean }>`
  flex-shrink: 0;
  color: #64748b;
  transition: transform 0.2s ease;
  transform: rotate(${(props) => (props.$open ? '180deg' : '0deg')});
`;

const Answer = styled.div<{ $open: boolean }>`
  max-height: ${(props) => (props.$open ? '400px' : '0')};
  overflow: hidden;
  transition: max-height 0.25s ease;

  p {
    padding: 0 20px 18px;
    font-size: 13.5px;
    color: #64748b;
    line-height: 1.6;
  }
`;

interface FaqProps {
  items: { q: string; a: string }[];
}

export const Faq = ({ items }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <List>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <Item key={item.q}>
            <Question onClick={() => setOpenIndex(open ? null : i)}>
              {item.q}
              <Chevron $open={open}><DownOutlined /></Chevron>
            </Question>
            <Answer $open={open}>
              <p>{item.a}</p>
            </Answer>
          </Item>
        );
      })}
    </List>
  );
};
