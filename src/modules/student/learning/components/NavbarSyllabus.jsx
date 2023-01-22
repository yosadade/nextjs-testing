import { NotificationsNone } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  ListItemNavbarSyllabus,
  subMenuLearning
} from './ListItemNavbarSyllabus';
import { getSafe } from '../../../../../utils';

const NavbarSyllabus = () => {
  const { query } = useRouter();
  const { path } = query;
  const [time, setTime] = useState('');
  const [active, setActive] = useState(0);
  const router = useRouter();
  const { main_path } = router.query;

  return (
    <div className='w-full bg-white px-8 py-7 flex justify-between items-center'>
      <div className='menu-navbar flex items-center justify-start gap-5'>
        {getSafe(() => subMenuLearning, [])?.map((item, idx) => {
          return (
            <ListItemNavbarSyllabus
              key={idx}
              data={item}
              // path={path}
              onClick={() => setActive(idx)}
              active={item.id === active}
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

export default NavbarSyllabus;
