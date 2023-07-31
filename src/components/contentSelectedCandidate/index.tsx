import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { arrayCandidates } from "../../constant/arrayCandidates";
import { AuthContext } from "../../context/context";
import { arrayProfession } from "../../constant/arrayProfession";

interface IPropsContentSelectedCandidate{
    id: number;
}
interface ICandidatesSelects {
    idProfession: number;
    idCandidate: number;
}
export const ContentSelectedCandidate: React.FC<IPropsContentSelectedCandidate> = ({ id }) => {
	const { candidatesSelects } = useContext(AuthContext);
	const [candidate, setCandidate] = useState <ICandidatesSelects[]>([{
		idProfession: 0,
		idCandidate: 0
	}]);
	useEffect(() => {
		return setCandidate(
			candidatesSelects.filter((item: ICandidatesSelects) => {
				if (item.idProfession === id) {
					return item;
				}
				return false;
			})
		);
	}, [id]);

	return (
		<S.AreaSelected>
			{
				arrayCandidates.map((item) => {
					if (item.id === candidate[0].idCandidate ) {
                        
						return <div 
							className="candidate"
							key={candidate[0].idCandidate}        
						>
							<S.CandidateImage
								image={`url(${item.image})`}
							>
							</S.CandidateImage>
							
							<S.DataArea>
								<div>
									<p>Nome: {item.name}</p>
									<p>Processo seletivo: {arrayProfession[id].name}</p>
								</div>
								<div>
									<S.Btn
										bg={"#333"}
										bgHover={"#222"}
									>Voltar</S.Btn>
									<S.Btn
										bg={"#00863c"}
										bgHover={"#035327"}
									>Confirmar</S.Btn>
								</div>
							</S.DataArea>
						</div>;
					}
					return "";
                    
				})
			}
		</S.AreaSelected>
	);
};
