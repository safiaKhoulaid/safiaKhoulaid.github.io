import React from 'react';
import { CONTACTS } from '../../../constants/constants';
import Link from 'next/link';
import { useTranslation } from '../../../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col space-y-2 pt-6'>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>{t('contact.email')}</span>

        <span className='text-xs text-gray-600' mailto>
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>{t('contact.phone')}</span>
        <span className='text-xs text-gray-600'>{CONTACTS.PHONE}</span>
      </div>
    </div>
  );
};

export default Contact;
