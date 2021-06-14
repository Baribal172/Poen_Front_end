import React, { useRef, useState } from "react";
import firebase from "../firebase";
import "firebase/firestore";
import Layout from "../Components/Layout";
import Container from "../Components/Container";
import PageTitle from "../Components/PageTitle";
import Nav from "../Components/Nav";
import TargetButton from "../Components/TargetButton";
import TargetCard from "../Components/TargetCard";
export default function GoalsPage() {
	// const [fireData, setFireData] = useState("");
	// React.useEffect(() => {
	// 	const fetchData = async () => {
	// 		const db = firebase.firestore();
	// 		const data = await db.collection("users").get();
	// 		setFireData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	// 		console.log(fireData);
	// 	};
	// 	fetchData();
	// }, []);
	return (
		<Layout>
			<Container>
				<PageTitle
				title="Doelen" />
				<Nav/>
				<TargetButton
				btnLabel="Nieuw doel"
				/>

				<TargetCard
				target="Volkswagen golf"
				image="/volkswagen-golf.png"
				gespaard="€1875,00"
				doel="€2500,00"			
				/>

				<TargetCard
				target="Volkswagen golf"
				image="/volkswagen-golf.png"
				gespaard="€1875,00"
				doel="€2500,00"			
				/>

				<TargetCard
				target="Volkswagen golf"
				image="/volkswagen-golf.png"
				gespaard="€1875,00"
				doel="€2500,00"			
				/>

				
			</Container>
		</Layout>
	);
}
