import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/events", element: <Events /> },
      { path: "/events/:eventId", element: <EventDetails /> },
      { path: "/events/new", element: <NewEvent /> },
      { path: "/events/:eventId/edit", element: <EditEvent /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
