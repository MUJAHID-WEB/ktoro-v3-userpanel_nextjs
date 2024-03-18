import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "@/styles/all.min.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useEffect } from "react";

import { AppPropsWithLayout } from "@/utils/type";
import { RootProvider } from "@/context/rootContext";

const dinNextLtArabicLight = localFont({
  src: "../utils/fonts/din-next-lt-arabic-light.ttf",
  variable: "--din-next-lt-arabic-light",
  weight: "300",
});
const dinNextLtArabicRegular = localFont({
  src: "../utils/fonts/din-next-lt-arabic-regular.ttf",
  variable: "--din-next-lt-arabic",
  weight: "400",
});
const dinNextLtArabicMedium = localFont({
  src: "../utils/fonts/din-next-lt-arabic-medium.ttf",
  variable: "--din-next-lt-arabic-medium",
  weight: "500",
});
const dinNextLtArabicBold = localFont({
  src: "../utils/fonts/din-next-lt-arabic-bold.ttf",
  variable: "--din-next-lt-arabic-bold",
  weight: "700",
});
export default function App({ Component, pageProps }: AppProps) {
  // const getLayout = Component.getLayout ?? ((page) => page);
  // @ts-ignore
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
  useEffect(() => {
    document.body.classList.add(dinNextLtArabicLight.variable);
    document.body.classList.add(dinNextLtArabicRegular.variable);
    document.body.classList.add(dinNextLtArabicMedium.variable);
    document.body.classList.add(dinNextLtArabicBold.variable);
  }, []);
  return (
    <RootProvider>
      {getLayout(<Component {...pageProps} />)}
    </RootProvider>
  );
}
