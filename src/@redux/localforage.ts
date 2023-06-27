import localforage from 'localforage';

export const storage = localforage.createInstance({ name: '@alpine_purchase_order_store' });
