import {
  Merriweather,
  Playfair_Display as PlayfairDisplay,
} from 'next/font/google';
import Header from '@/components/layout/Header.tsx';
import Footer from '@/components/layout/Footer.tsx';

const playfairDisplay = PlayfairDisplay({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${playfairDisplay.variable} ${merriweather.variable}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
