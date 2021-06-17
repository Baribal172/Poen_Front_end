import React, { useRef, useState, useEffect } from "react";
import AdviesBalk from "../Components/AdviesBalk";
import Container from "../Components/Container";
import InputCard from "../Components/InputCard";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";
import firebase from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
export default function DoelInstellen() {
	//const fotoRef = useRef();
	const goalNameRef = useRef();
	const goalPriceRef = useRef();
	const history = useHistory();

	async function handleSubmit1(e) {
		e.preventDefault();
		try {
			const db = firebase.firestore();
			var UID = firebase.auth().currentUser.uid;
			db.collection("users").doc(UID).collection("Goals").add({
				goal_name: goalNameRef.current.value,
				goal_price: goalPriceRef.current.value,
				goal_status: 0,
			});
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div>
			<Container>
				<PrevIcon link='/' />
				<Nav />
				<div className='doel'>
					<h1>Doel instellen</h1>
				</div>

				<Form onSubmit={handleSubmit1}>
					{/* <Form.Group id='foto'>
						<div className='formStyle'>
							<Form.Label className='labelStyle'>Icoon / Foto</Form.Label>
							<Form.Control
								className='inputStyle'
								type='foto'
								required
							/>
						</div>
					</Form.Group> */}
					<Form.Group id='doel'>
						<div className='formStyle'>
							<Form.Label className='labelStyle'>
								Waar spaar je voor?
							</Form.Label>
							<Form.Control
								className='inputStyle'
								type='doel'
								ref={goalNameRef}
								required
							/>
						</div>
					</Form.Group>

					<Form.Group id='prijs'>
						<div className='formStyle'>
							<Form.Label className='labelStyle'>
								Hoeveel kost je doel?
							</Form.Label>
							<Form.Control
								className='inputStyle'
								type='prijs'
								ref={goalPriceRef}
								required
							/>
						</div>
					</Form.Group>
					<Button className='btnOpslaan' type='submit'>
						Opslaan
					</Button>
				</Form>
			</Container>
			<AdviesBalk bedrag='€150,00' advies='Maandelijkse opzij zetten' />
			<div className='advies'></div>
			<Container></Container>
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

				.btnOpslaan {
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
		</div>
	);
}
