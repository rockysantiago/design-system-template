import React from 'react';
import { Button as AntDButton, ButtonProps as AntDButtonProps } from 'antd';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export type ButtonVariantType = 'primary';

export interface ButtonProps extends AntDButtonProps {
  disabled: boolean;
  variant?: ButtonVariantType;
  $textColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  variant,
  $textColor,
  ...props
}) => (
  <StyledAntDButton
    disabled={disabled}
    variant={variant}
    $textColor={$textColor}
    {...props}
  />
);

const StyledAntDButton = styled(AntDButton)<ButtonProps>`
  border-radius: 5px;
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.typography.size.m};
  height: auto;
  padding: 0.5rem 2.6875rem;
  white-space: break-spaces;

  ${({ variant }) => getButtonVariantStyles(variant)}
`;

const getButtonVariantStyles = (variant?: ButtonVariantType) => {
  switch (variant) {
    case 'primary':
      return css`
        ${buttonPrimaryStyle}
      `;

    default:
      return css`
        ${buttonDefaultStyle}
      `;
  }
};

export const buttonDefaultStyle = css`
  :hover {
    border-color: ${({ theme }) => lighten(0.1, theme.color.action)};
    color: ${({ theme }) => lighten(0.1, theme.color.action)};
  }

  :focus {
    border-color: ${({ theme }) => theme.color.action};
    color: ${({ theme }) => theme.color.action};
  }

  :active {
    border-color: ${({ theme }) => darken(0.1, theme.color.action)};
    color: ${({ theme }) => darken(0.1, theme.color.action)};
  }
`;

export const buttonPrimaryStyle = css<{ $textColor?: string }>`
  ${buttonDefaultStyle}
  background-color: ${({ theme }) => theme.color.action};
  color: ${({ $textColor = '#ffffff' }) => $textColor};
  font-weight: 700;

  :hover {
    background-color: ${({ theme }) => lighten(0.1, theme.color.action)};
    color: ${({ $textColor = '#ffffff' }) => $textColor};
  }

  :focus {
    background-color: ${({ theme }) => theme.color.action};
    color: ${({ $textColor = '#ffffff' }) => $textColor};
  }

  :active {
    background-color: ${({ theme }) => darken(0.1, theme.color.action)};
    color: ${({ $textColor = '#ffffff' }) => $textColor};
  }
`;
