import { createHashRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Portfolio from "./pages/Portfolio";
{/*import { Contact } from "./pages/Contact";*/}

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "portfolio", Component: Portfolio },
      {/*{ path: "contact", Component: Contact },*/}
    ],
  },
]);
