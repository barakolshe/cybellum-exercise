import { Route } from 'app/app.interface';
import AuthLayout from 'layouts/authLayout/AuthLayout';
import Error404 from 'pages/error404/Error404';
import Login from 'pages/login/Login';

export const routes: Route[] = [
  {
    path: '/login',
    element: <AuthLayout />,

    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
