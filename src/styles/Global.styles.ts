'use client';

import styled from '@emotion/styled';

import Button from '@/components/ui/button';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing64};
  padding: ${({ theme }) => theme.spacing.spacing40};
  border-radius: ${({ theme }) => theme.spacing.spacing12};
  background-image: url("/background-metyis.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 40%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing32};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing16};
`;

export const ImageContainer = styled.div`
  align-self: center;
`;

export const ButtonStyled = styled(Button)`
  width: fit-content;
`;
