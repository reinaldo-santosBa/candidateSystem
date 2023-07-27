import React, { SetStateAction, createContext, useState } from "react";

interface IProvider {
    children: React.ReactNode
}

interface IProps {
    id: number;
    name: string;
    setId: React.Dispatch<SetStateAction<number>>;
    setName: React.Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<IProps>({} as IProps);

export const AuthContextProvider: React.FC<IProvider> = ({ children }) => {
	const [id, setId] = useState(0);
	const [name, setName] = useState("");
	return (
		<AuthContext.Provider

			value={

				{
					id,
					name,
					setName,
					setId
				}

			}

		>

			{children}

		</AuthContext.Provider>
	);
};