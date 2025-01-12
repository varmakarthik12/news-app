import styles from '@/components/article/article.module.css';

/**
 * Props for the ArticleDescription component.
 */
interface ArticleDescriptionProps {
  /**
   * A brief description of the article.
   */
  description: string;
}

/**
 * Component to display the description of a news article.
 * @param props - The properties of the article description.
 * @returns A React component that displays the article description.
 */
export default function ArticleDescription({
  description,
}: ArticleDescriptionProps) {
  return <p className={styles['news-card-description']}>{description}</p>;
}
