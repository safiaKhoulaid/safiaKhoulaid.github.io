import ExpertiseCard from "./ExpertiseCard";
import { useTranslation } from "../../../hooks/useTranslation";

const MyExpertise = () => {
  const { t } = useTranslation();
  const expertiseData = t('expertiseData');
  // Convert object to array if needed, or if t returns an object with numeric keys
  const data = Object.values(expertiseData);

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        {t('expertise.title')}
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ">
        {data.map((data, key) => <ExpertiseCard key={key} data={data} />)}
      </div>
    </>
  );
};

export default MyExpertise;
