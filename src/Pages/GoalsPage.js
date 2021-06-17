import React, { useRef, useState, useEffect } from "react";
import firebase from "../firebase";
import "firebase/firestore";
import Layout from "../Components/Layout";
import Container from "../Components/Container";
import PageTitle from "../Components/PageTitle";
import Nav from "../Components/Nav";
import TargetButton from "../Components/TargetButton";
import TargetCard from "../Components/TargetCard";
export default function GoalsPage() {
	const [fireData, setFireData] = useState("");
	const [goals, setGoals] = useState([]);
	var UID = firebase.auth().currentUser.uid;

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
	return (
		<Layout>
			<Container>
				<PageTitle title='Doelen' />
				<Nav />
				<TargetButton btnLabel='Nieuw doel' />

				{goals.length > 0 ? (
					goals.map((goal) => (
						<TargetCard
							key={goal.goal_price}
							target={goal.goal_name}
							image='./volkswagen-golf.png'
							gespaard={goal.goal_status}
							doel={goal.goal_price}
						/>
					))
				) : (
					<p>Je hebt nog geen doelen ingesteld</p>
				)}
			</Container>
		</Layout>
	);
}
