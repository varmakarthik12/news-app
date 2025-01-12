import { render } from '@testing-library/react';
import ArticleTitle from '@/components/article/ArticleTitle.tsx';
import '@testing-library/jest-dom';

describe('ArticleTitle', () => {
  it('renders the title with the correct text', () => {
    const titleInfo = 'Sample Title';
    const { getByText } = render(<ArticleTitle title={titleInfo} />);
    const titleElement = getByText(titleInfo);
    expect(titleElement).toBeInTheDocument();
  });
});
