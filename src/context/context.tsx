import React, { SetStateAction, createContext, useState } from "react";

interface IProvider {
    children: React.ReactNode
}

interface IProps {
    id: number;
	setId: React.Dispatch<SetStateAction<number>>;
}

export const AuthContext = createContext<IProps>({} as IProps);

export const AuthContextProvider: React.FC<IProvider> = ({ children }) => {
	const [id, setId] = useState(0);
	return (
		<AuthContext.Provider

			value={

				{
					id: id,
					setId: setId,

				}

			}

		>

			{children}

		</AuthContext.Provider>
	);
};