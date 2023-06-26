import localforage from 'localforage';

export const storage = localforage.createInstance({ name: '@clearsite_store' });
