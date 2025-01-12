import { render } from '@testing-library/react';
import Footer from '@/components/layout/Footer.tsx';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('renders the header with the correct text', () => {
    const { getByText } = render(<Footer />);
    const logoElement = getByText(/All rights reserved/i);
    expect(logoElement).toBeInTheDocument();
  });
});
