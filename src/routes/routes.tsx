import Layout from "@layout/Layout.tsx";
import NotFounded from "@pages/NotFounded/NotFounded.tsx";
import Dashboard from "@pages/Dashboard/Dashboard.tsx";
import { AppProviders } from "@context/Provider.tsx";
import Courses from "@pages/Courses/Courses.tsx";
import Books from "@pages/Books/Books.tsx";
import MeningTomorqam from "@pages/MeningTomorqam/MeningTomorqam.tsx";
import Reports from "@pages/Reports/Reports.tsx";
import Students from "@pages/Students/Students.tsx";

const routes = [
  {
    path: "/",
    element: (
      <AppProviders>
        <Layout />
      </AppProviders>
    ),
    errorElement: <NotFounded />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "mening-tomorqam",
        element: <MeningTomorqam />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "students",
        element: <Students />,
      },
    ],
  },
];

export default routes;
