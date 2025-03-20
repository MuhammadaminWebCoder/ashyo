import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import {routing} from '@/i18n/routing'
import Header from "@/modules/Header";

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;

}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales,locale)) {
    notFound()
  }
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo.svg" />
        <title>ashyo</title>
      </head>
      <body>
        <NextIntlClientProvider>
       <Header/>

        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
