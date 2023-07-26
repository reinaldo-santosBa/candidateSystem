/* eslint-disable linebreak-style */
import React, { useState } from "react";
import * as S from "./styles";
import { ModalSelect } from "../modalSelectProfession";

export const ButtonSelect: React.FC = () => {
	const [opacity, setOpacity] = useState(0);
	const [zIndex, setZIndex] = useState(0);
	const [btnText, setBtnText] = useState("Escolha o processo seletivo");
	return (
		<S.AuxAlign>
			<S.AreaButton
				onClick={
					() => {
						if (opacity === 1) {
							setOpacity(0);
							setZIndex(-100);
						} else {
							setOpacity(1);
							setZIndex(0);
						}
					}
				}
			>
				<p>{btnText}</p>
			</S.AreaButton>
			<ModalSelect
				setOpacity={setOpacity}
				opacity={opacity}
				setZIndex={setZIndex}
				zIndex={zIndex}
				setBtnText={setBtnText}
			/>
		</S.AuxAlign>
	);
};