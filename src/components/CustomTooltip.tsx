import { useTranslations } from "next-intl";

const CustomTooltip = () => {
  const t = useTranslations("tooltip");
  return (
    <div className="w-fit h-fit absolute z-[10] top-0 bottom-10 left-0 right-0 m-auto">
      <div className="relative z-[10] w-[200px] h-[120] bg-defaultPurple text-white rounded-lg shadow-lg">
        {/* Tooltip Box */}
        <div className="p-4 text-center">
          <p className="text-sm font-medium">
            {t("companyAr")}
            <span className="text-[#49BD88] font-medium">
              {t("companyName")}
            </span>{" "}
            {t("companyEn")}
            {t("welcomeMessage")}
          </p>
        </div>
        {/* Triangle Pointer */}
        <div className="absolute h-10 bottom-[-12px] left-[30px] transform -translate-x-1/2 rotate-180">
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#6D5BBE]"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomTooltip;
