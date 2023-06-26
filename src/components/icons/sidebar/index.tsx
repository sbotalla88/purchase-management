import dynamic from 'next/dynamic';

export const AttributeIcon = dynamic(
    () => import('@components/icons/sidebar/attribute').then(({ AttributeIcon }) => AttributeIcon),
    {
        ssr: false,
    }
);
export const AttributeValueIcon = dynamic(
    () => import('@components/icons/sidebar/attribute-value').then(({ AttributeValueIcon }) => AttributeValueIcon),
    {
        ssr: false,
    }
);
export const CategoriesIcon = dynamic(
    () => import('@components/icons/sidebar/categories').then(({ CategoriesIcon }) => CategoriesIcon),
    {
        ssr: false,
    }
);
export const CouponsIcon = dynamic(
    () => import('@components/icons/sidebar/coupons').then(({ CouponsIcon }) => CouponsIcon),
    {
        ssr: false,
    }
);
export const OrdersIcon = dynamic(
    () => import('@components/icons/sidebar/orders').then(({ OrdersIcon }) => OrdersIcon),
    {
        ssr: false,
    }
);
export const OrdersStatusIcon = dynamic(
    () => import('@components/icons/sidebar/order-status').then(({ OrdersStatusIcon }) => OrdersStatusIcon),
    {
        ssr: false,
    }
);
export const ProductsIcon = dynamic(
    () => import('@components/icons/sidebar/products').then(({ ProductsIcon }) => ProductsIcon),
    {
        ssr: false,
    }
);
export const DashboardIcon = dynamic(
    () => import('@components/icons/sidebar/dashboard').then(({ DashboardIcon }) => DashboardIcon),
    {
        ssr: false,
    }
);
export const SettingsIcon = dynamic(
    () => import('@components/icons/sidebar/settings').then(({ SettingsIcon }) => SettingsIcon),
    {
        ssr: false,
    }
);
export const ShopIcon = dynamic(() => import('@components/icons/sidebar/shop').then(({ ShopIcon }) => ShopIcon), {
    ssr: false,
});
export const MyShopIcon = dynamic(
    () => import('@components/icons/sidebar/my-shop').then(({ MyShopIcon }) => MyShopIcon),
    {
        ssr: false,
    }
);
export const TagIcon = dynamic(() => import('@components/icons/sidebar/tags').then(({ TagIcon }) => TagIcon), {
    ssr: false,
});
export const TypesIcon = dynamic(() => import('@components/icons/sidebar/types').then(({ TypesIcon }) => TypesIcon), {
    ssr: false,
});
export const UsersIcon = dynamic(() => import('@components/icons/sidebar/users').then(({ UsersIcon }) => UsersIcon));
export const ShippingsIcon = dynamic(
    () => import('@components/icons/sidebar/shippings').then(({ ShippingsIcon }) => ShippingsIcon),
    {
        ssr: false,
    }
);
export const WithdrawIcon = dynamic(
    () => import('@components/icons/sidebar/withdraw').then(({ WithdrawIcon }) => WithdrawIcon),
    {
        ssr: false,
    }
);
export const TaxesIcon = dynamic(() => import('@components/icons/sidebar/taxes').then(({ TaxesIcon }) => TaxesIcon), {
    ssr: false,
});
export const CalendarIcon = dynamic(
    () => import('@components/icons/sidebar/calendar-icon').then(({ CalendarIcon }) => CalendarIcon),
    {
        ssr: false,
    }
);
export const VendorIcon = dynamic(
    () => import('@components/icons/sidebar/vendor-icon').then(({ VendorIcon }) => VendorIcon),
    {
        ssr: false,
    }
);
export const CoinIcon = dynamic(() => import('@components/icons/coin-icon').then(({ CoinIcon }) => CoinIcon), {
    ssr: false,
});
export const SystemIcon = dynamic(
    () => import('@components/icons/sidebar/system').then(({ SystemIcon }) => SystemIcon),
    {
        ssr: false,
    }
);
export const JobHistoryIcon = dynamic(
    () => import('@components/icons/sidebar/job-history').then(({ JobHistoryIcon }) => JobHistoryIcon),
    {
        ssr: false,
    }
);
export const UserAuditIcon = dynamic(
    () => import('@components/icons/sidebar/user-audit').then(({ UserAuditIcon }) => UserAuditIcon),
    {
        ssr: false,
    }
);
export const LocationEventIcon = dynamic(
    () => import('@components/icons/sidebar/location-event').then(({ LocationEventIcon }) => LocationEventIcon),
    {
        ssr: false,
    }
);
export const HashTagIcon = dynamic(
    () => import('@components/icons/sidebar/hash-tag').then(({ HashTagIcon }) => HashTagIcon),
    {
        ssr: false,
    }
);
export const SkipDateIcon = dynamic(
    () => import('@components/icons/sidebar/skip-date-icon').then(({ SkipDateIcon }) => SkipDateIcon),
    {
        ssr: false,
    }
);
export const SlotIcon = dynamic(() => import('@components/icons/sidebar/slot-icon').then(({ SlotIcon }) => SlotIcon), {
    ssr: false,
});
export const NotificationIcon = dynamic(
    () => import('@components/icons/sidebar/notification-icon').then(({ NotificationIcon }) => NotificationIcon),
    {
        ssr: false,
    }
);
export const UserPortalIcon = dynamic(
    () => import('@components/icons/sidebar/user-portal-icon').then(({ UserPortalIcon }) => UserPortalIcon),
    {
        ssr: false,
    }
);
export const SupervisorsIcon = dynamic(
    () => import('@components/icons/sidebar/supervisors-icon').then(({ SupervisorsIcon }) => SupervisorsIcon),
    {
        ssr: false,
    }
);
export const BGISIcon = dynamic(() => import('@components/icons/sidebar/bgis-icon').then(({ BGISIcon }) => BGISIcon), {
    ssr: false,
});
