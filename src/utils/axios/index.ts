import axios, { type AxiosRequestConfig } from 'axios';

class AxiosUtil {
    public static async request<T>(config: AxiosRequestConfig) {
        const response = await axios<T>({ withCredentials: true, ...config });
        return response.data;
    }
}

export default AxiosUtil;
