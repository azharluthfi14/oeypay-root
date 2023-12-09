import { Outlet, Route, Routes } from 'react-router-dom';

import { FinishOnboarding } from './finishedOnboarding';

import BottomTab from '@/components/molecules/BottomTabs';
import { DiscoverPage, ExplorerPage, HomePage, RegisterPage } from '@/pages';
import { OnBoarding } from '@/pages/Onboarding';

const AuthLayoutPage = () => {
  return (
    <main className="my-0 mx-auto min-h-full max-w-screen-sm">
      <div className="my-0 mx-auto min-h-screen max-w-[480px] overflow-x-hidden overflow-hidden  bg-white2 pb-[66px]">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

const LayoutPage = () => {
  return (
    <main className="my-0 mx-auto min-h-full max-w-screen-sm">
      <div className="my-0 mx-auto min-h-screen max-w-[480px] overflow-x-hidden bg-white2 pb-[66px]">
        <div className="p-4">
          <Outlet />
        </div>
        <BottomTab />
      </div>
    </main>
  );
};

export const RootLayout = () => {
  // const onboard = localStorage.getItem('onboard');
  return (
    <>
      <Routes>
        <Route path='/onboarding' element={<OnBoarding />} />
        <Route element={<FinishOnboarding><AuthLayoutPage /></FinishOnboarding>}>
          <Route path="/" element={<RegisterPage />} />
        </Route>
        <Route element={<FinishOnboarding><LayoutPage /></FinishOnboarding>}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/explorer" element={<ExplorerPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
        </Route>
      </Routes>
    </>
  );
};
