import type { NextPage } from 'next'

import Link from 'next/link'

import { Characters } from '../components/characters/index'

const Home: NextPage = () => {
  return (
    <>
      <Link href="/Character"> </Link>
      <Characters />
    </>
  )
}

export default Home
