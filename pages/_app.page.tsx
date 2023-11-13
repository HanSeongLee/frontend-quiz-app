import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Rubik } from '@next/font/google';

const rubikFont = Rubik({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
      :root {
        --rubik-font: ${rubikFont.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>;
}

export default MyApp
