import React from 'react';
import { CloseIcon } from '@components/icons/close-icon';
import Logo from '@components/ui/logo';

type DrawerWrapperProps = {
    children: React.ReactNode;
    onClose: () => void;
};

const DrawerWrapper: React.FunctionComponent<DrawerWrapperProps> = ({ children, onClose }) => {
    return (
        <div className="flex flex-col h-full relative">
            <div className="flex items-center justify-between px-5 md:py-5 md:px-8 mb-4 md:mb-6 border-b border-border-200 border-opacity-75 absolute top-0 start-0 w-full h-16 z-30 bg-cta-blue">
                <Logo />
                <button
                    onClick={onClose}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-body bg-gray-200 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light"
                >
                    <CloseIcon className="w-2.5 h-2.5" />
                </button>
            </div>
            {/* End of header part */}
            <div className="pt-16 h-full overflow-scroll">{children}</div>
            {/* End of menu part */}
        </div>
    );
};

export default DrawerWrapper;
