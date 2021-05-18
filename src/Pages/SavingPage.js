import Container from "../Components/Container";
import Layout from "../Components/Layout";
import ArrowButtonNext from "../Components/ArrowButtonNext";
import ArrowButtonPrev from "../Components/ArrowButtonPrev";
import PrimaryText from "../Components/PrimaryText";
import PrimaryTitle from "../Components/PrimaryTitle";

const SavingPage = () => {
    return ( 
        <Layout>
        <Container>
                <PrimaryTitle title="Waarvoor wil je sparen?" color="#2F3031"  />
                <PrimaryText text="Kies hieronder uit één of meerdere opties. Deze worden opgenomen in je profiel." color="#2F3031"/>
                <ArrowButtonPrev link="/budget" />
                <ArrowButtonNext link="/data" />
        </Container>
        </Layout>
     );
}
 
export default SavingPage;