import Article, { ArticleProps } from '@/components/article/Article.tsx';
import styles from '@/pages/page.module.css';
import { getTopHeadlines } from '@/services/news/news.ts';
import { GetServerSideProps } from 'next';

/**
 * Props for the News component.
 *
 * @property {ArticleProps[]} articles - Array of article objects.
 */
interface NewsProps {
  /** Array of article objects. */
  articles: ArticleProps[];
}

/**
 * News component to display a list of articles.
 *
 * @param {NewsProps} props - The props for the News component.
 */
export default function News({ articles }: NewsProps) {
  return (
    <div className={styles['news-container']}>
      {articles.map(({
        title, description, urlToImage, url,
      }) => (
        <Article
          key={url}
          title={title}
          description={description}
          urlToImage={urlToImage}
          url={url}
        />
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = {
    country: 'us',
    pageSize: '100',
  };
  const topHeadLines = await getTopHeadlines(params);

  // Set caching headers to cache at CDN
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=360, stale-while-revalidate=360',
  );

  return {
    props: {
      articles: topHeadLines.articles.filter(
        ({
          title, description, urlToImage, url,
        }) => title && description && urlToImage && url,
      ),
    },
  };
};
