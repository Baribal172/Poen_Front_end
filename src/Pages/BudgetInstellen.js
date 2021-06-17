import React, { useRef, useState, useEffect } from "react";
import AdviesBalk from "../Components/AdviesBalk";
import Balans from "../Components/Balans";
import Button from "../Components/Button";
import CardCategorie from "../Components/CardCategorie";
import Container from "../Components/Container";
import Nav from "../Components/Nav";
import PrevIcon from "../Components/PrevIcon";
import firebase from "../firebase";

const BudgetInstellen = () => {
	var UID = firebase.auth().currentUser.uid;
	const [budget, setBudget] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const data = await db
				.collection("users")
				.doc(UID)
				.collection("Budget")
				.get();
			setBudget(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		fetchData();
	}, []);
	return (
		<>
			<Container>
				<PrevIcon link='/' />
				<Nav />
				<div className='doel'>
					<h1>Budget</h1>
				</div>
				{budget.length > 0 ? (
					budget.map((budget) => (
						<Balans
							infoBalans='Resterend budget'
							balans={budget.budget_price}
						/>
					))
				) : (
					<p>Je hebt nog geen Budget ingesteld</p>
				)}
				<div className='grid'>
					<CardCategorie icon='/etenIcon.svg' categorieName='Eten' />
					<CardCategorie icon='/winkelenIcon.svg' categorieName='Winkelen' />
					<CardCategorie icon='/drinkenIcon.svg' categorieName='Drinken' />
					<CardCategorie icon='/brommerIcon.svg' categorieName='Uitgaan' />
					<CardCategorie icon='/rokenIcon.svg' categorieName='Roken' />
					<CardCategorie icon='/cafeIcon.svg' categorieName='Cafe' />
				</div>
			</Container>
			<AdviesBalk bedrag='€150,00' advies='Winkelen' />
			<div className='advies'></div>
			<Container>
				<Button btnLabel='Opslaan' link='/' />
			</Container>
			<style jsx>{`
				.grid {
					display: grid;
					grid-template-columns: auto auto auto;
					column-gap: 34px;
					row-gap: 25px;
				}

				.advies {
					background-color: #006fff;
					height: 40vh;
				}
			`}</style>
		</>
	);
};

export default BudgetInstellen;
