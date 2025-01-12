import React from 'react';
import styles from '@/components/article/article.module.css';
import Image from 'next/image';
import ArticleTitle from '@/components/article/ArticleTitle.tsx';
import ArticleDescription from '@/components/article/ArticleDescription.tsx';
import Link from 'next/link';

export interface ArticleProps {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

export default function Article({
  description,
  title,
  urlToImage,
  url,
}: ArticleProps) {
  return (
    <div className={styles['news-card']}>
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
        <Link href={url} className={styles['news-card-link']} target="_blank">
          Read more
        </Link>
      </div>
    </div>
  );
}
