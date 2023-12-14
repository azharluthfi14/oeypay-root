import React from 'react';

import type { RouteProps } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';
type PublicRouteProps = RouteProps & {
  location?: {
    state: {
      pathname: string;
    };
  };
  isAuthenticated: boolean;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ isAuthenticated, location }) => {
  if (isAuthenticated) {
    return (
      <Navigate
        to={
          location?.state && location?.state?.pathname
            ? location?.state?.pathname
            : '/home'
        }
        replace
      />
    );
  }

  return <Outlet />;
};

export default PublicRoute;
