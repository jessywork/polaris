'use client'

import { css } from '@emotion/react';
import { GlobalStyles, useTheme } from '@metyis-porto/douro-ui-react';

const Global = () => {
  const theme = useTheme();

  const defaultGlobalStyles = css`
    main {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    body,
    html {
      color: ${theme.colors.brand.primary};
      font-size: ${theme.fontSize};
      font-weight: ${theme.fontWeight.REGULAR};
      font-family: ${theme.fontFamily.text};
      height: 100%;
      background-color: ${theme.colors.brand.white};
      scroll-behavior: smooth;
    }

    p {
      padding: ${theme.spacing.spacing16} 0;
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: inherit;
      }
    }

    ::-webkit-scrollbar {
      width: 0.313rem;
      height: 0.313rem;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.neutral.silver.shade70};
      border-radius: 0.625rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.neutral.silver.shade50};
    }
  `;

  return <GlobalStyles styles={defaultGlobalStyles} />;
};

export default Global;
