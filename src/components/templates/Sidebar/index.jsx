import { Avatar, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getSafe } from '../../../../utils';
import { menuStudent, MenuItem } from './menuList';

const Sidebar = () => {
  const { query } = useRouter();
  const router = useRouter();
  const { main_path } = query;

  const handleLogout = () => {
    router.push('/auth/login');
  };

  return (
    <div
      className='bg-white h-screen max-h-screen text-center flex flex-col items-center'
      style={{
        padding: '30px 45px'
      }}
    >
      <div className='w-[80px] bg-gray-300 h-[80px]'></div>
      <div className='mt-6 justify-center items-center'>
        <h3 className='text-[#808080] text-2xl leading-7 font-semibold text-semibold mb-5'>
          SMP 308
        </h3>
        <p className='text-subtitle text-sm leading-5 font-normal'>
          JL Iskandarsyah No 7, Kebayoran Baru, Jakarta Selatan
        </p>
      </div>
      <div className='profile flex flex-col items-center mt-7 '>
        <Avatar
          src='/assets/images/avatar.png'
          alt='avatar'
          sx={{
            width: '100px',
            height: '100px'
          }}
        />
        <h3 className='text-secondary text-lg mt-2.5 leading-7 font-semibold text-semibold mb-1'>
          Angus Young
        </h3>
        <span className='text-subtitle text-sm leading-5 font-normal'>
          2005-STE-0250
        </span>
      </div>
      <div className='menu'>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {getSafe(() => menuStudent, []).map((item, idx) => (
            <MenuItem
              data={item}
              key={idx}
              idx={idx}
              active={main_path === item.path}
            />
          ))}
        </Grid>
      </div>
      <div className='footer-sidebar flex-1 flex flex-col justify-end'>
        <div className='sponsor mb-12 flex flex-col items-center'>
          <span className='italic text-subtitle text-xs'>Powered By</span>
          <Image
            src={'/assets/images/keskola.png'}
            width={150}
            height={45}
            alt='sponsor'
          />
        </div>
        <div className='mt-0.5'>
          <Button
            variant='contained'
            className='text-semibold text-lg bg-turquoise rounded-full'
            style={{
              padding: '10px 53px'
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
