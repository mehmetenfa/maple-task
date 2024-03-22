import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/index.jsx";
import Tasks from "../pages/tasks/index.jsx";
import Checklist from "../pages/checklist/index.jsx";
import Visit from "../pages/visit/index.jsx";
import Shop from "../pages/shop/index.jsx";
import Goal from "../pages/goal/index.jsx";
import Analytics from "../pages/analytics/index.jsx";
import Settings from "../pages/settings/index.jsx";

const routes = createBrowserRouter([
   {
	  path: "/",
	  element: <MainLayout />,
	  children: [
		 {
			path: '/tasks',
			element: <Tasks />
		 },
		 {
			path: '/checklist',
			element: <Checklist />
		 },
		 {
			path: '/visit',
			element: <Visit />
		 },
		 {
			path: '/shop',
			element: <Shop />
		 },
		 {
			path: '/goal',
			element: <Goal />
		 },
		 {
			path: '/analytics',
			element: <Analytics />
		 },
		 {
			path: '/settings',
			element: <Settings />
		 },
	  ]
   }
])

export default routes;
