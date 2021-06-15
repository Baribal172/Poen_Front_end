import { globalStyles } from "../styles/global";
//import Button from "../Components/Button";
import Container from "../Components/Container";
import React, { useEffect, useState } from "react";
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
import FinanceData from "../Components/FinanceData";
import TransactieCard from "../Components/TransactieCard";
import firebase from "../firebase";
import "firebase/firestore";

export default function Home() {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	var UID = firebase.auth().currentUser.uid;
	const db = firebase.firestore();
	// var docRef = db.collection("users").doc(UID).collection("Goals");
	const [goals, setGoals] = useState([]);
	const [user, setUser] = useState();
	const history = useHistory();
	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const data = await db
				.collection("users")
				.doc(UID)
				.collection("Goals")
				.get();
			setGoals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		fetchData();
	}, []);

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
				<PageTitle title='Home' />
				<Nav />
				<Balans infoBalans='gespaard geld' balans='€656,00' />
				<TargetButton btnLabel='Nieuw doel' />
				{goals ? (
					goals.map((goal) => (
						<TargetCard
							key={goal.goal_price}
							target={goal.goal_name}
							image='/volkswagen-golf.png'
							gespaard={goal.goal_status}
							doel={goal.goal_price}
						/>
					))
				) : (
					<p>Je hebt nog geen doelen ingesteld</p>
				)}
				<BudgetCard
					budget='€575,00'
					budgetInfo='Is je huidig ingestelde budget.'
				/>
			</Container>
			<FinanceData uitgaven='€154,00' overig='€421,00' />

			<div className='advies'>
				<Container>
					<TransactieCard transactie='Winkelen' kosten='€86,00' />

					<TransactieCard transactie='Eten' kosten='€43,00' />

					<TransactieCard transactie='Roken' kosten='€25,00' />
				</Container>
			</div>
			{/*
		<Button variant='link' onClick={handleLogout}>
			Log Out
		</Button> */}
			<style jsx>{`
				.advies {
					padding-top: 20px;
					background-color: #006fff;
					height: 50vh;
				}
			`}</style>
		</>
	);
}
