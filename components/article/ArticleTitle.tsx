import styles from '@/components/article/article.module.css';

interface ArticleTitleProps {
  title: string;
}

export default function ArticleTitle({ title }: ArticleTitleProps) {
  return <h2 className={styles['news-card-title ']}>{title}</h2>;
}
