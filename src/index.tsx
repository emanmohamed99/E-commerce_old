import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';



const ShoppingCard = React.lazy(() => import("./pages/cart"));
const CategoryPage = React.lazy(() => import("./pages/Category"));
const ProductPage = React.lazy(() => import("./pages/Products"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Suspense fallback="loading please wait...">
      <ProductPage />
    </Suspense> },
      { path: "main", element:  <Suspense fallback="loading please wait...">
      <ProductPage />
    </Suspense> },
      {
        path: "main/category",
        element: (
          <Suspense fallback="loading please wait...">
          <CategoryPage/>
          </Suspense>
        ),
      },
      {
        path: "main/category/:name",
        element: (
          <Suspense fallback="loading please wait...">
            <ProductPage />
          </Suspense>
        ),
      },
   
      {
        path: "main/shoppingCard",
        element: (
          <Suspense fallback="loading please wait...">
            <ShoppingCard />
          </Suspense>
        ),
      },
      {
        path: "main/shoppingCard/:id",
        element: (
          <Suspense fallback="loading please wait...">
            <ShoppingCard />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

 
       <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  
   


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
