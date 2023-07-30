import React, { useState, useContext } from "react";
import * as S from "./styles";
import { arrayMenu } from "../../constant/arrayMenu";
import { AuthContext } from "../../context/context";
import {
	AiOutlineClose

} from "react-icons/ai";

import {
	FiMenu
} from "react-icons/fi";
interface IChildren {
	children: React.ReactNode;
	idMenu: number;
}

interface ISubMenu {
	id: number;
	name: string;
	
}

interface Iarray {
	id: number;
	name: string;
	subName: string;	
	subMenu: ISubMenu[];
}

export const Menu: React.FC<IChildren> = ({ children,idMenu }) => {
	const [active, setActive] = useState(idMenu);
	const [activeSubMenu, setActiveSubMenu] = useState(0);
	const [positionLeftMenu, setPositionLeftMenu] = useState("0");
	const [positionLeftBtn, setPositionLeftBtn] = useState("19.75rem");
	const [iconOpenClose, setIconOpenClose] = useState(true);
	const {
		setIdProfession,
	} = useContext(AuthContext);
	return (
		<>
			<S.BtnOpenClose
				
				positionLeftBtn={positionLeftBtn}
				onClick={
					() => {
						if (positionLeftMenu === "0") {
							setPositionLeftMenu("-18.75rem");
							setPositionLeftBtn("2rem");
							setIconOpenClose(false);
						} else {
							setPositionLeftMenu("0");
							setPositionLeftBtn("20.75rem");
							setIconOpenClose(true);
						}
					}
				}
			>
				{
					iconOpenClose
						? <AiOutlineClose />
						: <FiMenu/>
				}
			</S.BtnOpenClose>
			<S.AreaMenu
				positionLeftMenu={positionLeftMenu}
			>
				{children}

				<S.AreaItem>
					{
						arrayMenu.map((item: Iarray) => {
							return (
								<>
									<S.AreaItemBtn
										key={item.id}
									>
										<div className={active === item.id ? "decorationSelected" : ""} />

										<a
											className={active === item.id ? "activeBtn" : ""}
											onClick={
												() => {
													setActive(item.id);
													if (item.subMenu.length === 0) {
														setActiveSubMenu(0);
													}
												}
											}
										>
											{item.name}
											<p>
												{item.subName}
											</p>
										</a>
									</S.AreaItemBtn>
									{
										active === item.id && item.subMenu.length > 0
											?
											item.subMenu.map((subItem: ISubMenu) => {
												return (
													<S.AreaItemSubBtn
													
														key={subItem.id}
														onClick={
															() => {
																setActiveSubMenu(subItem.id);
																setIdProfession(subItem.id);
															}
														}
													>
														<a
															className={activeSubMenu === subItem.id ? "activeBtn" : ""}
														>
															{subItem.name}
														</a>
													</S.AreaItemSubBtn>
												);
											})
											: ""
									}
								</>
							);
						})
					}
				</S.AreaItem>
			</S.AreaMenu>
		</>
	);
};

