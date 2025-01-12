import React from "react";
import SectionHeader from "./SectionHeader";
import { useTranslations } from "next-intl";
import "leaflet/dist/leaflet.css";
import LeafletMap from "./LeafetMap";
import CustomTooltip from "./CustomTooltip";
function Map() {
  const t = useTranslations("map");
  return (
    <section className="flex flex-col space-y-6 py-4 md:space-y-0 md:space-x-8 lg:mt-12 md:mt-5 mt-2">
      <div className="px-8 ">
        <SectionHeader description={t("formText")} header={t("section2")} />
      </div>

      <div className="relative w-full" style={{ margin: 0 }}>
        <div className="w-full h-full absolute bg-custom-gradient z-[2] top-o bottom-0 left-0 right-0 my-auto"></div>
        <LeafletMap />
        <CustomTooltip />
      </div>
    </section>
  );
}

export default Map;
