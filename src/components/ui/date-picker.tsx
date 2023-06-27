import dynamic from 'next/dynamic';

import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker = dynamic(() => import('react-datepicker'), {
    ssr: false,
});
