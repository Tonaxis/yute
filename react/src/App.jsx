import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Page from './pages/Page';
import "./assets/styles/global.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: withLayout(<Home />),
    },
    {
      path: "/:url",
      element: withLayout(<Page />),
    }
  ]);

  function withLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

  return (
    <RouterProvider router={router} />
  );
}

export default App;
