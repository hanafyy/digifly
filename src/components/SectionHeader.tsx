import React from "react";

interface SectionHeaderInterface {
  header: string;
  description: string;
}

function SectionHeader({ header, description }: SectionHeaderInterface) {
  return (
    <div className="flex flex-col gap-4 p-6 lg:col-span-2 col-span-1">
      <div className="flex flex-row gap-4 items-center justify-center w-fit">
        <div className="w-[64px] h-1 bg-defaultPurple"></div>
        <h2 className="text-2xl text-black font-bold">{header}</h2>
      </div>
      <p className="text-defaultGrayBlack text-lg max-w-[1050px]">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
