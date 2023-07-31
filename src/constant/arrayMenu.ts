export const arrayMenu = [
	{
		id: 1,
		name: "Home",
		subName: "",
		subMenu: [],
		path: "/home"
	},
	{
		id: 2,
		name: "Candidato",
		subName: "Escolhido",
		subMenu: [],
		path: "/SelectedCandidate"
	},
	{
		id: 3,
		name: "Todos",
		subName: "Candidatos",
		subMenu: [],
		path: "/AllCandidates"
	},
	{
		id: 4,
		name: "Processo",
		subName: "Seletivo",
		path: "/home",
		subMenu: [
			{
				id: 1,
				name: "Front - End"
			},
			{
				id: 2,
				name: "Back - End"
			},
			{
				id: 3,
				name: "Full Stack"
			},
			{
				id: 4,
				name: "Designer Figma"
			},
			{
				id: 5,
				name: "Banco de Talentos"
			},
		]
	},
];