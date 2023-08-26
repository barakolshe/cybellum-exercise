import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "helpers/baseQuery";
import { NotificationsResponseType } from "./notifications.interface";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: baseQuery("/"),
  endpoints: (builder) => ({
    notification: builder.query<NotificationsResponseType, number>({
      query: (id) => ({
        url: `/notifications/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useNotificationQuery } = notificationApi;
