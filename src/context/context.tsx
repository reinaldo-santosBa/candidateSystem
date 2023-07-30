import React, { SetStateAction, createContext, useState } from "react";

interface IProvider {
    children: React.ReactNode
}

interface IProps {
	idProfession: number;
	setIdProfession: React.Dispatch<SetStateAction<number>>;
	att: boolean;
	setAtt: React.Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IProps>({} as IProps);

export const AuthContextProvider: React.FC<IProvider> = ({ children }) => {
	const [idProfession, setIdProfession] = useState(0);
	const [att, setAtt] = useState(false);
	return (
		<AuthContext.Provider

			value={

				{
					idProfession: idProfession,
					setIdProfession: setIdProfession,
					att: att,
					setAtt: setAtt,
				}

			}

		>

			{children}

		</AuthContext.Provider>
	);
};