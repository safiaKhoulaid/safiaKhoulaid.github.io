import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useTranslation } from "../hooks/useTranslation";

function Background() {
  const { t } = useTranslation();
  const backgroundData = t('backgroundData');

  const eduData = backgroundData?.education ? Object.values(backgroundData.education) : [];
  const expData = backgroundData?.experience ? Object.values(backgroundData.experience) : [];

  return (
    <BannerLayout>
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-red px-4 pb-2 pt-10">
        <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
            {t('background.education')}
          </div>
          {eduData.map((data, key) => (
            <Edu_Card key={key} data={data} />
          ))}
        </div>
        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-y-4 md:ml-12">
            <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">
              {t('background.experience')}
            </div>

            {expData.map((data, key) => (
              <Exp_Card key={key} data={data} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
}

export default Background;
