import axios, { AxiosRequestConfig } from 'axios';

export const getNotifications = async (id: Number, headers: AxiosRequestConfig<any>['headers'] | undefined) => {
  const response = await axios.get(`${process.env.REACT_APP_JSON_SERVER_API_URL}/notifications/${id}`, { headers: { ...headers } });
  return response.data;
};

export const getApprovedNotification = (headers: AxiosRequestConfig<any>['headers'] | undefined) => {
  return getNotifications(1, headers);
};
