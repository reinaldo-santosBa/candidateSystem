import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { SelectProfession } from "./pages/selectProfession";
import { Home } from "./pages/home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SelectProfession/>
	},
	{
		path: "/home/:id",
		element: <Home/>
	}
]);

export const Router:React.FC = () => {
	return (
		<RouterProvider router={router} />
	);
};
