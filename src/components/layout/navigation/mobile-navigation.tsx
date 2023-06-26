import React from 'react';
import DrawerWrapper from '@components/ui/drawer-wrapper';
import Drawer from '@components/ui/drawer';
import { useUI } from '@contexts/ui.context';

export interface MobileNavigationProps {
    children: React.ReactNode;
}

const MobileNavigation = ({ children }: MobileNavigationProps) => {
    const { displaySidebar, closeSidebar } = useUI();

    return (
        <Drawer open={displaySidebar} onClose={closeSidebar} variant="left">
            <DrawerWrapper onClose={closeSidebar}>
                <div className="flex flex-col space-y-6 p-5 h-full">{children}</div>
            </DrawerWrapper>
        </Drawer>
    );
};
export default React.memo(MobileNavigation);
