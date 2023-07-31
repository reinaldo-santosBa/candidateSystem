import React, { useEffect, useState, useContext } from "react";
import * as S from "./styles";
import { arrayCandidates } from "../../constant/arrayCandidates";
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

export const ContentHome: React.FC<IPropsContentHome> = ({id}) => {
	const [arrayListCandidate, setArrayListCandidate] = useState<ArrayCandidates[]>([{
		id: 0,
		name: "",
		idProfession: 0,
		image: "",
		selected: 0
	}]);
	const { candidatesSelects, setCandidatesSelects } = useContext(AuthContext);
	const [shuffle, setShuffle] = useState(false);
	const [cardActive, setCardActive] = useState(1);
	const [selectedItem, setSelectedItem] = useState(0);
	useEffect(() => {
		return setArrayListCandidate(
			arrayCandidates.filter((item: ArrayCandidates) => {
				if (item.idProfession === id && item.selected === 0) {
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
					setSelectedItem(idCandidate);
				}
				return true;
			})
		);
	};
	return (
		<>
			<S.BtnShuffle
				onClick={
					() => {
						setShuffle(!shuffle);
						setTimeout(() => {

							if (cardActive === 1) {
								setCardActive(2);
							} else {
								setCardActive(1);
							}
						}, 200);
						
					}
				}
			>
				<p>Embaralhar</p>
			</S.BtnShuffle>
			<S.ContentArea>
				{arrayListCandidate.map((item, index) => {
				
					if (shuffle) {
						if (index > 4) {
							return (
								<div
									className={cardActive === 2 ? "card active 	selected" : "card disabled"}
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
									{
										selectedItem === item.id
											? <p className="select">SELECIONADO</p>
											: ""
									}
								</div>
							);
						}
					} else {
						if (index < 5) {
							return (
								<div
									className={cardActive === 1 ? "card active" : "card disabled"}
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
									{
										selectedItem === item.id
											? <p className="select">SELECIONADO</p>
											: ""
									}
								</div>
							);
						}
					}
				})}
			</S.ContentArea>
		</>
	);
};

