import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { arrayCandidates } from "../../constant/arrayCandidates";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";

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

export const ContentListAllCandidate: React.FC<IPropsContentHome> = ({ id }) => {
	const { candidatesSelects, setCandidatesSelects } = useContext(AuthContext);

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
	}, [id]);

	const handleClickCard = (idCandidate: number) => {
		setCandidatesSelects(
			candidatesSelects.filter((item) => {
				if (item.idProfession === id) {
					item.idCandidate = idCandidate;
				}
				return true;
			})
		);
	};


	return (
		<>
			<S.ContentArea>
				{arrayListCandidate.map((item) => {

					return (
						<Link
							to={`/SelectedCandidate/${id}`}
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
						</Link>
					);
				})}
			</S.ContentArea>
		</>
	);
};

