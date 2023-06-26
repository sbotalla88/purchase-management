import axios, { AxiosInstance } from 'axios';
import { storage } from '../localforage';

/**
 *
 * @param baseURL
 * @param headers
 * @returns
 */
//eslint-disable-next-line
export const createAxiosInstance = (headers: { [index: string]: any } = {}, baseURL = '/api/admin'): AxiosInstance => {
    /**
     * Create Axios Instance
     */
    const axiosInstance = axios.create({
        baseURL,
        headers: {
            tzoffset: `${new Date().getTimezoneOffset()}`,
            ...headers,
        },
    });

    axiosInstance.interceptors.request.use((config) => {
        /* ----------------------------- API Call Start ----------------------------- */
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => {
            /* ------------------------------ API Call End ------------------------------ */
            return response;
        },
        (error) => {
            if (error?.response?.status >= 400 && error.config.url !== 'user/login') {
                if (error?.response?.status === 401) {
                    storage.clear();
                    setTimeout(() => {
                        window.location.replace('/login');
                    }, 5000);
                }
                if (error?.response?.status === 403) {
                    storage.clear();
                    window.location.replace('/');
                }
            }
            throw error;
        }
    );

    return axiosInstance;
};

export const apiClient = createAxiosInstance({ authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_TOKEN}` });
