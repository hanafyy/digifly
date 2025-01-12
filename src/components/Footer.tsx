import { useTranslations } from "next-intl";
import React from "react";

function Footer() {
  const t = useTranslations("footer");
  return (
    <div className="bg-defaultPurple py-4 w-full text-center text-white text-xs lg:mt-20 sm:mt-5 mt-5">
      {t("text")}
    </div>
  );
}

export default Footer;
