import ReviewCard from "./ReviewCard";
import { useTranslation } from "../../../hooks/useTranslation";

const ClientReviews = () => {
  const { t } = useTranslation();
  const reviewsData = t('reviewsData');
  const data = Array.isArray(reviewsData) ? reviewsData : [];

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        {t('reviews.title')}
      </div>
      <div className="overflow-x-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">
        {data.map((data, key) => <ReviewCard key={key} data={data} />)}
      </div>
    </>
  );
};

export default ClientReviews;
