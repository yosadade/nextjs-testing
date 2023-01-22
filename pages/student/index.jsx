import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/student') {
      // router.back();
    }
  }, [router]);
  return <></>;
};

export default Index;
