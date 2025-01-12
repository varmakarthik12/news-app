import RootLayout from '@/components/layout/layout.tsx';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default App;
