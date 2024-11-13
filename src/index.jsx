import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom"

import { App } from './pages/App/App';
import { About } from './pages/AboutPage/About';
import { Contact } from './pages/ContactPage/Contact';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { CentersPage } from './pages/CentersPage/CentersPage';
import { HomePage } from './pages/HomePage/HomePage';
import { CenterDetail } from './pages/CenterDetail/CenterDetail';

import './global.css';

const routerWithChildern = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/homepage",
      element: <HomePage/>,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/centers",
      element: <CentersPage />,
      children: [
        {
          path: "/centers/:id",
          element: <CenterDetail />,
        },
      ],
    },
  ]
}])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={routerWithChildern} />);