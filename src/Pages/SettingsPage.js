import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";
import Card from "../Components/Card";

const SettingsPage = () => {
	return ( 
		<Layout>
			<Container>
				<PageTitle
				title="Instellingen" />
				<Nav />
				<div className="settings">
					<Card link="/overOns" label="Over ons" />
					<Card link="/bank" label="Bank" />
					<Card link="/privacy" label="Privacy" />
					<Card link="/contact" label="Contact" />
				</div>
			</Container>
			<style jsx>{`
            .settings {
				margin-top: 250px;
			}
            `}</style>
		</Layout>
	 );
}
 
export default SettingsPage;
