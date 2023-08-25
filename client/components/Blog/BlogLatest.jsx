import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlogLatestImage from '@/assets/images/blog/Latest-post.webp'

function BlogLatest({ title, category, image, href }) {
  return (

    <div className="blog__latest">
      <Link href={href} target="_self">
        <h4>En Son Bloglar</h4>
        <div className='blog__latest__image'>
          <Image src={BlogLatestImage} alt={title} full="true" />
        </div>
        <h3>{title}</h3>

      </Link>
      <div className="blog__features">
        <Link href={href} target="_self">
          <b>{category}</b>
        </Link>
        <span>4 dk okuma</span>
      </div>

    </div>
  )
}


BlogLatest.defaultProps = {
  image: "/assets/images/content/blog/Latest-post.webp",
  title: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusm…",
  description: "Bilgi teknolojileri ve kurumsal servisler için kullanıma hazır olan ultia' nın modüllerini anında Bilgi teknolojileri ve kurumsal servisler içinkullanıma hazır olan ultia' nın modüllerini anında",
  category: "Kategori",
  date: "07 Ocak 2023",
  href: "/blog/detail/1",
}

export default BlogLatest