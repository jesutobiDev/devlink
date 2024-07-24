import React from "react";
import Image from "next/image";
import empty from "../../images/icons/empty.svg";

const EmptyLink = () => {
  return (
    <div className="bg-dev-very-light-gray flex-1 h-auto flex items-center justify-center gap-4 flex-col rounded-xl">
      <Image src={empty} alt="Empty Link" width={250} height={160} />
      <div className="flex flex-col gap-2 items-center text-center p-16">
        <p className="text-[32px] font-bold text-[#333333]">
          Let{"'"}s get you started
        </p>
        <p className="text-base text-[#737373]">
        Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default EmptyLink;
