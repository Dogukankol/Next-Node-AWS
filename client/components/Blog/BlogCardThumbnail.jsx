import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogCardThumbnailImage from '@/assets/images/blog/00_Dashboard_Blog.png'

function BlogCardThumbnail({href, title, date}) {
  return (
    <div className="blog-card-thumbnail">
      <Link href={href} target="_self">
        <Image src={BlogCardThumbnailImage} alt="Blog Card Thumbnail" />
        <div className="blog-card-thumbnail__body">
          <h5 className="blog-card-thumbnail__title">{title}</h5>
          <span className="blog-card-thumbnail__date">{date}</span>
        </div>
      </Link>
    </div>
  )
}

BlogCardThumbnail.defaultProps = {
    title: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusm…",
    date: "13 Nisan 2022",
    href: "/blog/detail/1",
}

export default BlogCardThumbnail