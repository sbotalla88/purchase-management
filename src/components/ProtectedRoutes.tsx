import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { AppState } from '@redux';
import findIndex from 'lodash/findIndex';
import { Router } from 'next/router';
import Loader from './ui/loader/loader';

const MainLayout = dynamic(() => import('@components/layout/mainLayout'));
const Meta = dynamic(() => import('@components/layout/meta'));

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== 'undefined';

const unprotectedRoutes = ['/', '']; //router.pathname

export interface ProtectedRouteProps {
    router: Router;
    children: React.ReactNode;
}

const ProtectedRoute = ({ router, children }: ProtectedRouteProps) => {
    return (
        <>
            <MainLayout meta={<Meta title="Alpine" description="Purchase order" />}>{children} </MainLayout>
        </>
    );
};

export default React.memo(ProtectedRoute);
