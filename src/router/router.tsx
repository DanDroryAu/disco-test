import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';
import { DefaultLayout } from '@/router/layouts/DefaultLayout';

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: routes,
  },
]);

export const Provider = () => <RouterProvider router={router} />;
