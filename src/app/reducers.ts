import { authApi } from "api/auth/auth";
import { notificationApi } from "api/notifications/notifications";
import userReducer from "slices/user/userSlice";

const rootReducer = {
  [authApi.reducerPath]: authApi.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
  user: userReducer,
};

export default rootReducer;
