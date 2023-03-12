import type { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { type AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { Fragment, useEffect, type FC, type ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { api } from "~/utils/api";
import * as ga from "~/utils/ga";

import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  Layout: FC<{ children: ReactNode }>;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: any;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange =
      process.env.NODE_ENV === "production"
        ? (url: string) => {
            ga.pageview(url);
          }
        : (url: string) => {};
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const Layout = Component.Layout || Fragment;

  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <meta name="description" content="Farmaceutica Younger" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icon/favicon-16x16.png"
          />
          <link rel="manifest" href="/icon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ec489a" />
          <meta
            name="msapplication-TileImage"
            content="/icon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ec489a" />
        </Head>
        <GAHeader />

        <Layout>
          <Component {...pageProps} />
        </Layout>
        <IubendaCookieBanner />
      </SessionProvider>
      <ToastContainer />
    </>
  );
}

export default api.withTRPC(MyApp);

const IubendaCookieBanner = () => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      <Script id="iubenda" strategy="afterInteractive">{`
       var _iub = _iub || [];
       _iub.csConfiguration = {"lang":"it","siteId":1353353,"whitelabel":false,"cookiePolicyId":86855038, "banner":{ "textColor":"white","backgroundColor":"black" }};
      `}</Script>
      <Script
        strategy="afterInteractive"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
      />
    </>
  );
};

const GAHeader = () => {
  const router = useRouter();
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  if (router?.pathname?.startsWith("/_i/")) {
    return null;
  }
  const gt = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  if (!gt) {
    return null;
  }
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gt}`}
      />
      <Script id="analytics" strategy="afterInteractive">{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gt}', {
      page_path: window.location.pathname,
    });
  `}</Script>
    </>
  );
};
