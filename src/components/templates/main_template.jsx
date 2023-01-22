import { Container, Grid } from '@mui/material';
import Navbar from './Navbar';
import RightBar from './RightBar';
import Sidebar from './Sidebar';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Learning from '../../modules/student/learning';

const MainTemplate = ({ children, rightBarActive }) => {
  const router = useRouter();
  const { main_path } = router.query;

  console.log(main_path);

  return (
    <div className='flex bg-primaryBg'>
      <div className='sidebar-wrapper'>
        <Sidebar />
      </div>
      <div className='flex flex-1 flex-col'>
        {main_path === 'learning' ? (
          <Learning />
        ) : (
          <>
            <Navbar />
            <div className='flex'>
              <div className='content-wrapper flex-1'>{children}</div>
              {rightBarActive && <RightBar />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { MainTemplate };
MainTemplate.propTypes = {
  children: PropTypes.node,
  rightBarActive: PropTypes.bool
};
