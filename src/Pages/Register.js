import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import PrimaryTitle from "../Components/PrimaryTitle";
import PrimaryText from "../Components/PrimaryText";
import Container from "../Components/Container";
import TextLink from "../Components/TextLink";
import firebase from "../firebase";
import LayoutBlue from "../Components/LayoutBlue";
import { auth } from "../firebase";
import "firebase/firestore";
export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			const db = firebase.firestore();
			await signup(emailRef.current.value, passwordRef.current.value).then(
				(cred) => {
					return db.collection("users").doc(cred.user.uid).set({
						email: emailRef.current.value,
					});
				}
			);
			history.push("/gender");
		} catch (error) {
			console.log(error);
			setError("Failed to create an account", error);
		}

		setLoading(false);
	}

	return (
		<LayoutBlue>
			<Container>
				<Card>
					<Card.Body>
						<PrimaryTitle title='Welkom.' color='#fff' />
						<PrimaryText
							text='Maak je nieuwe account aan en start met het plannen van je budget!'
							color='#fff'
						/>
						{error && <Alert variant='danger'>{error}</Alert>}
						<Form onSubmit={handleSubmit}>
							<Form.Group id='email'>
								<div className='formStyle'>
									<Form.Label className='labelStyle'>Email</Form.Label>
									<Form.Control
										className='inputStyle'
										type='email'
										ref={emailRef}
										required
									/>
								</div>
							</Form.Group>
							<Form.Group id='password'>
								<div className='formStyle'>
									<Form.Label className='labelStyle'>Wachtwoord</Form.Label>
									<Form.Control
										className='inputStyle'
										type='password'
										ref={passwordRef}
										required
									/>
								</div>
							</Form.Group>
							<Form.Group id='password-confirm'>
								<div className='formStyle'>
									<Form.Label className='labelStyle'>
										Bevestig wachtwoord
									</Form.Label>
									<Form.Control
										className='inputStyle'
										type='password'
										ref={passwordConfirmRef}
										required
									/>
								</div>
							</Form.Group>
							<Button disabled={loading} className='btnLogin' type='submit'>
								Sign Up
							</Button>
						</Form>
					</Card.Body>
				</Card>
				<TextLink
					text='Heb je al een account? '
					link='/Login'
					linkLabel='Log in'
				/>
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
						color: #ffffff;
						display: flex;
						align-content: flex-end;
					}
				`}</style>
			</Container>
		</LayoutBlue>
	);
}
