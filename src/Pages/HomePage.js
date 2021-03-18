import React from "react";
import { globalStyles } from '../styles/global';
import Button from '../Components/Button';

export default function Home() {
	return (
		<div>
			<h1>Home Component</h1>
			<Button btnLabel="Inloggen" />
		</div>
	);
}
