import { LocationIcon } from '@/assets/icons';
import LangConfig from '@/components/LangConfig';
import { HeaderTopNavListType } from '@/types/HeaderType';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation'
import React from 'react'

const HeaderTop = () => {
    const t = useTranslations("HeaderTopNavList")  
    const navList:HeaderTopNavListType[] = [
    {
        id: 1,
        icon: <LocationIcon />,
        title: t("tashkent"),
        path: "/",
    },
    {
        id: 2,
        icon: null,
        title: t("about-us"),
        path: "/about-us",
    },
    {
        id: 3,
        icon: null,
        title: t("products"),
        path: "/products",
    },
    {
        id: 4,
        icon: null,
        title: t("contacts"),
        path: "/contacts",
    }
];
return (
    <div className="py-[11px] bg-[#ebeff3] hidden sm:block">
      <div className="containers flex items-center justify-between">
        <nav className='flex items-center gap-[28px]'>
        {navList.map((item: HeaderTopNavListType) => <Link className="flex hover:text-[#134e9b] duration-300 items-center gap-[11px] text-[14px] leading-[130%] text-[#545d6a]" key={item.id} href={item.path} >
        {item.icon && <span>{item.icon}</span>}
            {item.title}
          </Link>)}
        </nav>
        <div className="flex items-center gap-[25px]">
            <Link  className="font-semibold text-[#545D6A] hover:text-[#134E9B] duration-300 leading-[130%]"  href={"tel:+998901234567"}>+998 90 123 45 67</Link>
            <LangConfig/>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop
