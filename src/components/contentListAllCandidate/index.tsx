import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { arrayCandidates } from "../../constant/arrayCandidates";

interface ArrayCandidates {
	id: number,
	name: string,
	idProfession: number,
	image: string
	selected: number
}

interface IPropsContentHome {
	id: number;
}

export const ContentListAllCandidate: React.FC<IPropsContentHome> = ({id}) => {
	const [arrayListCandidate, setArrayListCandidate] = useState<ArrayCandidates[]>([{
		id: 0,
		name: "",
		idProfession: 0,
		image: "",
		selected: 0
	}]);
	useEffect(() => {
		return setArrayListCandidate(
			arrayCandidates.filter((item: ArrayCandidates) => {
				if (item.idProfession === id) {
					return true;
				}
				return false;
			})
		);
	}, [arrayCandidates]);

	const handleClickCard = (idCandidate: number) => {
		console.log("====================================");
		console.log(idCandidate);
		console.log("====================================");
	};

	return (
		<>
			<S.ContentArea>
				{arrayListCandidate.map((item) => {

					return (
						<div
							className={"card"}
							key={item.id}
							onClick={
								() => {
									handleClickCard(item.id);
								}
							}
						>
							<S.ImgWrapper
								image={`url(${item.image})`}
							/>
							<p>{item.name}</p>
						</div>
					);
				})}
			</S.ContentArea>
		</>
	);
};

