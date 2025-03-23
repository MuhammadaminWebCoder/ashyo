"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import getBanners from "@/services/getBanners";
import Button from "@/components/Button";
import Image from "next/image";
import { IMG_API } from "@/hooks/getEnv";
import { useTranslations } from "next-intl";


const Hero = () => {
    const t = useTranslations("HeroContent")
    const {data:banners} = getBanners()
    banners.map((item:any) => console.log(item))
  return (
    <div className="py-[20px]  bg-[#F3F0F0]">
      <div className="containers">
        <Swiper autoplay={{delay:2500, disableOnInteraction:false}} loop={true} pagination={true} modules={[Autoplay,Pagination]} className="mySwiper">
            {banners.map((item:any) => (
                <SwiperSlide key={item.id}>
                <div className='w-[596px] text-start'>
                  <h2 className='font-black text-[44px] text-[#0A1729] mb-[6px]'>
                    {item.name}
                  </h2>
                  <p className='text-[16px] text-[#545D6A] mb-[22px]'>
                    {item.description}
                  </p>
                  <Button>{t("more")}</Button>
                </div>
                <Image 
                  className='w-[455px]' 
                  src={`${IMG_API}/${item.image}`} 
                  alt='Banner img' 
                  width={755} 
                  height={731} 
                  priority 
                />
              </SwiperSlide>
              
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
