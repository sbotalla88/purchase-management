import dynamic from 'next/dynamic';
import 'rc-table/assets/index.css';

export const Table = dynamic(() => import('rc-table'), {
    ssr: false,
});
