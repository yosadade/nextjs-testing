import { Avatar, Paper } from '@mui/material';

const CardUser = (data) => {
  return (
    <Paper
      className='flex flex-col items-center p-3 gap-2.5'
      style={{
        borderRadius: '20px',
        width: 232
      }}
      variant='outlined'
    >
      <Avatar
        src='/assets/images/avatar.png'
        alt='avatar'
        sx={{
          width: '150px',
          height: '150px'
        }}
      />
      <div className='user-info flex flex-col items-center'>
        <span className='text-semibold text-title text-base'>Mary Jane</span>
        <span className='text-sm text-secondary'>000012345</span>
      </div>
    </Paper>
  );
};

export default CardUser;
