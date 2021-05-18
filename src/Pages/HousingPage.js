import Container from "../Components/Container";
import Layout from "../Components/Layout";
import ArrowButtonNext from "../Components/ArrowButtonNext";
import ArrowButtonPrev from "../Components/ArrowButtonPrev";
import PrimaryText from "../Components/PrimaryText";
import PrimaryTitle from "../Components/PrimaryTitle";

const HousingPage = () => {
    return ( 
        <Layout>
        <Container>
                <PrimaryTitle title="Wat is je woonsituatie?" color="#2F3031"  />
                <PrimaryText text="Om een beter beeld te krijgen over jongeren hun budgetteringen hebben wij je woonsituatie nodig?" color="#2F3031"/>
                <ArrowButtonPrev link="/age" />
                <ArrowButtonNext link="/budget" />
        </Container>
        </Layout>
     );
}
 
export default HousingPage;