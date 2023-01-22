import { NotificationsNone } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSafe } from '../../../../utils';
import {
  ListItem,
  menuInformation,
  menuManagement,
  menuSettings,
  menuLearning,
  subMenuLearning
} from './menuList';

const Navbar = () => {
  const { isVisible } = useSelector((store) => store.learningMaterial);

  const { query } = useRouter();
  const { path } = query;
  const [time, setTime] = useState('');
  const router = useRouter();
  const { main_path } = router.query;

  useEffect(() => {
    const time = setInterval(() => {
      setTime(moment().format('dddd, DD MMMM YYYY, HH:mm:ss'));
    }, 1000);
    return () => clearInterval(time);
  }, []);

  const dataListItem =
    main_path === 'management'
      ? menuManagement
      : main_path === 'settings'
      ? menuSettings
      : main_path === 'information'
      ? menuInformation
      : main_path === 'learning'
      ? menuLearning
      : menuManagement;
  return (
    <div className='w-full bg-white px-8 py-7 flex justify-between items-center'>
      <div className='menu-navbar flex items-center justify-start gap-5'>
        {getSafe(() => dataListItem, []).map((item, idx) => {
          return (
            <ListItem
              key={idx}
              data={item}
              path={path}
              active={path === item.path}
            />
          );
        })}
      </div>
      <div className='notif flex justify-center items-center gap-5'>
        <span className='text-secondary text-sm'>{time}</span>
        <IconButton aria-label='notif'>
          <NotificationsNone />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
