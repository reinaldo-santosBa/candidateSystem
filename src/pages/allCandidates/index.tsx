import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";
import { ContentListAllCandidate } from "../../components/contentListAllCandidate";

export const AllCandidates: React.FC = () => {
	const { id } = useParams();
	return (
		<Container>
			<Menu
				idMenu={3}
				idProfession={Number(id)}
			>
				<Logo/>
			</Menu>
			<ContentListAllCandidate
				id={Number(id)}
			/>
		</Container>
	);
};