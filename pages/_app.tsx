import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalProvider } from "../providers/global";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Toaster />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
