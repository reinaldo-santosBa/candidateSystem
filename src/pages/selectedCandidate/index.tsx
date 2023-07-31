import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";

export const SelectedCandidate: React.FC = () => {
	const { id,idCandidate } = useParams();
	return (
		<Container>
			<Menu
				idMenu={2}
				idProfession={Number(id)}
			>
				<Logo/>
			</Menu>
		</Container>
	);
};