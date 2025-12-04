import Link from 'next/link';
import { useTranslation } from '../../../hooks/useTranslation';

const Download = ({ icon }) => {
  const { t } = useTranslation();
  return (
    <>
      <Link href='/SafiaKhoulaid_Resume.pdf' target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>{t('intro.download')}</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
