import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MainTemplate } from '../../../src';
import Learning from '../../../src/modules/student/learning';

const Index = () => {
  const router = useRouter();
  const { main_path } = router.query;
  useEffect(() => {
    main_path === 'management'
      ? router.push('management/dashboard')
      : main_path === 'settings'
      ? router.push('settings/my-profile')
      : main_path === 'information'
      ? router.push('information/global-noticeboard')
      : main_path === 'learning'
      ? router.push('learning/overview')
      : '';
  }, [router, main_path]);

  return (
    <MainTemplate>
      {/* {main_path === 'learning' && <Learning />} */}
    </MainTemplate>
  );
};

export default Index;
