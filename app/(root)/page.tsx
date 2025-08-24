
import { SharedHeader } from '@/components'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main className='wrapper page'>
      <SharedHeader
      title='Snap Cast'
      subHeader="Your favorite videos, all in one place"
      userImg="/assets/images/dummy.jpg"
      />
      <section className='video-grid'>
      {dummyCards.map((card)=>(
        <VideoCard
          key={card.id}
          {...card}
        />
      ))}
      <VideoCard
        id="1"
        title = 'SnapChat Message'
        thumbnail = "/assets/samples/thumbnail (1).png"
        createdAt = {new Date("2024-06-30T12:34:56Z")}
        userImg = "/assets/images/dummy.jpg"
        username = "Zunxii"
        views = {12}
        visibility = "public"
        duration = {120}
        />
      </section>
    </main>
  )
}

export default Page