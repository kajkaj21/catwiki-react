import styles from "./App.module.scss";
import "./index.scss";
import { MainPage } from "./pages/MainPage";
import { CatPage } from "./pages/CatPage";
import { ErrorPage } from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cats/:catId",
    element: <CatPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <main className={styles.App}>
      <RouterProvider router={router} />
    </main>
  );
};

export { App };
