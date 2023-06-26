import axios from 'axios';
import { storage } from '../localforage';

/* eslint-disable */
const axiosClient = (_props: any = {}) => {
    /**
     * Create Axios Instance
     */
    const axiosInstance = axios.create({
        baseURL: `/api/admin`,
        withCredentials: true,
        headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_TOKEN}`,
            tzoffset: `${new Date().getTimezoneOffset()}`,
        },
    });

    axiosInstance.interceptors.request.use((config) => {
        /* ----------------------------- API Call Start ----------------------------- */
        // console.log('[===== Started API Call =====]');
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => {
            /* ------------------------------ API Call End ------------------------------ */
            // console.log('[===== Ended API Call =====]');
            return response;
        },
        (error) => {
            if (error?.response?.status >= 400 && error.config.url !== 'user/login') {
                if (error?.response?.status === 401) {
                    storage?.clear();
                }
                if (error?.response?.status === 403) {
                    storage?.clear();
                }
            }
            throw error;
        }
    );

    return axiosInstance;
};

export default axiosClient;
