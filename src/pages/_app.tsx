import { Roboto } from '@next/font/google';
import '../styles/globals.css'; // Archivo de estilos globales (si lo tenés)

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular y bold
  variable: '--font-roboto',
});

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}
