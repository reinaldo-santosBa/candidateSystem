/* eslint-disable linebreak-style */
import React, { SetStateAction, useEffect, useState } from "react";
import * as S from "./styles";

interface IProps {
	opacity:number;
	setOpacity: React.Dispatch<SetStateAction<number>>;
	zIndex:number;
	setZIndex:React.Dispatch<SetStateAction<number>>;
	setBtnText: React.Dispatch<SetStateAction<string>>;
}

export const ModalSelect: React.FC<IProps> = (
	{ 
		opacity,
		setOpacity,
		zIndex,
		setZIndex,
		setBtnText
	}
) => {
	const arrayProfesesion = [
		{
			id: 1,
			name: "Front-End",
		},
		{
			id: 2,
			name: "Back-End",
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
			opacity={opacity}
			zIndex={zIndex}
		>
			<S.AreaModal>
				<S.IconClose 
					onClick={
						()=>{
							setOpacity(0);
							setZIndex(-100);
						}
					}
				/>
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
										if (opacity === 1) {
											setOpacity(0);
											setZIndex(-100);
										} else {
											setOpacity(1);
											setZIndex(0);
										}
										setBtnText(profession.name);
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

