import React, { Suspense } from "react";
import { AppProviders } from "@context/Provider.tsx";
import Layout from "@layout/Layout.tsx";

const NotFounded = React.lazy(() => import("@pages/NotFounded/NotFounded.tsx"));
const Dashboard = React.lazy(() => import("@pages/Dashboard/Dashboard.tsx"));
const Courses = React.lazy(() => import("@pages/Courses/Courses.tsx"));
const Books = React.lazy(() => import("@pages/Books/Books.tsx"));
const MeningTomorqam = React.lazy(
  () => import("@pages/MeningTomorqam/MeningTomorqam.tsx"),
);
const Reports = React.lazy(() => import("@pages/Reports/Reports.tsx"));
const Students = React.lazy(() => import("@pages/Students/Students.tsx"));
const routes = [
  {
    path: "/",
    element: (
      <AppProviders>
        <Layout />
      </AppProviders>
    ),
    errorElement: (
      <Suspense fallback={<p>Loading ...</p>}>
        <NotFounded />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "courses",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "books",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Books />
          </Suspense>
        ),
      },
      {
        path: "mening-tomorqam",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <MeningTomorqam />
          </Suspense>
        ),
      },
      {
        path: "reports",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Reports />
          </Suspense>
        ),
      },
      {
        path: "students",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Students />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
