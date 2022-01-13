import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IntercomProvider } from "react-use-intercom";

const INTERCOM_APP_ID = "jcabc7e3";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntercomProvider appId={INTERCOM_APP_ID}>
      <Component {...pageProps} />
    </IntercomProvider>
  );
}

export default MyApp;
