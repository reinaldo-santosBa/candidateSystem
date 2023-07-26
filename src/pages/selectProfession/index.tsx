import React from "react";
import { BgSelect } from "../../components/bgSelectProfession";
import { Logo } from "../../components/logo";
import { ButtonSelect } from "../../components/btnSelect";

export const SelectProfession:React.FC = () => {
	return (
		<BgSelect>
			<Logo />
			<ButtonSelect/>
		</BgSelect>
	);
};