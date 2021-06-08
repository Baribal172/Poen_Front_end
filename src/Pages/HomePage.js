import { globalStyles } from "../styles/global";
//import Button from "../Components/Button";
import Container from "../Components/Container";
import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import WhiteText from "../Components/WhiteText";
import Nav from "../Components/Nav";
import Balans from "../Components/Balans";
import PageTitle from "../Components/PageTitle";
import TargetButton from "../Components/TargetButton";
import TargetCard from "../Components/TargetCard";
import BudgetCard from "../Components/BudgetCard";
import FinanceDate from "../Components/FinanceData";

export default function Home() {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const history = useHistory();
	async function handleLogout() {
		setError("");

		try {
			await logout();
			history.push("/login");
		} catch {
			setError("Failed to log out");
		}
	}

	return (
		<>
		<Container>
			<PageTitle
				title="Home"
			/>
			<Nav/>
			<Balans 
				balans="€656,00"
			/>
			<TargetButton
				btnLabel="Nieuw doel" />
			<TargetCard
				target="Volkswagen golf"
				image="/volkswagen-golf.png"
				gespaard="€1875,00"
				doel="€2500,00"			
			/>
			<BudgetCard 
				budget="€575,00"
				budgetInfo="Is je huidig ingestelde budget."
			/>

			
			
		</Container>
		<FinanceDate
		uitgaven="€154,00"
		overig="€421,00"
		/>
		<Button variant='link' onClick={handleLogout}>
				Log Out
			</Button>
		</>
	);
}
