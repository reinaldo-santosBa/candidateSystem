import React, { SetStateAction, useEffect, useState } from "react";
import * as S from "./styles";

interface IStyle {
	opacity: number;
	zIndex: number;
}

interface IConst {
	stylesContainer: IStyle;
	setStylesContainer: (value: SetStateAction<IStyle>)=> void;

}

export const ModalSelect: React.FC<IConst> = ({ stylesContainer, setStylesContainer }) => {
	const arrayProfesesion = [
		{
			id: 1,
			name: "Front - End",
		},
		{
			id: 2,
			name: "Back - End",
		},
		{
			id: 3,
			name: "Full Stack",
		},
		{
			id: 4,
			name: "Designer Figma",
		},
		{
			id: 5,
			name: "Banco de Talentos"
		},
	];
	const [profession, setProfession] = useState("Digite o processo selectivo");
	const [professions, setProfessions] = useState(arrayProfesesion);
	const [professionsSearch,] = useState(arrayProfesesion);

	useEffect(() => {
		if (profession !== "Digite o processo selectivo") {
			
			setProfessions(
				professionsSearch.filter(item => {
					const name = item.name.toLowerCase();
					if (name.indexOf(profession) > -1) {
						return true;
					}
					return false;
				})
			);
		} 
	}, [profession]);

	return (
		<S.ContainerModal
			opacity={stylesContainer.opacity}
			zIndex={stylesContainer.zIndex}
		>
			<S.AreaModal>
				<S.IconClose />
				<S.Input
					type="text"
					value={profession}
					onChange={(e) => setProfession(e.target.value)}
				/>
				{
					professions.map((profession) => {
						return (
							<S.ItemList
								onClick={
									() => {
										if (stylesContainer.opacity === 1) {
											setStylesContainer({
												opacity: 0,
												zIndex: -100
											});
										} else {
											setStylesContainer({
												opacity: 1,
												zIndex: 0
											});
										}
									}
								}
								key={profession.id}
							>
								{profession.name}
							</S.ItemList>
						);
					})
				}
			</S.AreaModal>
		</S.ContainerModal>
	);
};

