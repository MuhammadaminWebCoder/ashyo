"use client"
import { CompareIcon, LikeIcon, MarketIcon, ShipIcon, WatchIcon } from '@/assets/icons'
import Button from '@/components/Button'
import { IMG_API } from '@/hooks/getEnv'
import { formatNumber } from '@/modules/Products/ProductCard'
import getSingleProducts from '@/services/getSingleProducts'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {id} = useParams()
  const t = useTranslations("SingleProducts")
  
  const {data:singleData}:{data:any} = getSingleProducts(id)
  return (
    <div className='containers'>
    <h2 className='font-bold text-[32px] leading-[130%] mb-[36px]'>{singleData.name}</h2>
    <div className='flex justify-between mb-[80px]'>
    <div className='w-[49%] h-[430px] relative bg-[#EBEFF3] rounded-[10px] flex items-center justify-center'>
        <Image className='w-[341px] h-[341px]' src={`${IMG_API}/${singleData.image}`} alt='Product img' priority width={341} height={341}/>
        <div className='flex items-center gap-[20px] absolute top-[26px] right-[31px]'>
            <button className='text-[#5f728b]'> <CompareIcon /> </button>
            <button className='text-[#5f728b]'> <LikeIcon /> </button>
        </div>
      </div>
        <div className='w-[49%]'>
          <p className='font-bold mb-[36px] text-[32px] text-[#06172D]'> <span className='font-normal text-[#515D6C] text-[16px]'> {t('price') }</span><span className='font-bold text-[32px]'> {formatNumber(Number(singleData.price))} UZS </span> </p>
          <p className='py-[19px] bg-[#EBEFF3] rounded-[6px] text-center text-[#545D6A] text-[16px]'>{t('debt')}</p>
          <div className='flex gap-[14px] mt-[10px] mb-[43px]'>
              <Button extraClass='!w-[50%] !bg-transparent !border-[1px] !border-[#134E9B] !text-[#134E9B]'> {t('saveContent')} </Button>
              <Button extraClass='!w-[50%]'> {t('buy')} </Button>
          </div>
          <ul className='flex flex-col gap-[20px] text-[#06172DB2]'>
            <li className='flex items-center gap-[17px] '>
                <ShipIcon/><p className='text-[16px]'>{t("ship")}</p>
            </li>
            <li className='flex items-center gap-[17px]'>
                <MarketIcon/><p className='text-[16px] '>{t("markat")}</p>
            </li>
            <li className='flex items-center gap-[17px]'>
                <WatchIcon/><p className='text-[16px] '>{t("watch")}</p>
            </li>
          </ul>

      </div>

    </div>
  </div>

  )
}

export default page

