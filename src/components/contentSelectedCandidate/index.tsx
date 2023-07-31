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
	let exists = false;
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

	const handleClickConfirm = (id: number) => {
		arrayCandidates[id -1].selected = 1;
	};

	return (
		<S.AreaSelected>
			{
				arrayCandidates.map((item) => {
					if (item.id === candidate[0].idCandidate ) {
						exists = true;
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
										to={"/home/" + id}
										bg={"#333"}
										bgHover={"#222"}
									>
										Voltar
									</S.Btn>
									<S.Btn
										to={"/home/" + id}
										bg={"#00863c"}
										bgHover={"#035327"}
										onClick={() => {
											handleClickConfirm(item.id);
										}}
									>
										Confirmar
									</S.Btn>
								</div>
							</S.DataArea>
						</div>;
					}
					return "";
				})
			}
			{
				!exists 
					? <S.Mensagem>Não foi escolhido um candidato</S.Mensagem>
					: ""
			}
		</S.AreaSelected>
	);
};
