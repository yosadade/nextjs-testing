import Image from 'next/image';
import Card from '../../../../components/Card';
import ILPassword from '../../../../../public/assets/images/ILPassword.png';
import { Button, TextField } from '@mui/material';

const ChangePasswordView = () => {
  const handleChangePassword = () => {
    console.log('press');
  };
  return (
    <Card
      breadcumb
      className='w-full h-full justify-between'
    >
      <h3 className='text-[#0F1B40] text-2xl mt-4 leading-7 font-semibold mb-2'>
        Change Password
      </h3>
      <Image
        alt='password'
        src={ILPassword}
        width={150}
        height={150}
        className='mt-[50px]'
      />
      <h1 className='text-[#3F3F3F] text-[16px] leading-7 font-semibold mt-[30px]'>
        To make your account secure make sure that your password
      </h1>
      <div className='mt-[10px]'>
        <li className='text-[#3F3F3F] text-[16px] leading-7 font-normal'>
          Is at least 8 characters long
        </li>
        <li className='text-[#3F3F3F] text-[16px] leading-7 font-normal'>
          Must include letter, symbol & number
        </li>
      </div>
      <div
        style={{
          marginTop: '29px'
        }}
      >
        <TextField
          id='outlined-required'
          label='Old Password'
          placeholder='Enter your old password'
          className='w-3/5 h-10'
          size='small'
        />
        <div className='h-8' />
        <TextField
          id='outlined-required'
          label='New Password'
          placeholder='Enter your new password'
          type='password'
          className='w-3/5'
          size='small'
        />
        <div className='h-8' />
        <TextField
          id='outlined-required'
          label='Confirm Password'
          placeholder='Enter your confirm password'
          type='password'
          className='w-3/5'
          size='small'
        />
      </div>
      <div className='h-10' />
      <Button
        variant='contained'
        className='rounded-full w-[184px] py-2.5 my-auto'
        style={{
          backgroundColor: '#1695C9'
        }}
        color='primary'
        onClick={handleChangePassword}
      >
        CHANGE PASSWORD
      </Button>
    </Card>
  );
};

export { ChangePasswordView };
