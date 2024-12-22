import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

// Configurar Roboto desde `next/font/google`
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular y bold
  variable: '--font-roboto',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}
