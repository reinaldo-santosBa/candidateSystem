/* eslint-disable linebreak-style */
import React, { SetStateAction, useEffect, useState, useContext } from "react";
import * as S from "./styles";
import { AuthContext } from "../../context/context";

interface IProps {
	opacity:number;
	setOpacity: React.Dispatch<SetStateAction<number>>;
	zIndex:number;
	setZIndex:React.Dispatch<SetStateAction<number>>;
	setBtnText: React.Dispatch<SetStateAction<string>>;
	display: string;
	setDisplay: React.Dispatch<SetStateAction<string>>;
}

export const ModalSelect: React.FC<IProps> = (
	{ 
		opacity,
		setOpacity,
		setBtnText,
		display,
		zIndex,
		setZIndex
	}
) => {
	const {
		setId,
		setName
	} = useContext(AuthContext);
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
	const [profession, setProfession] = useState("");
	const [professions, setProfessions] = useState(arrayProfesesion);
	const [professionsSearch,] = useState(arrayProfesesion);

	useEffect(() => {
		if (profession !== "") {
			
			setProfessions(
				professionsSearch.filter(item => {
					const name = item.name.toLowerCase();
					if (name.indexOf(profession.toLowerCase()) > -1) {
						return true;
					}
					return false;
				})
			);
		} else {
			setProfessions(arrayProfesesion);
		}
	}, [profession]);

	return (
		<S.ContainerModal
			zIndex={zIndex}
			display={display}
			opacity={opacity}
		>
			<S.AreaModal>
				<S.IconClose 
					onClick={
						()=>{
							setOpacity(0);
						}
					}
				/>
				<S.Input
					type="text"
					value={profession}
					placeholder="Digite o processo seletivo"
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
											setId(profession.id);
											setName(profession.name);
											setZIndex(-100);
										} else {
											setOpacity(1);
											setId(profession.id);
											setName(profession.name);
											setZIndex(100);
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

