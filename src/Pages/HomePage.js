import { globalStyles } from "../styles/global";
//import Button from "../Components/Button";
import Container from "../Components/Container";
import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import WhiteText from "../Components/WhiteText";
import "bootstrap/dist/css/bootstrap.css";

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
				<Card.Body>
					<Card.Title>Volkswagen Golf</Card.Title>
					<Card.Img variant='top' src='holder.js/100px180' />
					<Card.Text>
						With supporting text below as a natural lead-in to additional
						content.
					</Card.Text>
					<Button variant='light'>Doel: 2500</Button>
					<Button variant='primary'>Gespaard: 300</Button>
				</Card.Body>
			</Card>
			<Button variant='link' onClick={handleLogout}>
				Log Out
			</Button>
		</Container>
	);
}
