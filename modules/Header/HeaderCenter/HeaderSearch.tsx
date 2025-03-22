import { ArrowDownIcon, SearchIcon } from '@/assets/icons';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useTranslations } from 'next-intl';
import React from 'react';

const HeaderSearch = () => {
  const t = useTranslations('HeaderCenterContent');

  return (
    <div className='flex gap-[10px]'>
      <div className='relative'>
        <Input placeholder={t('inputPlaceholder')} type='text' name='search' />
        <SearchIcon />
        <Button icon={<ArrowDownIcon />} iconPosition={'right'}>{t('category')}</Button>
      </div>
    </div>
  );
};

export default HeaderSearch;
