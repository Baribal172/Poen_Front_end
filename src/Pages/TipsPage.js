import React from "react";
import Card from "../Components/Card";
import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrimaryText from "../Components/PrimaryText";
export default function TipsPage() {
	return (
		<Layout>
		<Container>
			<PageTitle
				title="Tips"
			/>
			<Nav/>
			<PrimaryText text="Hieronder vind je enkele thema's waarover je tips kan krijgen. Klik op de thema's om de tips te zien." />
			<Card link="/tipsBudget" label="Budget verdelen" text="Bekijk hier onze tips om je budget beter te leren plannen, verdelen." />
			<Card link="/tipsCijfers" label="Gemiddelde cijfers" text="Bekijk het gemiddelde uitgavenpatroon van leeftijdsgenoten, studenten, ..." />
			<Card link="/tipsSparen" label="Spaartips" text="Hoe kan je het best sparen? Waarom zou ik sparen? Bekijk het hier! " />
			<Card link="/tipsFG" label="Financiële geletterdheid" text="De cijfers omtrent financiële geletterdheid bij jongeren blijven dalen. Wat is dat?" />
		</Container>
		</Layout>
	);
}
