import React from "react";
import * as S from "./styles";

interface IChildren {
    children: React.ReactNode
}

export const BgSelect: React.FC<IChildren> = ({children}) => {
	return (
		<S.Image>
			<S.BgOpacity>
				{children}
			</S.BgOpacity>
		</S.Image>
	);
};

