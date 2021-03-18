import React from "react";
import { globalStyles } from '../styles/global';
import Button from '../Components/Button';
import OutlineButton from "../Components/OutlineButton";

export default function Home() {
	return (
		<div>
			<h1>Intro Component</h1>
			<Button btnLabel="Inloggen" />
            <OutlineButton btnLabel="Registreren" />
		</div>
	);
}
