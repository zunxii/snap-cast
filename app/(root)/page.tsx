
import { SharedHeader } from '@/components'
import React from 'react'

const Page = () => {
  return (
    <main className='wrapper page'>
      <SharedHeader
      title='Snap Cast'
      subHeader="Your favorite videos, all in one place"
      userImg="/assets/images/dummy.jpg"
      />
    </main>
  )
}

export default Page