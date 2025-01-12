import styles from '@/components/article/article.module.css';

/**
 * Props for the ArticleTitle component.
 */
interface ArticleTitleProps {
  /** The title of the article. */
  title: string;
}

/**
 * ArticleTitle component to display the title of an article.
 *
 * @param {ArticleTitleProps} props - The props for the ArticleTitle component.
 */
export default function ArticleTitle({ title }: ArticleTitleProps) {
  return <h2 className={styles['news-card-title ']}>{title}</h2>;
}
