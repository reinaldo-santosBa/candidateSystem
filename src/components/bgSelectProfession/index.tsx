import React from "react";
import * as S from "./styles";
import { Container } from "../container";

interface IChildren {
    children: React.ReactNode
}

export const BgSelect: React.FC<IChildren> = ({children}) => {
	return (
		<Container>
			<S.Image>
				<S.BgOpacity>
					{children}
				</S.BgOpacity>
			</S.Image>
		</Container>
	);
};

