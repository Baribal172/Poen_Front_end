import React from "react";
import Container from "../Components/Container";
import Layout from "../Components/Layout";
import ArrowButtonNext from "../Components/ArrowButtonNext";
import ArrowButtonPrev from "../Components/ArrowButtonPrev";
import PrimaryText from "../Components/PrimaryText";
import PrimaryTitle from "../Components/PrimaryTitle";

export default function BudgetPage() {
	return (
		<Layout>
		<Container>
				<PrimaryTitle title="Hoe stel jij je budget in?" color="#2F3031"  />
                <PrimaryText text="Budgetteren is niet makkelijk vandaar deze applicatie. Stel je liever zelf je budget in of laat je het over aan ons?" color="#2F3031"/>
				<ArrowButtonPrev link="/housing" />
                <ArrowButtonNext link="/saving" />
		</Container>
		</Layout>
	);
}
