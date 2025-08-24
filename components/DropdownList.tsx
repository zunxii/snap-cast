'use client'
import { init } from 'next/dist/compiled/webpack/webpack'
import Image from 'next/image';
import React, { useState } from 'react'

const DropdownList = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
      <div className='cursor-pointer' onClick={()=> setIsOpen(!isOpen)}>
        <div className='filter-trigger'>
            <figure>
                <Image
                    src='/assets/icons/hamburger.svg'
                    alt='filter'
                    width={14}
                    height={14}
                />
                Most Recent
            </figure>
            <Image
                src='/assets/icons/arrow-down.svg'
                alt='arrow down'
                width={20}
                height={20}
            />
        </div>
      </div>
      {isOpen &&(
        <ul className='dropdown'>
            {['Most Recent', 'Oldest', 'Most Viewed', 'Least Viewed'].map((item, index) => (
                <li className='list-item' key={index} onClick={() => {
                    setIsOpen(false);
                }}>{item}</li>))}
        </ul>
      )}
    </div>
  )
}

export default DropdownList
