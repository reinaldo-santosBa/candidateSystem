import React, { SetStateAction, createContext, useState } from "react";

interface IProvider {
    children: React.ReactNode
}

interface IProps {
	idProfession: number;
	setIdProfession: React.Dispatch<SetStateAction<number>>;
}

export const AuthContext = createContext<IProps>({} as IProps);

export const AuthContextProvider: React.FC<IProvider> = ({ children }) => {
	const [idProfession, setIdProfession] = useState(0);
	return (
		<AuthContext.Provider

			value={

				{
					idProfession: idProfession,
					setIdProfession: setIdProfession,

				}

			}

		>

			{children}

		</AuthContext.Provider>
	);
};