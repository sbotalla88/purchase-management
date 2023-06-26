import axios, { AxiosInstance } from 'axios';

import { REAL_SUITE_HOST } from '../helpers';

/**
 *
 * @param baseURL
 * @param headers
 * @returns
 */
const createAxiosInstance = (headers: { [index: string]: any } = {}, baseURL = REAL_SUITE_HOST): AxiosInstance => {
    /**
     * Create Axios Instance
     */
    const axiosInstance = axios.create({
        baseURL,
        headers: {
            ...headers,
        },
    });

    axiosInstance.interceptors.request.use((config) => {
        /* ----------------------------- API Call Start ----------------------------- */
        return config;
    });

    axiosInstance.interceptors.response.use((response) => {
        /* ------------------------------ API Call End ------------------------------ */
        return response;
    });

    return axiosInstance;
};

export default createAxiosInstance;
