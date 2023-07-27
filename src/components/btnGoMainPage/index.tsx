import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const BtnGoMainPage: React.FC = () => {

	return (
		<S.AreaBtnGoHome>
			<Link className="textBtn" to="/home">About Us</Link>
		</S.AreaBtnGoHome>
	);
};