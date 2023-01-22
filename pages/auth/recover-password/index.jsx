import styles from '../../../styles/ForgotPassword.module.css';
import Image from 'next/image';
import { style } from '@mui/system';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material';
import {
  CheckCircleOutlineRounded,
  RadioButtonUncheckedRounded
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RecoverPassword = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/auth/login');
  };
  return (
    <div
      className={`min-w-full min-h-screen login_bg flex justify-center items-center ${styles.login_bg}`}
    >
      <div
        className='rounded-xl bg-white shadow-2xl lg:flex lg:py-[89px] xl:flex xl:py-[89px] 2xl:flex 2xl:py-[89px]'
        style={{
          width: '1000px',
          padding: '89px 0'
        }}
      >
        <div className='flex flex-col justify-center'>
          <Image
            src={'/assets/images/ILlogin.png'}
            width={400}
            height={298}
            alt='login_image'
          />
        </div>
        <div
          style={{
            padding: '0 100px',
            flex: 1
          }}
        >
          <h1 className={styles.title}>We Got You!</h1>
          <p className={styles.subTitle}>Please enter your new password</p>

          <form
            style={{
              marginTop: '38px'
            }}
          >
            <TextField
              id='outlined-required'
              label='Email Address'
              placeholder='Enter your email address'
              className='w-full'
              size='small'
              style={{
                marginBottom: '24px',
                fontSize: '14px'
              }}
            />
            <TextField
              id='outlined-required'
              label='Confirm Password'
              placeholder='Please confirm your new password'
              type='password'
              className='w-full mb-[12px] lg:mb-[212px] xl-mb-[212px] 2xl:mb-[212px]'
              size='small'
            />

            <Button
              variant='contained'
              className='rounded-full w-full py-2.5'
              style={{
                marginTop: '39px',
                backgroundColor: '#1695C9'
              }}
              color='primary'
              onClick={handleClick}
            >
              RESET PASSWORD
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
