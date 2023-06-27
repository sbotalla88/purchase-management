import { PaginationProps } from 'rc-pagination';
import { ArrowNext } from '@components/icons/arrow-next';
import { ArrowPrev } from '@components/icons/arrow-prev';
import 'rc-pagination/assets/index.css';
import locale from '@data/locale/pagination.json';
import { memo } from 'react';
import dynamic from 'next/dynamic';

const RCPagination = dynamic(() => import('rc-pagination'), {
    ssr: false,
});

const Pagination: React.FC<PaginationProps> = (props) => {
    return <RCPagination nextIcon={<ArrowNext />} prevIcon={<ArrowPrev />} locale={locale} {...props} />;
};

export default memo(Pagination);
