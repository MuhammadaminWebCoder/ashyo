import Button from '@/components/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import img from '../../public/music.png'
const MusicPage = () => {
    const t = useTranslations("MusicPage")
    return (
        <div className='flex items-center sm:items-start sm:!mt-[50px] sm:!mb-[100px] md:h-[420px] h-[300px] containers bg-[#282828] gap-12 rounded-xl px-12'>
            <div>
                <Image className='w-[300px] sm:w-[518px]' src={img} alt='music' priority/>
            </div>
            <div className="flex-col justify-center h-full gap-3 w-[438px] flex">
                <strong className='text-white text-[20px] md:text-[32px]'>{t("title")}</strong>
                <Button extraClass='w-[160px] bg-white !text-black'>{t("basket")}</Button>
            </div>
        </div>
    )
}

export default MusicPage
