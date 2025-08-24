'use client'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

  const handleSignin = async () => {
    return await authClient.signIn.social({provider : 'google'})
  }
  

  return (
    <main className='sign-in'>
      <aside className='testimonial'>
      <Link href='/'>
      <Image
        src='assets/icons/logo.svg'
        alt='logo'
        width={32}
        height={32}
      />
      <h1>SnapCast</h1>
      </Link>
      <div className='description'>
        <section>
          <figure>
            {Array.from({length:5}).map((_, index)=>(
              <Image
                key={index}
                src='assets/icons/star.svg'
                alt='star'
                width={20}
                height={20}
              />
            ))}
          </figure>
          <p>SnapCast makes screen recording easy. From quick walkthroughs to full presentations, it's fast, smooth, and sharable in seconds</p>
          <article>
            <Image
            src='/assets/images/jason.png'
            alt='json'
            width={64}
            height={64}
            className='rounded-full'
            />
            <div>
              <h2>Jason Clarke</h2>
              <p>Product Desinger, NovaByte</p>
            </div>
          </article>
        </section>
      </div>
      <p>Copyright SnapCast 2025</p>
      </aside>
      <aside className='google-sign-in'>
            <section>
              <Link href='/'>
              <Image
        src='assets/icons/logo.svg'
        alt='logo'
        width={32}
        height={32}
      />
      <h1>SnapCast</h1>
              </Link>
              <p>
            Create and share your very first <span>SnapCast video</span> in no
            time!
          </p>
          <button onClick={handleSignin}>
             <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
            </section>
      </aside>
      <div className="overlay" />
    </main>
  )
}

export default page
