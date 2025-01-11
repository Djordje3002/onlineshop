import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import AppLayout from './AppLayout.jsx';
// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import HomePage from './pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/', // Matches the base route
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

