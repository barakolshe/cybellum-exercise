import AuthLayout from 'layouts/AuthLayout';
import DashboardLayout from 'layouts/DashboardLayout';
import Intro from 'pages/intro/Intro';
import Login from 'pages/login/Login';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { RootState } from '../app/store';
import ProtectedRoute from './ProtectedRoute';

interface RouterProps {}

const isAuthenticated = (accessToken: string | undefined) => {
  return accessToken !== undefined;
};

const Router: FC<RouterProps> = () => {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute condition={() => isAuthenticated(accessToken)} redirectUrl="/login">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Intro />} />
      </Route>
      <Route path="/login" element={<AuthLayout />}>
        <Route path="" element={<Login />} />
      </Route>
      <Route path="*" element={<Navigate to={isAuthenticated(accessToken) ? '/' : '/login'} />} />
    </Routes>
  );
};

export default Router;
