import React, { useState } from "react";
import * as S from "./styles";
import { ModalSelect } from "../modalSelectProfession";

export const ButtonSelect: React.FC = () => {
	const [stylesContainer, setStylesContainer] = useState({
		opacity: 0,
		zIndex: -100
	});
	return (
		<S.AuxAlign>
			<S.AreaButton
				onClick={
					() => {
						setStylesContainer({
							opacity: 1,
							zIndex: 0
						});
					}
				}
			>
				<p>Escolha o processo seletivo </p>
			</S.AreaButton>
			<ModalSelect
				stylesContainer={stylesContainer}
				setStylesContainer={stylesContainer}
			/>
		</S.AuxAlign>
	);
};