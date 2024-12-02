import React from "react";
import {
  Analytics,
  Courses,
  Finance,
  Groups,
  Lessons,
  Students,
  Teachers,
} from "../pages";

type Route = {
  label: string;
  path: string;
  element: JSX.Element;
};

export const routes: Route[] = [
  {
    label: "Analytics",
    path: "/analytics",
    element: React.createElement(Analytics),
  },
  {
    label: "Courses",
    path: "/courses",
    element: React.createElement(Courses),
  },
  {
    label: "Lessons",
    path: "/lessons",
    element: React.createElement(Lessons),
  },
  {
    label: "Teachers",
    path: "/teachers",
    element: React.createElement(Teachers),
  },
  {
    label: "Groups",
    path: "/groups",
    element: React.createElement(Groups),
  },
  {
    label: "Students",
    path: "/students",
    element: React.createElement(Students),
  },
  {
    label: "Finance",
    path: "/finance",
    element: React.createElement(Finance),
  },
];
