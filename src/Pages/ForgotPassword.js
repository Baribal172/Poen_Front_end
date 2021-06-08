import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import PrimaryTitle from "../Components/PrimaryTitle";
import PrimaryText from "../Components/PrimaryText";
import Container from "../Components/Container";
import Nav from "../Components/Nav";

export default function ForgotPassword() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage("");
			setError("");
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage("Check your inbox for further instructions");
		} catch {
			setError("Failed to reset password");
		}

		setLoading(false);
	}

	return (
		<Container>
			<Card>
				<Card.Body>
					<PrimaryTitle title="Reset Wachtoord." color="#fff" />
					<PrimaryText text="Vul je emailadres in en we  versturen zo snel mogelijk een link om je wachtwoord te resetten." color="#fff" />
					{error && <Alert variant='danger'>{error}</Alert>}
					{message && <Alert variant='success'>{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<div className='formStyle'>
								<Form.Label className='labelStyle' >Email</Form.Label>
								<Form.Control className='inputStyle' type='email' ref={emailRef} required />
							</div>
						</Form.Group>
						<Button disabled={loading} className='btnLogin' type='submit'>
							Bevestigen
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<style jsx>{`
				.formStyle {
					width: 100%;
					height: 60px;
					color: #fff;
					border: 2px solid #fff;
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 20px;
					margin-bottom: 13px;
				}

				.labelStyle {
					margin-bottom: 5px;
				}

				.inputStyle {
					width: 100%;
					color: #fff;
					background-color: rgba(201, 76, 76, 0);
					border: none;
					border-bottom: 1px solid #fff;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.btnLogin {
					position: absolute;
					bottom: 0;
					right: 20px;
					left: 20px;
					width: 335px;
					height: 60px;
					color: #006fff;
					background-color: #fff;
					border-radius: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 20px;
					border: none;
				}

				.wachtwoord {
					color: #FFFFFF;
					display: flex;
					align-content: flex-end;
				}
			`}</style>
		</Container>
	);
}
