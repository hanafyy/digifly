"use client";
import SectionHeader from "./SectionHeader";
import { useTranslations } from "next-intl";
import React from "react";

import DraftEditor from "./DraftEditor";
function TextEditor() {
  const t = useTranslations("textEditor");
  return (
    <section className="flex flex-col px-8 py-4 space-y-6 md:space-y-0 md:space-x-8 lg:mt-12 md:mt-5 mt-2">
      <SectionHeader description={t("formText")} header={t("section3")} />
      <DraftEditor />
    </section>
  );
}

export default TextEditor;
