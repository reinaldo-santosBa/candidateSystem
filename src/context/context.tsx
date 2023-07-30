import React, { SetStateAction, createContext, useState } from "react";

interface IProvider {
    children: React.ReactNode
}
interface ICandidatesSelects{
	idProfession: number;
	idCandidate: number;
}

interface IProps {
	idProfession: number;
	setIdProfession: React.Dispatch<SetStateAction<number>>;
	att: boolean;
	setAtt: React.Dispatch<SetStateAction<boolean>>;
	candidatesSelects: Array<ICandidatesSelects>
	setCandidatesSelects: React.Dispatch<SetStateAction<ICandidatesSelects[]>>;
}

export const AuthContext = createContext<IProps>({} as IProps);

export const AuthContextProvider: React.FC<IProvider> = ({ children }) => {
	const [idProfession, setIdProfession] = useState(0);
	const [att, setAtt] = useState(false);
	const [candidatesSelects, setCandidatesSelects] = useState([
		{
			idProfession: 1,
			idCandidate: 0
		},
		{
			idProfession: 2,
			idCandidate: 0
		},
		{
			idProfession: 3,
			idCandidate: 0
		},
		{
			idProfession: 4,
			idCandidate: 0
		},
		{
			idProfession: 5,
			idCandidate: 0
		},

	]);
	return (
		<AuthContext.Provider

			value={

				{
					idProfession,
					setIdProfession,
					att,
					setAtt,
					candidatesSelects,
					setCandidatesSelects
				}

			}

		>

			{children}

		</AuthContext.Provider>
	);
};