import React, { useContext } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";

export const BtnGoMainPage: React.FC = () => {
	const {
		idProfession,
	} = useContext(AuthContext);
	return (
		<S.AreaBtnGoHome>
			{
				idProfession > 0
					? <Link className="textBtn" to={"/home/" + idProfession}>Entrar</Link>
					: <p className="textBtn" onClick={()=>alert("Escolha um processo seletivo")}>Entrar</p>
			}
		</S.AreaBtnGoHome>
	);
};