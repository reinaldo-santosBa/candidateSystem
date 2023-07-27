import React from "react";
import { useParams } from "react-router-dom";

export const Home: React.FC = () => {
	const { id } = useParams();
	return (
		<>{id}</>
	);
};