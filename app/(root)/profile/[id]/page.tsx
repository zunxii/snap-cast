import { SharedHeader } from '@/components';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
import React from 'react'

const page = async ({params}: ParamsWithSearch) => {
    const {id} = await params;
  return (
    <main className='wrapper page'>
        <SharedHeader
            subHeader='zunxii.2210@gmail.com'
            title='Zunxii'
            userImg='/assets/images/dummy.jpg'
        />
    <section className='video-grid'>
     {dummyCards.map((card)=>(
        <VideoCard
          key={card.id}
          {...card}
        />
      ))}
      </section>
    </main>
  )
}

export default page
