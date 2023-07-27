import React, { useContext } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";

export const BtnGoMainPage: React.FC = () => {
	const {
		id,
	} = useContext(AuthContext);
	return (
		<S.AreaBtnGoHome>
			<Link className="textBtn" to={"/home/" + id}>Entrar</Link>
		</S.AreaBtnGoHome>
	);
};