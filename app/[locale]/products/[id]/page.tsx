"use client"
import { CompareIcon, LikeIcon, MarketIcon, ShipIcon, WatchIcon } from '@/assets/icons'
import Button from '@/components/Button'
import { IMG_API } from '@/hooks/getEnv'
import Footer from '@/modules/Footer'
import DiscountProduct from '@/modules/Products/DiscountProducts'
import { formatNumber } from '@/modules/Products/ProductCard'
import Features from '@/modules/Products/SingleProduct/Features'
import getSingleProducts from '@/services/getSingleProducts'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const {id} = useParams()
  const t = useTranslations("SingleProducts")
    const s = useTranslations("Products")
  const [variationActive,setVariationActive] = useState<"feature"|"options">("feature")
  const {data:singleData}:{data:any} = getSingleProducts(id)
  const colors = ["#E60000", "#000000", "#FFFFFF", "#D9D9D9", "#00C3FF"];
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className='containers'>
    <h2 className='font-bold text-[32px] leading-[130%] mb-[36px]'>{singleData?.product?.name}</h2>
    <div className='flex md:flex-row flex-col justify-between mb-[80px]'>
    <div className=' md:w-[49%] w-[100%] h-[430px] relative bg-[#EBEFF3] rounded-[10px] flex items-center justify-center'>
        <Image className='w-[341px] h-[341px]' src={`${IMG_API}/${singleData.image}`} alt='Product img' priority width={341} height={341}/>
        <div className='flex items-center gap-[20px] absolute top-[26px] right-[31px]'>
            <button className='text-[#5f728b]'> <CompareIcon /> </button>
            <button className='text-[#5f728b]'> <LikeIcon /> </button>
        </div>
      </div>
        <div className=' md:w-[49%] w-[100%]'>
        <div className="mt-5 md:hidden">
        <p className="text-gray-700 ">Rangini tanlash:</p>
          <div className='flex mt-3 gap-3'>
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-md cursor-pointer transition-all duration-200 ${
                selectedColor === color ? "shadow-lg shadow-gray-400" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
          </div>
        </div>
          <p className='font-bold mt-5 md:mt-0 mb-[36px] text-[32px] text-[#06172D]'> <span className='font-normal text-[#515D6C] text-[16px]'> {t('price') }</span><span className='font-bold text-[32px]'> {formatNumber(Number(singleData.price))} UZS </span> </p>
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
    <div className='flex items-center gap-[87px] mb-[41px]'>
    <strong onClick={() => setVariationActive("feature")} className={`${variationActive == "feature" ? "!text-[#06172d] border-[#06172d]" :"border-transparent text-[#b6babf]"} cursor-pointer border-b-[1px] text-[18px] text-[#B6BABF] font-normal`}>Telefon xususiyatlari</strong>
    <strong onClick={() => setVariationActive("options")} className={`${variationActive == "options" ? "!text-[#06172d] border-[#06172d]" :"border-transparent text-[#b6babf]"} cursor-pointer border-b-[1px] text-[18px] text-[#B6BABF] font-normal`}>Mijozlarni fikrlari</strong>
    </div>
    {variationActive == "feature" ? <Features singleProduct={singleData} /> : ""}
    <DiscountProduct title={s("LastProduct")}/>
      <Footer />
  </div>

  )
}

export default page

