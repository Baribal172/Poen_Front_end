import React from "react";
import { globalStyles } from '../styles/global';
import Button from '../Components/Button';
import OutlineButton from "../Components/OutlineButton";
import WhiteText from "../Components/WhiteText";

export default function Home() {
	return (
		<div>
            <img src="/logo-white.svg" />
            <WhiteText text="Leer je budget op lange termijn plannen en denk aan je toekomst!" />
			<Button btnLabel="Inloggen" />
            <OutlineButton btnLabel="Registreren" />
		</div>
	);
}
