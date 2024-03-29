import React, { useRef, useState } from "react";
import PrimaryTitle from "../Components/PrimaryTitle";
import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";
import InputCard from "../Components/InputCard";
import { Form, Button, Card, Alert } from "react-bootstrap";
import firebase from "../firebase";
import { Link, useHistory } from "react-router-dom";

const Budget = () => {
	const budgetRef = useRef();
	const history = useHistory();
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const db = firebase.firestore();
			var UID = firebase.auth().currentUser.uid;
			setLoading(true);
			db.collection("users").doc(UID).collection("Budget").add({
				budget_price: budgetRef.current.value,
			});
			history.push("/budgetInstellen");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<Layout>
			<Container>
				<Nav />
				<PrimaryTitle title='Wat is je maandelijkse budget?' color='#2F3031' />
				<div className='inputBudget'>
					<Form onSubmit={handleSubmit}>
						<Form.Group id='budget'>
							<div className='formStyle'>
								<Form.Label className='labelStyle'>Budget</Form.Label>
								<Form.Control
									className='inputStyle'
									type='Budget'
									ref={budgetRef}
									required
								/>
							</div>
						</Form.Group>
						<Button disabled={loading} className='btnNext' type='submit'>
							Volgende
						</Button>
					</Form>
				</div>
			</Container>
			<style jsx>{`
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
					z-index: 500 !important;
					position: absolute;
				}

				.labelStyle {
					margin-bottom: 5px;
				}

				.inputStyle {
					border: none;
					border-bottom: 1px solid #000;
				}
				.btnNext {
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
					z-index: 500;
				}
				.inputBudget {
					margin-top: 120px;
				}
			`}</style>
		</Layout>
	);
};

export default Budget;
