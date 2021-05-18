import React from "react";
import { globalStyles } from '../styles/global';
import Button from '../Components/Button';
import OutlineButton from "../Components/OutlineButton";
import { Link } from "react-router-dom";
import Login from "./Login.js";
import Register from "./Register.js";
import Container from "../Components/Container";
import PrimaryText from "../Components/PrimaryText";

const divStyle = {
      position: 'absolute',
      bottom: '0',
      right: '20px',
      left: '20px',
  }

const textStyle = {

}


const divStyle1 = {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
}

const logo = {
      objectFit: 'cover',
      width: '150px',
}


  
export default function Home() {
	return (
            <Container>
		<div style={divStyle1}>
                  <img style={logo} src="/logo-white.svg" />
                  <PrimaryText text="Leer je budget op lange termijn plannen en denk aan je toekomst!" color="#fff" />
            <div style={divStyle}>
                  <Button link="/login" btnLabel="Inloggen" />
                  <OutlineButton link="/register" btnLabel="Registreren" />
            </div>
		</div>
            </Container>
	);
}
