import BlogDetailC from '@/containers/Blog/BlogDetailC'
import React from 'react'

function BlogDetail({ params }) {
  console.log(params.id)
  return (
    <BlogDetailC />
  )
}

export default BlogDetail