import { Button } from '@/components'
import Blog from './blog/page'
import {redirect} from 'next/navigation'

export default function Home() {
  redirect('/blog')
}
