import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import AppLayout from './AppLayout.jsx';
// router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import HomePage from './pages/HomePage.jsx';
import store from './store/store.js';

import { Provider } from 'react-redux';
// import { ClerkProvider } from '@clerk/clerk-react'
import SingleProductPage from './pages/SingleProductPage.jsx';
import ErrorPage from './utils/ErrorPage.jsx';
import CartPage from './pages/CartPage.jsx'
// Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Add your Clerk Publishable Key to the .env.local file')
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/', // Matches the base route
        element: <HomePage />,
      },
      {
        path: '/singleProduct/:id',
        element: <SingleProductPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      }
    ], 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
        <RouterProvider router={router} />
      {/* </ClerkProvider> */}
    </Provider>
  </StrictMode>
);

