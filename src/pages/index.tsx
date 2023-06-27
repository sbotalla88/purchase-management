import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '@components/ui/loader/loader';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ComingSoonPage from '@components/common/coming-soon';
const Dashboard = () => {
    const { push } = useRouter();
    useEffect(() => {
        push('/purchase-orders');
    }, []);
    return (
        <>
            <ComingSoonPage />
        </>
    );
};
export default Dashboard;
