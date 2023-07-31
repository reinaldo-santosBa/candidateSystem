import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { SelectProfession } from "./pages/selectProfession";
import { Home } from "./pages/home";
import { AllCandidates } from "./pages/allCandidates";
import { SelectedCandidate } from "./pages/selectedCandidate";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SelectProfession/>
	},
	{
		path: "/home/:id",
		element: <Home/>
	},
	{
		path: "/AllCandidates/:id",
		element: <AllCandidates />
	},
	{
		path: "/SelectedCandidate/:id/",
		element: <SelectedCandidate />
	}
]);

export const Router:React.FC = () => {
	return (
		<RouterProvider router={router} />
	);
};
