import {
  ICInformation,
  ICInformation_active,
  ICLearning,
  ICLearning_active,
  ICManagemen_active,
  ICManajemen,
  ICSetting,
  ICSetting_active
} from '../../../../public/assets';

import Link from 'next/link';
import { Grid } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { showLearningMaterial } from '../../../features/syllabus/learningMaterialSlice';

const menuStudent = [
  {
    iconInactive: ICManajemen,
    iconActive: ICManagemen_active,
    title: 'Management',
    path: 'management'
  },
  {
    iconInactive: ICLearning,
    iconActive: ICLearning_active,
    title: 'Learning',
    path: 'learning'
  },
  {
    iconInactive: ICInformation,
    iconActive: ICInformation_active,
    title: 'Information',
    path: 'information'
  },
  {
    iconInactive: ICSetting,
    iconActive: ICSetting_active,
    title: 'Settings',
    path: 'settings'
  }
];

const MenuItem = ({ data, active }) => {
  const dispatch = useDispatch();
  const handleResetNavbarSyllabus = () => {
    dispatch(showLearningMaterial({ isVisible: false }));
  };
  return (
    <Grid
      item
      xs={6}
      sx={{
        marginTop: '50px'
      }}
    >
      <Link
        onClick={handleResetNavbarSyllabus}
        href={`/student/${data.path}`}
        className={`flex flex-col items-center cursor-pointer item-link ${
          active ? 'sidebar-item-active' : ''
        }`}
      >
        <Image
          src={active ? data.iconActive : data.iconInactive}
          width={50}
          height={50}
          alt={'menu-icon'}
          className='duration-300 menu-icon p-2.5 rounded-2xl mb-2.5'
        />
        <span className='text-subtitle font-normal text-sm'>{data.title}</span>
      </Link>
    </Grid>
  );
};

export { menuStudent, MenuItem };
MenuItem.propTypes = {
  data: PropTypes.object,
  active: PropTypes.bool
};
