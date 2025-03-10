import { lazy, Suspense } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() => import("components/Layout/Layout"));
const HomePage = lazy(() => import("pages/HomePage"));
const SignIn = lazy(() => import("pages/SignIn"));

function App() {
  const element = useRoutes([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
        {
          path: "sign-in",
          element: <SignIn />,
        },
      ],
    },
  ]);
  return (
    <>
      <Suspense>{element}</Suspense>
    </>
  );
}

export default App;
