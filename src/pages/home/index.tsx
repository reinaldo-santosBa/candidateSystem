import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { Menu } from "../../components/menu";

export const Home: React.FC = () => {
	const { id } = useParams();
	return (
		<Container>
			<Menu>
				{id}
			</Menu>
		</Container>
	);
};