import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import { ContentSelectedCandidate } from "../../components/contentSelectedCandidate";

export const SelectedCandidate: React.FC = () => {
	const { id } = useParams();
	return (
		<Container>
			<Menu
				idMenu={2}
				idProfession={Number(id)}
			>
				<Logo/>
			</Menu>
			<ContentSelectedCandidate id={Number(id)} />
		</Container>
	);
};