import { ArrowDownIcon, CompareIcon, SearchIcon } from "@/assets/icons";
import Button from "@/components/Button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const HeaderCenter = () => {
  const t = useTranslations("HeaderCenterContent")
  return (
    <div className="containers">
      <Link className="flex items-center gap-[1px]" href={"/"}>
        <Image className="w-[48px] scale-[1.5] h-[48px]" src={"/logo.svg"} alt="Logo" width={48} height={48} priority/>
        <strong className="text-[36px] font-black text-[#134E9B] leading-[100%]">Ashyo</strong>
      </Link>
      <div>
        <Button>{t("category")} <ArrowDownIcon extraClass="w-[13px] h-[17px] "/></Button>
        <Button extraClass='!w-[60px] !h-[48px] !p-0'><SearchIcon /></Button>
        <Button bage={2} extraClass='!w-[50px] !h-[48px] !p-0 !bg-[#EBEFF3]'><CompareIcon /></Button>
      </div>
    </div>
  );
};

export default HeaderCenter;
