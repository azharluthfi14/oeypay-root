import type { ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

import { IcArrowLeft } from '@/assets';

type HeaderNavigationProps = {
  title: string;
  rightContent?: ReactNode;
};

export const HeaderNavigation = ({
  title,
  rightContent = false,
}: HeaderNavigationProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={`mb-6 flex items-center bg-slate-100 py-2 ${
        rightContent ? 'justify-between' : 'relative'
      }`}>
      <div onClick={goBack} className="cursor-pointer">
        <IcArrowLeft className="text-lightGray" />
      </div>
      <div
        className={` ${
          !rightContent && `absolute left-[45%]`
        } text-sm font-semibold text-black`}>
        {title}
      </div>
      {rightContent && <div>{rightContent}</div>}
    </div>
  );
};
