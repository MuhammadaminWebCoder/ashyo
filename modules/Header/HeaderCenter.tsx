import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import HeaderSearch from "./HeaderCenter/HeaderSearch";

const HeaderCenter = () => {
  const t = useTranslations("HeaderCenterContent")
  return (
    <div className="containers">
      <Link className="flex items-center gap-[1px]" href={"/"}>
        <Image className="w-[48px] scale-[1.3] sm:scale-[1.5] h-[48px]" src={"/logo.svg"} alt="Logo" width={48} height={48} priority/>
        <strong className="text-[33px] font-black text-[#134E9B] leading-[100%]">Ashyo</strong>
      </Link>
      <div>
        <HeaderSearch/>
      </div>
    </div>
  );
};

export default HeaderCenter;
