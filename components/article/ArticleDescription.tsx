import styles from '@/components/article/article.module.css';

interface ArticleDescriptionProps {
  description: string;
}

export default function ArticleDescription({
  description,
}: ArticleDescriptionProps) {
  return <p className={styles['news-card-description']}>{description}</p>;
}
