import React from 'react';
import Image from 'next/image';
import BlogDetailImage from "@/assets/images/blog/Latest-post.webp"

function BlogDetailC({image, title, description, category, date, href}) {
    return (

        <section className="blog-detail">
            <div className="container">
                <div className="blog-detail__content">
                    <div className="blog__features">
                        <span>{date}</span>
                        <span>4 dk okuma</span>
                    </div>
                    <h1>{title}</h1>
                    <div className="blog__features">
                        <a href="/" target="_self"><b>{category}</b></a>
                    </div>

                    <Image src={BlogDetailImage} alt={title} />
                    <div className='blog-detail__text'>
                        <p dangerouslySetInnerHTML={{ __html: description }}>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

BlogDetailC.defaultProps = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet risus nullam eget felis. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Habitant morbi tristique senectus et netus. Nisl condimentum id venenatis a condimentum vitae sapien. Gravida rutrum quisque non tellus. Sed egestas egestas fringilla phasellus faucibus. Enim sit amet venenatis urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel pharetra. Ante in nibh mauris cursus mattis molestie. Odio facilisis mauris sit amet massa vitae. Faucibus scelerisque eleifend donec pretium. Urna neque viverra justo nec ultrices dui sapien.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet risus nullam eget felis. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Habitant morbi tristique senectus et netus. Nisl condimentum id venenatis a condimentum vitae sapien. Gravida rutrum quisque non tellus. Sed egestas egestas fringilla phasellus faucibus. Enim sit amet venenatis urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel pharetra. Ante in nibh mauris cursus mattis molestie. Odio facilisis mauris sit amet massa vitae. Faucibus scelerisque eleifend donec pretium. Urna neque viverra justo nec ultrices dui sapien.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet risus nullam eget felis. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Habitant morbi tristique senectus et netus. Nisl condimentum id venenatis a condimentum vitae sapien. Gravida rutrum quisque non tellus. Sed egestas egestas fringilla phasellus faucibus. Enim sit amet venenatis urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel pharetra. Ante in nibh mauris cursus mattis molestie. Odio facilisis mauris sit amet massa vitae. Faucibus scelerisque eleifend donec pretium. Urna neque viverra justo nec ultrices dui sapien.",
    category: "Kategori",
    date: "07 Ocak 2023",
    href: "/blog/detail/1",
}

export default BlogDetailC