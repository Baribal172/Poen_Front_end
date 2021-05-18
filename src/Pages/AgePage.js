import ArrowButtonNext from "../Components/ArrowButtonNext";
import ArrowButtonPrev from "../Components/ArrowButtonPrev";
import Container from "../Components/Container";
import Layout from "../Components/Layout";
import PrimaryText from "../Components/PrimaryText";
import PrimaryTitle from "../Components/PrimaryTitle";

const AgePage = () => {
    return ( 
        <Layout>
            <Container>
                <PrimaryTitle title="Hoe oud ben je?" color="#2F3031"  />
                <PrimaryText text="Om een beter beeld te krijgen over jongeren hun budgetteringen hebben wij je leeftijd nodig." color="#2F3031"/>
                <ArrowButtonPrev link="/gender" />
                <ArrowButtonNext link="/housing" />
                
            </Container>
        </Layout>
     );
}
 
export default AgePage;