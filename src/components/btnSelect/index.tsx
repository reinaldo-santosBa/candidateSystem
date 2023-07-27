/* eslint-disable linebreak-style */
import React, { useState } from "react";
import * as S from "./styles";
import { ModalSelect } from "../modalSelectProfession";

export const ButtonSelect: React.FC = () => {
	const [opacity, setOpacity] = useState(0);
	const [zIndex, setZIndex] = useState(0);
	const [btnText, setBtnText] = useState("Escolha o processo seletivo");
	const [display,setDisplay] = useState("none");
	
	return (
		<>
			<S.AreaButton
				onClick={
					() => {
						if (opacity === 1) {
							setOpacity(0);
							setDisplay("none");
							setZIndex(-100);
						} else {
							setOpacity(1);
							setDisplay("flex");
							setZIndex(100);
						}
					}
				}
			>
				<p>{btnText}</p>
			</S.AreaButton>
			<ModalSelect
				setDisplay={setDisplay}
				display={display}
				setOpacity={setOpacity}
				opacity={opacity}
				setZIndex={setZIndex}
				zIndex={zIndex}
				setBtnText={setBtnText}
			/>
		</>
	);
};