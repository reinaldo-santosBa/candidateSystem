import React from "react";
import * as S from "./styles";
import imgLogo from "../../assets/logo.png";

export const Logo : React.FC = ( ) => {
	return (
		<S.Logo
			src={imgLogo}
		/>
	);
};

