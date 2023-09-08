import React from 'react'
import { List } from '../../components'
import { Button } from 'antd';
import Link from 'next/link';


function Posts() {
  return (
    <>
    
    <Button type="primary"><Link href="posts/new-post">Add New Post</Link></Button>
    <List />
    </>
  )
}

export default Posts