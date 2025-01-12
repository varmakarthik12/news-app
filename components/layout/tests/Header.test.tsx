import { render } from '@testing-library/react';
import Header from '@/components/layout/Header.tsx';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('renders the header with the correct text', () => {
    const { getByText } = render(<Header />);
    const logoElement = getByText(/News APP/i);
    expect(logoElement).toBeInTheDocument();
  });
});
