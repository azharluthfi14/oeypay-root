import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to={'/'} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
