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
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales,locale)) {
    notFound()
  }
  return (
    <html lang={locale}>
      <head>
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
