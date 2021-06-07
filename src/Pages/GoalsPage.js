import React, { useRef, useState } from "react";
import firebase from "../firebase";
import "firebase/firestore";
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
		<div>
			<h1>Goals page</h1>
		</div>
	);
}
