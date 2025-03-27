"use client";

import HeaderCategorySkeleton from "@/components/HeaderCategorySkleton";
import { Link } from "@/i18n/navigation";
import getCategory from "@/services/getCategory";
import { CategoryType } from "@/types/HeaderType";
import React from "react";

const HeaderCategory = () => {
  const { data: categoryList, isLoading } = getCategory();

  return (
    <div className="containers !mt-[20px] hidden header-category sm:flex flex-wrap gap-[5px] items-center justify-center min-[918px]:justify-between">
      {isLoading ? <HeaderCategorySkeleton/> : categoryList?.map((item: CategoryType) => (
        <Link
          className="text-[#545D6A] text-[16px]"
          key={item.id}
          href={`#`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default HeaderCategory;
