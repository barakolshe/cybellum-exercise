import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router';

interface ProtectedRouteProps {
  condition: () => boolean;
  redirectUrl: string;
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ condition, redirectUrl, children }) => {
  if (!condition()) {
    return <Navigate to={redirectUrl} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
