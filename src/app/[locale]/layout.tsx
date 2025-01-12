import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Ensure params is treated as a Promise
}) {
  // Await the params to resolve the promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Validate the locale
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  // Fetch messages for the current locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
