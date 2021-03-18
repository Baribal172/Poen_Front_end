import React from "react";
import { globalStyles } from '../styles/global';
import Button from '../Components/Button';
import OutlineButton from "../Components/OutlineButton";
import WhiteText from "../Components/WhiteText";
import { Link } from "react-router-dom";
import Inloggen from "../Pages/Inloggen.js";
import Registreren from "../Pages/Registreren.js";

export default function Home() {
	return (
		<div>
            <img src="/logo-white.svg" />
            <WhiteText text="Leer je budget op lange termijn plannen en denk aan je toekomst!" />
            <Link to="/Inloggen"><Button btnLabel="Inloggen" /></Link>
            <Link to="/Registreren"><OutlineButton btnLabel="Registreren" /></Link>
            
		</div>
	);
}
