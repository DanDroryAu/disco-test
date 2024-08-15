import PageLayout from '@/components/PageLayout';
import { Outlet, useNavigate } from 'react-router-dom';

//todo: some smart fade transition.
export const DefaultLayout = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <PageLayout onHomeClick={handleHomeClick}>
      <Outlet />
    </PageLayout>
  );
};
