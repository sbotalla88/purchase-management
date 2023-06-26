import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Avatar from '@components/common/avatar';
import * as authActions from '@redux/auth/actions';
import { useDispatch } from 'react-redux';
import { useRedux } from '@redux';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const AuthorizedMenu = () => {
    const d = useDispatch();
    const { data: authData } = useRedux('auth');
    const router = useRouter();

    const handleLogout = async () => {
        await d(authActions.signOut());
    };
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center focus:outline-none">
                <div className="text-sm">{authData?.email ?? ''}</div>
                <Avatar src="/user-icon.svg" alt="avatar" className="bg-light-gray ml-4" height={16} width={16} />
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    as="ul"
                    className="absolute right-0 w-48 pt-8 pb-5 mt-4 origin-top-right bg-white rounded shadow-700 focus:outline-none items-center"
                    style={{
                        clipPath: 'polygon(0% 12%, 80% 12%, 88% 0%, 92% 12%, 100% 12%, 100% 100%, 0% 100%)',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                    }}
                >
                    {/* <div className="flex-1 flex justify-center mb-2">Admin</div> */}
                    <div
                        className="flex-1 flex "
                        style={{
                            cursor: 'pointer',
                            color: '#273E61',
                            borderBottom: '2px solid #C8D7E1',
                            paddingBottom: '10px',
                        }}
                        onClick={() => router.push('/profile', undefined, { shallow: true })}
                    >
                        <div
                            style={{
                                color: '#C8D7E1',
                                borderRight: '1px solid #C8D7E1',
                                paddingRight: '10px',
                                marginRight: '10px',
                            }}
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        My Profile
                    </div>
                    <div
                        className="flex-1 flex"
                        style={{ cursor: 'pointer', color: '#273E61', paddingTop: '10px' }}
                        onClick={handleLogout}
                    >
                        <div
                            style={{
                                color: '#C8D7E1',
                                borderRight: '1px solid #C8D7E1',
                                paddingRight: '10px',
                                marginRight: '10px',
                            }}
                        >
                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </div>
                        Log Out
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default AuthorizedMenu;
