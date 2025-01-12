"use client";

import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";

import { useStrapi } from "@/hooks/useStrapi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useFetchUserInformations } from "@/hooks/useFetchUserInformations";

const Section = () => {
  const t = useTranslations("form"); // Use the "Section" namespace
  const users = useSelector((state: RootState) => state.users.users);
  const { addUserToStrapi, loading } = useStrapi();
  const { loading: gettingData } = useFetchUserInformations();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = {
      FirstName: formData.get("firstName") as string,
      LastName: formData.get("lastName") as string,
      Phone: formData.get("mobile") as string,
      Email: formData.get("email") as string,
    };

    await addUserToStrapi(newUser); // Submit to Strapi and Redux
    e.currentTarget.reset();
  };

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 px-8 py-4 space-y-6 md:space-y-0 md:space-x-8 lg:mt-12 md:mt-5 mt-2">
      <SectionHeader description={t("formText")} header={t("section1")} />
      {/* Form Section */}
      <div className="flex-1 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex lg:flex-row flex-col gap-10 ">
            <div className="lg:w-1/2 w-full">
              <label className="block text-gray-700 mb-2 ">
                {t("firstName")}
              </label>
              <input
                name="firstName"
                type="text"
                className="w-full border border-[#E5E5E5] rounded-[2px] h-[52px] px-4"
                placeholder={t("firstName")}
                required
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block text-gray-700 mb-2">
                {t("lastName")}
              </label>
              <input
                name="lastName"
                type="text"
                className="w-full border border-[#E5E5E5] rounded-[2px] h-[52px] px-4"
                placeholder={t("lastName")}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t("mobile")}</label>
            <input
              name="mobile"
              type="text"
              className="w-full border border-[#E5E5E5] rounded-[2px] h-[52px] px-4"
              placeholder={t("mobile")}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t("email")}</label>
            <input
              name="email"
              type="email"
              className="w-full border border-[#E5E5E5] rounded-[2px] h-[52px] px-4"
              placeholder={t("email")}
              required
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-defaultGreen flex items-center justify-center text-white p-2 rounded-[2px] h-[52px] hover:bg-defaultGreen/70"
          >
            {loading ? <div className="loader"></div> : t("submit")}
          </button>
        </form>
      </div>
      {/* Table Section */}
      <div className="flex-1 p-6">
        <h2 className="text-lg font-medium text-purple-700 mb-4">
          {t("results")}:
        </h2>
        {!gettingData ? (
          <div className="overflow-x-auto border border-[#E5E5E5]/10 rounded-[2px]  bg-white shadow-custom ">
            <table className="w-full  min-w-[600px]">
              <thead>
                <tr className="text-tableHeadingGray text-sm border-b border-b-[#F2F2F2] bg-[#FAFAFA]">
                  <th className="px-4 py-2 w-[120px] h-[64px] font-medium text-start">
                    {t("firstName")}
                  </th>
                  <th className="px-4 py-2 w-[120px] h-[64px] font-medium text-start">
                    {t("lastName")}
                  </th>
                  <th className="px-4 py-2 min-w-[120px] h-[64px] w-fit font-medium text-start">
                    {t("mobile")}
                  </th>
                  <th className="px-4 py-2 h-[64px] font-medium text-start">
                    {t("email")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter(
                    (user) =>
                      user.FirstName !== null &&
                      user.LastName !== null &&
                      user.Email !== null &&
                      user.Phone !== null
                  )
                  .map((user, index) => (
                    <tr
                      key={index}
                      className="text-sm border-t border-t-[#F2F2F2] hover:bg-gray-50"
                    >
                      <td className="px-4 py-2 w-[120px] h-[64px] font-medium text-start">
                        {user.FirstName}
                      </td>
                      <td className="px-4 py-2 w-[120px] h-[64px] font-medium text-start">
                        {user.LastName}
                      </td>
                      <td className="px-4 py-2 min-w-[120px] h-[64px] font-medium text-start">
                        {user.Phone}
                      </td>
                      <td className="px-4 py-2 h-[64px] font-medium text-start">
                        {user.Email}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </section>
  );
};

export default Section;
