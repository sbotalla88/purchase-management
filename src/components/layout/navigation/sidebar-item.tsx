import Link from '@components/ui/link';
import getIcon from '@components/common/get-icon';
import * as sidebarIcons from '@components/icons/sidebar';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export interface MenuItem {
    href?: string;
    icon?: string;
    label?: React.ReactNode;
}

export interface SidebarItemProps extends MenuItem {
    href?: string;
    icon?: string;
    label?: React.ReactNode;
    key: number;
}

const SidebarItem = ({ href = '', icon = '', label, key }: SidebarItemProps) => {
    const router = useRouter();

    return (
        <>
            <Link
                href={href}
                className={`flex justify-between py-5 px-6 w-full items-center text-xl text-start text-light hover:bg-light-blue ${
                    router.pathname.includes(href) ? 'bg-light-blue' : ''
                } `}
                key={key}
            >
                <div className={'flex items-center'}>
                    {getIcon({
                        iconList: sidebarIcons,
                        iconName: icon,
                        className: 'w-5 h-5 me-4',
                    })}
                    <span>{label}</span>
                </div>
            </Link>
        </>
    );
};

export default SidebarItem;
