import { AppStore, Facebook, Instagram, PlayMarket, Telegram, Twitter, Youtube } from '@/assets/icons'
import Button from '@/components/Button'
import { useTranslations } from 'next-intl'
import React from 'react'   


const Footer = () => {
    const t = useTranslations("footer")
  return (
    <div className='containers relative grid grid-cols-12 !my-[40px] !py-[50px]'>
      <div className='col-span-12 mb-4 md:hidden'>
        <p className='font-semibold mb-2 text-[20px] text-[#000000B2]'>{t("install")}</p>
        <div className='flex gap-2'>
          <Button extraClass={"!bg-[#EBEFF3] !w-[50%] !text-black"} iconPosition={"left"} icon={<AppStore/>} >App Store</Button>
          <Button extraClass={"!bg-[#EBEFF3] !w-[50%] !text-black"} iconPosition={"left"} icon={<PlayMarket/>} >Play Market</Button>
        </div>
      </div>
      <div className='col-span-6 md:col-span-5 order-2 md:order-1'>
        <p className='font-semibold mb-3 text-[20px] text-[#000000B2]'>{t("networking")}</p>
        <div className='flex flex-wrap md:flex-nowrap items-center mb-7 gap-2'>
            <button className='w-[44px] h-[44px] flex items-center !justify-center bg-[#EBEFF3] rounded-sm'><Facebook/></button>
            <button className='w-[44px] h-[44px] flex items-center !justify-center bg-[#EBEFF3] rounded-sm'><Youtube/></button>
            <button className='w-[44px] h-[44px] flex items-center !justify-center bg-[#EBEFF3] rounded-sm'><Telegram/></button>
            <button className='w-[44px] h-[44px] flex items-center !justify-center bg-[#EBEFF3] rounded-sm'><Twitter/></button>
            <button className='w-[44px] h-[44px] flex items-center !justify-center bg-[#EBEFF3] rounded-sm'><Instagram/></button>
        </div>
        <p className='font-semibold hidden md:block mb-2 text-[20px] text-[#000000B2]'>{t("install")}</p>
        <div className='hidden md:flex flex-wrap gap-2'>
          <Button extraClass={"!bg-[#EBEFF3] !text-black"} iconPosition={"left"} icon={<AppStore/>} >App Store</Button>
          <Button extraClass={"!bg-[#EBEFF3] !text-black"} iconPosition={"left"} icon={<PlayMarket/>} >Play Market</Button>
        </div>
      </div>
      <div className='col-span-6 order-1 md:order-2 md:col-span-2 text-[#000000B2]'>
        <p className='font-semibold mb-3 text-[20px]'>{t("menyu")}</p>
        <p className='mb-[7px]'>{t("ashyoAbout")}</p>
        <p className='mb-[7px]'>{t("useCondition")}</p>
        <p className='mb-[7px]'>{t("privacy")}</p>
        <p className='mb-[7px]'>{t("categoryProduct")}</p>
        <p className='mb-[7px]'>{t("ourCall")}</p>
      </div>
      <div className='col-span-5 order-1 md:order-2 hidden md:flex justify-end'>
      <div>
        <p className='font-semibold mb-2 text-[20px] text-[#000000B2]'>{t("call")}</p>
        <p className='font-semibold text-[24px] mb-4'>+998 (71) 123-45-67</p>
          <p className='text-[#000000B2] !mb-4'>{t("question")}</p>
          <div className='lg:w-[314px] sm:w-[214px] w-[314px] h-[54px] flex items-center ps-4 bg-[#EBEFF3] rounded-sm'>
            <p className='text-[14px] text-[#000000B2]'>{t("placeholder")}</p>
          </div>
        </div>
      </div>
      <p className='absolute bottom-0 left-0 text-[#00000066] text-[12px]'>© 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.</p>
    </div>
  )
}

export default Footer
