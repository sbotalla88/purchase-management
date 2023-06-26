import React from 'react';
import AuthorizedMenu from '../navigation/authorized-menu';
import { NavbarIcon } from '@components/icons/navbar-icon';
import { motion } from 'framer-motion';
import { useUI } from '@contexts/ui.context';

const Header = () => {
    const { toggleSidebar } = useUI();
    return (
        <header className="bg-white fixed w-full z-50">
            <nav className="px-5 md:px-8 py-4 flex items-center justify-between">
                {/* <!-- Mobile menu button --> */}
                <motion.button
                    whileTap={{ scale: 0.88 }}
                    onClick={toggleSidebar}
                    className="flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent lg:hidden"
                >
                    <NavbarIcon />
                </motion.button>

                <div className="flex space-s-8 ml-auto">
                    <AuthorizedMenu />
                </div>
            </nav>
        </header>
    );
};

export default React.memo(Header);
