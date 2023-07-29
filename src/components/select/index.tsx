import React, { useContext, useState } from "react";
import * as S from "./styles";
import { IoMdArrowDropup } from "react-icons/io";
import { arrayProfession } from "../../constant/arrayProfession";
import { AuthContext } from "../../context/context";

interface IArray {
	id: number;
	name: string;
}


const Select: React.FC = () => {
	const {
		setIdProfession,
	} = useContext(AuthContext);
	const [active, setActive] = useState("disabled");
	const [textCamp, setTextCamp] = useState("Escolha um processo seletivo");
	const [rotate, setRotate] = useState("rotate(270deg)");
	const handleClick = (text: string, id: number) => {
		if (active === "disabled") {
			setActive("active");
			setRotate("rotate(180deg)");
			
		} else {
			setActive("disabled");
			setRotate("rotate(270deg)");
		}
		setTextCamp(text);
		setIdProfession(id);
	};

	return (
		<S.AreaSelect>
			<S.Campo
				rotate={rotate}
				onClick={
					() => {
						handleClick("Escolha um processo seletivo",0);
					}
				}
			>
				<p>
					{textCamp}
				</p>	
				<IoMdArrowDropup className={"icon"} />
			</S.Campo>
			<S.AreaItems
			>
				{arrayProfession.map(
					(item: IArray) => {
						return (
							<div
								className={`item ${active}`}
								key={item.id}
								onClick={
									() => {
										handleClick(item.name, item.id);
									}
								}
							>
								<p>{item.name}</p>
							</div>
						);
					}
				)}

			</S.AreaItems>

		</S.AreaSelect>
	);
};

export default Select;

/*
1. Front - End
2. Back - End
3. Full Stack
4. Designer Figma
5. Banco de Talentos
*/