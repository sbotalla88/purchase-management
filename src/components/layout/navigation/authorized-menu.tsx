import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Avatar from '@components/common/avatar';

const AuthorizedMenu = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center focus:outline-none">
                <Avatar src="/user-icon.svg" alt="avatar" className="bg-light-gray ml-4" height={16} width={16} />
            </Menu.Button>
        </Menu>
    );
};

export default AuthorizedMenu;
