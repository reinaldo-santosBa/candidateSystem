import React from "react";
import ReactDOM from "react-dom/client";
import {Router} from "./App.tsx";
import "./styles.css";
import { AuthContextProvider } from "./context/context.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthContextProvider>
			<Router />
		</AuthContextProvider>
		
	</React.StrictMode>,
);
