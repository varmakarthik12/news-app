import { render } from '@testing-library/react';
import Article from '@/components/article/Article.tsx';
import '@testing-library/jest-dom';

describe('Article', () => {
  const articleProps = {
    title: 'Test Article Title',
    description: 'This is a test description for the article.',
    urlToImage: 'https://via.placeholder.com/300',
    url: 'https://example.com',
  };

  it('renders the article title correctly', () => {
    const { getByText } = render(
      <Article
        title={articleProps.title}
        description={articleProps.description}
        url={articleProps.url}
        urlToImage={articleProps.urlToImage}
      />,
    );
    const titleElement = getByText(articleProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the article description correctly', () => {
    const { getByText } = render(
      <Article
        title={articleProps.title}
        description={articleProps.description}
        url={articleProps.url}
        urlToImage={articleProps.urlToImage}
      />,
    );
    const descriptionElement = getByText(articleProps.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the article image correctly', () => {
    const { getByAltText } = render(
      <Article
        title={articleProps.title}
        description={articleProps.description}
        url={articleProps.url}
        urlToImage={articleProps.urlToImage}
      />,
    );
    const imageElement = getByAltText(articleProps.title);
    expect(imageElement).toBeInTheDocument();
  });
});
