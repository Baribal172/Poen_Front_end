import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import PrimaryTitle from "./PrimaryTitle";
import Container from "./Container";
import TextLink from "./TextLink";

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/");
		} catch {
			setError("Failed to log in");
		}

		setLoading(false);
	}

	return (
		<Container>
			<Card>
				<Card.Body>
					<PrimaryTitle title='Log in' color='#fff' />
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
								<Form.Label className='labelStyle'>Password</Form.Label>
								<Form.Control
									className='inputStyle'
									type='password'
									ref={passwordRef}
									required
								/>
							</div>
						</Form.Group>
						<Button disabled={loading} className='btnLogin' type='submit'>
							Log In
						</Button>
					</Form>
					<div className='w-100 text-center mt-3'>
						<Link to='/forgot-password'>Forgot Password?</Link>
					</div>
				</Card.Body>
			</Card>
			<TextLink
				text='Nog geen account? '
				link='/Register'
				linkLabel='Registreer'
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
			`}</style>
		</Container>
	);
}
