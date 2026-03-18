'use client';

import { ReactNode } from 'react';
import { theme } from '@lib/theme';
import { Theme, ThemeProvider as ThemeProviderDS } from '@metyis-porto/douro-ui-react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProviderDS theme={theme as unknown as Theme}>
      {children}
    </ThemeProviderDS>
  );
}
