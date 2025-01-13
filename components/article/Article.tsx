import React from 'react';
import styles from '@/components/article/article.module.css';
import Image from 'next/image';
import ArticleTitle from '@/components/article/ArticleTitle.tsx';
import ArticleDescription from '@/components/article/ArticleDescription.tsx';
import Link from 'next/link';

/**
 * Props for the Article component.
 */
export interface ArticleProps {
  /**
   * The title of the article.
   */
  title: string;

  /**
   * A brief description of the article.
   */
  description: string;

  /**
   * The URL of the image associated with the article.
   */
  urlToImage: string;

  /**
   * The URL to the full article.
   */
  url: string;
}

/**
 * Component to display a news article.
 * @param props - The properties of the article.
 * @returns A React component that displays the article.
 */
export default function Article({
  description,
  title,
  urlToImage,
  url,
}: ArticleProps) {
  return (
    <div className={styles['news-card']}>
      <Link href={url} className={styles['news-card-link']} target="_blank">
        <Image
          src={urlToImage}
          alt={title}
          className={styles['news-card-image']}
          width={200}
          height={200}
        />
        <div className={styles['news-card-content']}>
          <ArticleTitle title={title} />
          <ArticleDescription description={description} />
        </div>
      </Link>
    </div>
  );
}
