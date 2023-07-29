import React from "react";
import { BgSelect } from "../../components/bgSelectProfession";
import { Logo } from "../../components/logo";
import { BtnGoMainPage } from "../../components/btnGoMainPage";
import Select from "../../components/select";

export const SelectProfession:React.FC = () => {
	return (
		<BgSelect>
			<Logo />
			<Select/>
			<BtnGoMainPage/>
		</BgSelect>
	);
};