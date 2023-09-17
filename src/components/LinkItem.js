import React from 'react'
import Link from 'next/link'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import IconMappings from '@/components/IconMapping'

function LinkItem(props) {
    const {
        linkItem
    } = props

    const ItemIcon = IconMappings[linkItem.icon]

    // Sosyal medya platformlarına özel renkler
    const platformColors = {
        'İnstagram': { text: 'text-fuchsia-500', bg: 'bg-fuchsia-500' },
        'Facebook': { text: 'text-blue-800', bg: 'bg-blue-800' },
        'Github': { text: 'text-gray-800', bg: 'bg-gray-800' },
        'LinkedIn': { text: 'text-blue-600', bg: 'bg-blue-600' },
        'Twitter': { text: 'text-sky-500', bg: 'bg-sky-500' },
        'Behance': { text: 'text-blue-700', bg: 'bg-blue-700' },
        'Websitem': { text: 'text-violet-600', bg: 'bg-violet-600' },
        'Bionluk': { text: 'text-rose-500', bg: 'bg-rose-500' },
        'Fiverr': { text: 'text-green-500', bg: 'bg-green-500' },
    }

    const platformColor = platformColors[linkItem.title] || { text: '', bg: '' }

    return (
        <div className={`flex w-full items-center justify-between bg-white/90 rounded-full p-2 gap-x-2 relative`}>
            <div className="flex items-center gap-x-4">
                <div className={`${platformColor.text} ml-1`}>
                    <ItemIcon size={42} />
                </div>
                <div className='flex flex-col gap-y-0.5'>
                    <span className={`font-gemunu text-lg tracking-wider font-bold leading-5`}>{linkItem.title}</span>
                    <span className={`font-gemunu text-sm tracking-wider opacity-50 font-bold leading-5`}>{linkItem.name}</span>
                </div>
            </div>
            <Link
                href={linkItem.link}
                className={`text-white p-2.5 h-full rounded-full text-2xl ${platformColor.bg} transition-all hover:scale-110`}
                target='_blank'
            >
                <AiOutlineDoubleRight />
            </Link>
        </div>
    )
}

export default LinkItem
