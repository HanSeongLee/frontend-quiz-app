import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Rubik } from '@next/font/google';
import { ThemeContextWrapper } from 'lib/ThemeContext';

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
    <ThemeContextWrapper>
      <Component {...pageProps} />
    </ThemeContextWrapper>
  </>;
}

export default MyApp
