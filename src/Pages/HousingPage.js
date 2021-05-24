import Container from "../Components/Container";
import Layout from "../Components/Layout";
import ArrowButtonNext from "../Components/ArrowButtonNext";
import ArrowButtonPrev from "../Components/ArrowButtonPrev";
import PrimaryText from "../Components/PrimaryText";
import PrimaryTitle from "../Components/PrimaryTitle";
import Card from "../Components/Card";

const HousingPage = () => {
    return ( 
        <Layout>
        <Container>
                <PrimaryTitle title="Wat is je woonsituatie?" color="#2F3031"  />
                <PrimaryText text="Om een beter beeld te krijgen over jongeren hun budgetteringen hebben wij je woonsituatie nodig?" color="#2F3031"/>
                <Card label="Thuis" text="Ik woon thuis en moet mij geen zorgen maken over het betalen van huur." height="101px" />
                <Card label="Kot" text="Ik zit op kot alleen of met vrienden en krijg hier elke maand een budget voor." height="101px" />
                <Card label="Eigen stek" text="Ik woon alleen of met vrienden en zorg elke maand zelf voor mijn huur" height="101px"/>
                <ArrowButtonPrev link="/age" />
                <ArrowButtonNext link="/budget" />
        </Container>
        </Layout>
     );
}
 
export default HousingPage;