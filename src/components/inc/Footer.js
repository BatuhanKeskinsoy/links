import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-3 px-4 lg:px-0">
                <div className="w-full flex justify-between text-gray-400 text-md lg:flex-row flex-col text-center font-gemunu tracking-wide">
                    <div>
                        Copyright <span className='font-system'>©</span>
                        <span className='text-yellow-300 ml-1 transition-all'>
                            {new Date().getFullYear() === 2023 ? new Date().getFullYear() : '2023 - ' + new Date().getFullYear()}
                        </span>
                    </div>
                    <div>
                        Kodlama ve Tasarım
                        <Link
                            href={'https://www.batuhankeskinsoy.com'}
                            title='Batuhan Keskinsoy'
                            className='text-site ml-1 hover:text-site/80 transition-all'
                            target='_blank'
                            rel='nofollow'
                        >Batuhan Keskinsoy</Link>
                        'a aittir.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer