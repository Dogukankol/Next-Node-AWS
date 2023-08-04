import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlogCardImage from '@/assets/images/blog/00_Dashboard_Blog.png'


function BlogCard({ image, title, description, category, date, href }) {
  return (
    <div className="blog-card">
      <Link href={`${href}`} target="_self" className='blog-card__image'>
        <Image src={BlogCardImage} alt={title} full />
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__features">
          <Link href={`${href}`} target="_self">
            <span>{date}</span>
            <span>5 dk okuma</span>
          </Link>
        </div>
        <h4 className="blog-card__title">
          <Link href={`${href}`} target="_self">
            {title}
          </Link>
        </h4>
        <div className="blog-card__features">
          <Link href={`${href}`} target="_self"><b>{category}</b></Link>
        </div>
        <p className="blog-card__description">
          <Link href={`${href}`} target="_self">
            {description}
          </Link>
        </p>
      </div>
    </div>
  )
}

BlogCard.defaultProps = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Bilgi teknolojileri ve kurumsal servisler için kullanıma hazır olan ultia' nın modüllerini anında Bilgi teknolojileri ve kurumsal servisler içinkullanıma hazır olan ultia' nın modüllerini anında",
    category: "Kategori",
    date: "07 Ocak 2023",
    href: "/blog/detail/1",
}


export default BlogCard