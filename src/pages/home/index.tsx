import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import { ContentHome } from "../../components/contentHome";

export const Home: React.FC = () => {
	const { id } = useParams();
	return (
		<Container>
			<Menu
				idMenu={1}
				idProfession={Number(id)}
			>
				<Logo/>
			</Menu>
			<ContentHome
				id={Number(id)}
			/>
		</Container>
	);
};