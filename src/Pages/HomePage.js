import { globalStyles } from "../styles/global";
//import Button from "../Components/Button";
import Container from "../Components/Container";
import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import WhiteText from "../Components/WhiteText";
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
		<Container>
			<h3>Bespaarde geld</h3>
			<p>$675,00</p>
			<Card>
				<Card.Header as='h5'>Featured</Card.Header>
				<Card.Body>
					<Card.Title>Special title treatment</Card.Title>
					<Card.Text>
						With supporting text below as a natural lead-in to additional
						content.
					</Card.Text>
					<Button variant='primary'>Go somewhere</Button>
				</Card.Body>
			</Card>
			<Button variant='link' onClick={handleLogout}>
				Log Out
			</Button>
		</Container>
	);
}
