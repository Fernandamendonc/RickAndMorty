import type { NextPage } from 'next'

import Link from 'next/link'

import { Characters } from './characters/index'

const Home: NextPage = () => {
  return (
    <>
      <Link href="/characters">
        <a>Characters</a>
      </Link>
    </>
  )
}

export default Home
