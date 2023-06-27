import React, { useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Router } from 'next/router';

const MainLayout = dynamic(() => import('@components/layout/mainLayout'));
const Meta = dynamic(() => import('@components/layout/meta'));
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
