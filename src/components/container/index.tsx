import React from "react";
import * as S from "./styles";

interface IChildren {
    children: React.ReactNode
}

export const Container: React.FC<IChildren> = ({children}) => {
	return (
		<S.Container>
			{children}
		</S.Container>
	);
};

