import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { SelectProfession } from "./pages/selectProfession";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SelectProfession/>
	}
]);

export const Router:React.FC = () => {
	return (
		<RouterProvider router={router} />
	);
};
