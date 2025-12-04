import RecommendationCard from "./RecommendationCard";
import { useTranslation } from "../../../hooks/useTranslation";

const Recommendations = () => {
  const { t } = useTranslation();
  const recommendationsData = t('recommendationsData');
  const data = Array.isArray(recommendationsData) ? recommendationsData : [];

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        {t('recommendations.title')}
      </div>
      <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
        {data.map((data, key) => (
          <RecommendationCard key={key} data={data} />
        ))}
      </div>
    </>
  );
};

export default Recommendations;
