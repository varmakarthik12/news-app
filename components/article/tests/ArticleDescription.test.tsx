import { render } from '@testing-library/react';
import ArticleDescription from '@/components/article/ArticleDescription.tsx';
import '@testing-library/jest-dom';

describe('ArticleDescription', () => {
  it('renders the description correctly', () => {
    const descriptionText = 'This is a test description for the article.';
    const { getByText } = render(
      <ArticleDescription description={descriptionText} />,
    );
    const descriptionElement = getByText(descriptionText);
    expect(descriptionElement).toBeInTheDocument();
  });
});
