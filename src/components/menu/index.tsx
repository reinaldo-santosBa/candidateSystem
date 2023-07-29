import React from "react";
import * as S from "./styles";
interface IChildren {
    children: React.ReactNode
}
export const Menu: React.FC<IChildren> = ({ children}) => {
	return (
		<S.AreaMenu>
			{children}
		</S.AreaMenu>
	);
};

