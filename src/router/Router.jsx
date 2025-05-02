// src/router/router.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { PATH } from './routePath';
import { KioskStartPage, LoginPage, MenuPage } from '@pages';
import { SelectPage } from '@/pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginPage />} />
      <Route path={PATH.Login} element={<LoginPage />} />
      <Route path={PATH.KioskStart} element={<KioskStartPage />} />
      <Route path={PATH.Menu} element={<MenuPage />} />
      <Route path={PATH.Select} element={<SelectPage />} />
    </Route>,
  ),
);
