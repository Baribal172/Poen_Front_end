import React from "react";
import { globalStyles } from '../styles/global';
import Button from '../Components/Button';
import Container from "../Components/Container";

export default function Home() {
	return (
		<Container>
			<h1>Home Component</h1>
			<Button btnLabel="Inloggen" />
		</Container>
	);
}
