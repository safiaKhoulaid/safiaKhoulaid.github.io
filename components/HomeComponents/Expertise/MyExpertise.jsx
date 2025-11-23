import ExpertiseCard from "./ExpertiseCard";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import { useTranslation } from "../../../hooks/useTranslation";

const MyExpertise = () => {
  const { t, locale } = useTranslation();
  const { isLoading, error, data } = useQuery(["expertise", locale], () =>
    axios
      .get(`api/expertise?locale=${locale}`)
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        {t('expertise.title')}
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((_, i) => (
              <ParagraphSkeleton key={i} className={"space-y-2 p-8"} />
            ))
          : data?.map((data, key) => <ExpertiseCard key={key} data={data} />)}
      </div>
    </>
  );
};

export default MyExpertise;
