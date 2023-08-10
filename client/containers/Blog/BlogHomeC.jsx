import { BlogCard, BlogLatest, BlogCardThumbnail } from '@/components'
import React from 'react'

function BlogHome() {
  const dummyData = [
    {
      image: "/../assets/images/blog/00_Dashboard_Blog.png",
      title: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "1 Bilgi teknolojileri ve kurumsal servisler için kullanıma hazır olan ultia' nın modüllerini anında Bilgi teknolojileri ve kurumsal servisler içinkullanıma hazır olan ultia' nın modüllerini anında",
      category: "1 Kategori",
      date: "07 Ocak 2023",
      href: "blog/detail/1/",
    },
    {
      image: "/assets/images/blog/00_Dashboard_Blog.png",
      title: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "2 Bilgi teknolojileri ve kurumsal servisler için kullanıma hazır olan ultia' nın modüllerini anında Bilgi teknolojileri ve kurumsal servisler içinkullanıma hazır olan ultia' nın modüllerini anında",
      category: "2 Kategori",
      date: "07 Ocak 2023",
      href: "blog/detail/2/",
    },
    {
      image: "/assets/images/blog/00_Dashboard_Blog.png",
      title: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "3 Bilgi teknolojileri ve kurumsal servisler için kullanıma hazır olan ultia' nın modüllerini anında Bilgi teknolojileri ve kurumsal servisler içinkullanıma hazır olan ultia' nın modüllerini anında",
      category: "3 Kategori",
      date: "07 Ocak 2023",
      href: "blog/detail/3/",
    },
    {
      image: "/assets/images/blog/00_Dashboard_Blog.png",
      title: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "4 Bilgi teknolojileri ve kurumsal servisler için kullanıma hazır olan ultia' nın modüllerini anında Bilgi teknolojileri ve kurumsal servisler içinkullanıma hazır olan ultia' nın modüllerini anında",
      category: "4 Kategori",
      date: "07 Ocak 2023",
      href: "blog/detail/4/",
    },
  ]
  return (
    <div className='blog'>
      <div className='blog__left'>
        <BlogLatest />
        <div className='blog__cards'>
          {
            dummyData.map((item, key) => (
              <BlogCard key={key} {...item} />
            ))
          }
        </div>
      </div>
      <div className="blog__right">
        <div className="blog__most-popular">
          <h4>En Son Bloglar</h4>
          
          {
            dummyData.map((item, key) => (
              <BlogCardThumbnail  key={key} {...item}  />
            ))
          }
        </div>

        <div className="blog__editors-choice">
          <h4>Editör Seçimi</h4>
          {
            dummyData.map((item, key) => (
              <BlogCardThumbnail  key={key} {...item}  />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BlogHome