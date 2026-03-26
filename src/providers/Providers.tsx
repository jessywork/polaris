import { ReactNode } from "react";
import { AbstractIntlMessages } from "next-intl";

import { IntlProvider } from "./IntlProvider";
import { QueryProvider } from "./QueryProvider";
import { ThemeProvider } from "./ThemeProvider";

export function Providers({ children, messages, locale }: { children: ReactNode, messages: AbstractIntlMessages; locale?: string; }) {
  return (
    <ThemeProvider>
      <IntlProvider messages={messages} locale={locale}>
        <QueryProvider>{children}</QueryProvider>
      </IntlProvider>
    </ThemeProvider>
  )
}
