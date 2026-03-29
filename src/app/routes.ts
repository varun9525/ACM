import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Contact from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "events", Component: Events },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
    ],
  },
]);
