import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';

import { OnboardWrapper } from './OnboardWrapper';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import BottomTab from '@/components/molecules/BottomTabs';
import { DiscoverPage, ExplorerPage, HomePage, LoginPage, RegisterPage } from '@/pages';
import { OnBoarding } from '@/pages/Onboarding';
import { selectNotifications } from '@/store';
import { route } from '@/utils';

const Alert = () => {
  const alerts = useSelector(selectNotifications);

  const showToast = (msg: any, type: any) => {
    if (type === 'error') {
      toast.error(msg);
    } else {
      toast.success(msg);
    }
    return null;
  };

  return (
    <>
      {alerts.map((item, i) => (
        <div key={i}>
          {showToast(item.message, item.type === 'error' ? 'error' : 'success')}
        </div>
      ))}
    </>
  );
};

const AuthLayoutPage = () => {
  return (
    <main className="mx-auto my-0 min-h-full max-w-screen-sm">
      <div className="mx-auto my-0 min-h-screen max-w-[480px] overflow-hidden overflow-x-hidden  bg-white2 pb-[66px]">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

const LayoutPage = () => {
  return (
    <main className="mx-auto my-0 min-h-full max-w-screen-sm">
      <div className="mx-auto my-0 min-h-screen max-w-[480px] overflow-x-hidden bg-white2 pb-[66px]">
        <div className="p-4">
          <Outlet />
        </div>
        <BottomTab />
      </div>
    </main>
  );
};

export const RootLayout = () => {
  route.navigate = useNavigate();
  // const onboard = localStorage.getItem('onboard');
  const isAuthenticated = true;
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Alert />
      <Routes>
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route
          element={
            <OnboardWrapper>
              <AuthLayoutPage />
            </OnboardWrapper>
          }>
          <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/explorer" element={<ExplorerPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Route>
        <Route
          element={
            <OnboardWrapper>
              <LayoutPage />
            </OnboardWrapper>
          }>
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/explorer" element={<ExplorerPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
