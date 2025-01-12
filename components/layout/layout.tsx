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

/**
 * Props for the RootLayout component.
 */
interface RootLayoutProps {
  /** The child components to be rendered within the layout. */
  children: React.ReactNode;
}

/**
 * RootLayout component to provide the main layout structure.
 *
 * @param {RootLayoutProps} props - The props for the RootLayout component.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${playfairDisplay.variable} ${merriweather.variable}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
