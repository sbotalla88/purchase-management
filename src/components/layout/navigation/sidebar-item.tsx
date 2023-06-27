import Link from '@components/ui/link';
import getIcon from '@components/common/get-icon';
import * as sidebarIcons from '@components/icons/sidebar';
import { useRouter } from 'next/router';
export interface MenuItem {
    href?: string;
    icon?: string;
    label?: React.ReactNode;
}

export interface SidebarItemProps extends MenuItem {
    href?: string;
    icon?: string;
    label?: React.ReactNode;
    index: number;
}

const SidebarItem = ({ href = '', icon = '', label, index }: SidebarItemProps) => {
    const router = useRouter();

    return (
        <div key={index}>
            <Link
                href={href}
                className={`flex justify-between py-5 px-6 w-full items-center text-xl text-start text-light hover:bg-light-blue ${
                    router.pathname.includes(href) ? 'bg-light-blue' : ''
                } `}
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
        </div>
    );
};

export default SidebarItem;
