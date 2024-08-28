import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import initTranslations from "../i18n";
import TranslationsProvider from "@/contexts/TranslationsProvider";

export const metadata = {
  title: "BuzzNfinds",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      url: "/favicon.ico",
    },
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, ["common"]);
  return (
    <TranslationsProvider
      namespaces={["common"]}
      locale={locale}
      resources={resources}
    >
      <html lang={locale}>
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4175702648008089"
            crossOrigin="anonymous"
          ></script>
        </head>
        <GoogleTagManager gtmId="GTM-KNB7NWC4" />
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KNB7NWC4"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          <Navbar locale={locale} />
          {children}
          <Footer locale={locale} />
        </body>
      </html>
    </TranslationsProvider>
  );
}
