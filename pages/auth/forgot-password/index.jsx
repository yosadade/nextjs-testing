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

const ForgotPassword = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/auth/recover-password');
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
          <h1 className={styles.title}>Forgot your password?</h1>
          <p className={styles.subTitle}>
            Don’t worry! Please enter your email to reset your pasword
          </p>

          <form
            style={{
              marginTop: '38px'
            }}
          >
            <TextField
              id='outlined-required'
              label='Email Address'
              placeholder='Enter your email address'
              className='w-full mb-[12px] lg:mb-[212px] xl-mb-[212px] 2xl:mb-[212px]'
              size='small'
              style={{
                fontSize: '14px'
              }}
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
              Send Email
            </Button>

            <p className={styles.forgot + ' text-center'}>
              Remembered your password?{' '}
              <Link href='/auth/login'>Login Here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
