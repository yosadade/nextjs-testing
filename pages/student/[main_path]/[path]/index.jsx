import { useRouter } from 'next/router';
import { useMemo } from 'react';
import {
  informationRoutes,
  learningRoutes,
  MainTemplate,
  managementRoutes,
  settingsRoutes
} from '../../../../src';

const Index = () => {
  const router = useRouter();
  const { path, main_path } = router.query;

  const getRouter = () => {
    switch (main_path) {
      case 'management':
        return managementRoutes(path);
      case 'settings':
        return settingsRoutes(path);
      case 'information':
        return informationRoutes(path);
      case 'learning':
        return learningRoutes(path);
      default:
        break;
    }
  };

  const sideBarRight = useMemo(() => {
    return path !== 'dashboard';
  }, [path]);
  return (
    <MainTemplate rightBarActive={sideBarRight}>{getRouter()}</MainTemplate>
  );
};

export default Index;
