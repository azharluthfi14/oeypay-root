import { NavLink } from 'react-router-dom';

import { IcBalance, IcDiscover, IcTransaction } from '@/assets';
import { colors, navigation, navigationName } from '@/constants';

const handleIcon = (name: string, active: boolean) => {
  switch (name) {
    case navigationName.BALANCE:
      return (
        <>
          <IcBalance color={active ? colors.Yellow : colors.GraySecondary} />
        </>
      );
    case navigationName.TRANSACTION:
      return (
        <>
          <IcTransaction color={active ? colors.Yellow : colors.GraySecondary} />
        </>
      );
    case navigationName.DISCOVER:
      return (
        <>
          <IcDiscover color={active ? colors.Yellow : colors.GraySecondary} />
        </>
      );
    default:
      return;
  }
};
export default function BottomTab() {
  return (
    <div className="font-base fixed bottom-0 z-[2] m-0 flex w-full max-w-[480px] list-none rounded-t-[30px] bg-white p-3.5 text-center align-middle font-semibold leading-[13px] no-underline">
      {navigation.map(item => (
        <NavLink className="grid place-items-center gap-1 w-full" to={item.route} key={item.id}>
          {({ isActive }) => (
            <>
              {handleIcon(item.name.toLowerCase(), isActive)}
              <span className={` ${isActive ? 'text-yellow font-semibold' : 'text-gray2'} text-xs`}>
                {item.name}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}
