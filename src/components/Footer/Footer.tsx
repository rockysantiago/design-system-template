import React from 'react';
import styled from 'styled-components';
import { gapPolyFill } from '../..';

export interface FooterProps {
  illustrativePurpose: string;
  isIllustrativePurposeVisible: boolean;
  disclaimerTitle: string;
  isDisclaimerTitleVisible: boolean;
  onClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  illustrativePurpose,
  isIllustrativePurposeVisible = true,
  disclaimerTitle,
  isDisclaimerTitleVisible = true,
  onClick,
}) => (
  <Container className="text-light">
    {isIllustrativePurposeVisible && (
      <IllustrativePurpose
        className="text-light"
        $gap={'1.25em'}
      >{`*${illustrativePurpose}`}</IllustrativePurpose>
    )}
    {isDisclaimerTitleVisible && (
      <DisclaimerTitle className="text-light" onClick={onClick}>
        {disclaimerTitle}
      </DisclaimerTitle>
    )}
    <div style={{ color: 'white' }}>This is a chromatic test</div>
  </Container>
);

const Container = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color.base};
  display: flex;
  gap: 1.25em;
  word-break: break-all;
  padding: 0.75em 1.25em;

  .text-light {
    color: ${({ theme }) => theme.color.light};
  }
`;

const IllustrativePurpose = styled.div`
  ${gapPolyFill}
  flex: 2;
`;

const DisclaimerTitle = styled.button`
  background: none;
  border: none;
  flex: 1;
  text-align: right;
  text-decoration: underline;
`;
