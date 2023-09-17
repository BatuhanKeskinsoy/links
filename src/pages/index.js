import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import LinkItem from '@/components/LinkItem'
import linksData from '@/data/linksData'
import Footer from '@/components/inc/Footer'

function Home() {
  return (
    <>
      <Head>
        <title>Batuhan Keskinsoy | Bağlantılarım</title>
        <meta name="description" content="Bağlantılarım, işlerim ve diğer bilgilerim" />
      </Head>
      <main className='relative w-[36rem] max-w-full min-h-[calc(100vh-73px)] mx-auto lg:py-10'>
        <Image
          src={'/photo/Photo.jpg'}
          fill
          sizes='100vw'
          className='object-cover object-top bg-fixed'
        />
        <div className="w-full min-h-[calc(100vh-73px)] backdrop-blur-[3px]">
          <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-black to-transparent -z-10"></div>
          <div className="flex w-full p-6 gap-x-4 justify-center">
            <Image
              src={'/photo/Photo.jpg'}
              width={96}
              height={96}
              className='rounded-full w-24 h-24 min-w-[96px] min-h-[96px] object-cover object-top shadow-lg shadow-gray-700'
            />
            <div className='flex flex-col justify-center gap-y-1 max-w-full w-full items-end text-right'>
              <h1 className='font-bold tracking-wider uppercase text-xl text-white font-gemunu'>Batuhan Keskinsoy</h1>
              <span className='tracking-widest text-lg text-gray-400 line-clamp-1 font-gemunu'>Frontend Developer</span>
              <sm className='tracking-widest line-clamp-1 font-gemunu font-extrabold text-yellow-300'>Bağlantılarım</sm>
            </div>
          </div>
          <hr className='opacity-10' />
          <div className="flex flex-col gap-y-5 px-6 w-full py-6">

            {linksData.map(linkItem => (
              <LinkItem linkItem={linkItem} key={linkItem.id} />
            ))}

          </div>


        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home