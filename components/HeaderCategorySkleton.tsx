import React from "react";
import { Skeleton } from "antd";
const HeaderCategorySkeleton = () => {
  return (
    <div className="flex justify-between w-full">
      {[...Array(8)].map((_, index) => (
        <Skeleton
          key={index}
          active
          className="!w-[100px]"
          paragraph={{ rows: 0 }}
        />
      ))}
    </div>
  );
};

export default HeaderCategorySkeleton;
