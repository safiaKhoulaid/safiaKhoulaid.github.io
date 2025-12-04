import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import { useTranslation } from "../hooks/useTranslation";

const Portfolio = () => {
  const { t } = useTranslation();
  const portfolioData = t('portfolioData');

  return (
    <BannerLayout>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
        {portfolioData?.map((data, key) => <PortfolioCard key={key} data={data} />)}
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default Portfolio;
