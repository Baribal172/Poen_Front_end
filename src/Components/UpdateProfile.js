import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Container from "../Components/Container";
import PrevIcon from "../Components/PrevIcon";
import Nav from "../Components/Nav";
import Layout from "../Components/Layout";

export default function UpdateProfile() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updatePassword, updateEmail } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords do not match");
		}

		const promises = [];
		setLoading(true);
		setError("");

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				history.push("/");
			})
			.catch(() => {
				setError("Failed to update account");
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<Layout>
		<Container>
			<PrevIcon link='/' />
				<Nav />
				<div className='doel'>
					<h2>Profiel</h2>
				</div>
			<Card>
				<Card.Body>
					
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
									defaultValue={currentUser.email}
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
									placeholder='Leave blank to keep the same'
								/>
							</div>
						</Form.Group>
						<Form.Group id='password-confirm'>
							<div className='formStyle'>
								<Form.Label className='labelStyle'>Password Confirmation</Form.Label>
								<Form.Control
									className='inputStyle'
									type='password'
									ref={passwordConfirmRef}
									placeholder='Leave blank to keep the same'
								/>
							</div>
						</Form.Group>
						<Button disabled={loading} className='btnUpdate' type='submit'>
							Update
						</Button>
					</Form>
				</Card.Body>
			</Card>
		
			<style jsx>{`
				.doel {
					padding: 20px 0;
				}

				.advies {
					background-color: #006fff;
					height: 53vh;
				}

				.formStyle {
					width: 335px;
					height: 60px;
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 20px;
					margin-bottom: 13px;
					background-color: #fff;
					box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
					z-index: 900;
				}

				.labelStyle {
					margin-bottom: 5px;
				}

				.inputStyle {
					border: none;
					border-bottom: 1px solid #000;
				}

				.btnUpdate {
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
					z-index: 699;
				}
			`}</style>
		</Container>
		</Layout>
		
	);
}
