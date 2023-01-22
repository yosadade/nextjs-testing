import styles from '../../../styles/Login.module.css';
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

const Login = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/student/management/dashboard');
  };
  const handleForgotPassword = () => {
    router.push('/auth/forgot-password');
  };
  return (
    <div
      className={`min-w-full min-h-screen login_bg flex justify-center items-center ${styles.login_bg}`}
    >
      <div className='rounded-xl bg-white shadow-2xl w-[1000px] py-[20px] px-[0px] lg:flex lg:py-[89px] xl:flex xl:py-[89px] 2xl:flex 2xl:py-[89px]'>
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
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subTitle}>Please sign in to continue</p>

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
              label='Password'
              placeholder='Please enter your password'
              type='password'
              className='w-full'
              size='small'
              style={{
                marginBottom: '40px'
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<RadioButtonUncheckedRounded />}
                  checkedIcon={<CheckCircleOutlineRounded />}
                />
              }
              label={
                <Typography
                  style={{
                    color: '#808080'
                  }}
                >
                  Remember me
                </Typography>
              }
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
              Login
            </Button>

            <p className={styles.forgot + ' text-center'}>
              Forgot your password?{' '}
              <Link href='/auth/forgot-password'>Reset Here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
