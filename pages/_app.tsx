import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SizeObserver } from "../utils";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <Component {...pageProps} />
    </SizeObserver>
  );
}

export default MyApp;
