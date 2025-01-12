"use client";
import MailAndFormData from "@/components/MailAndFormData";
import Map from "@/components/Map";

import { Provider } from "react-redux";
import TextEditor from "@/components/TextEditor";
import { store } from "@/redux/store";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Provider store={store}>
        <MailAndFormData />
        <Map />
        <TextEditor />
      </Provider>
      <Footer />
    </div>
  );
}
