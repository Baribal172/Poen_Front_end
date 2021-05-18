import Container from "../Components/Container";
import Layout from "../Components/Layout";
import ArrowButtonNext from "../Components/ArrowButtonNext";
import ArrowButtonPrev from "../Components/ArrowButtonPrev";
import PrimaryText from "../Components/PrimaryText";
import PrimaryTitle from "../Components/PrimaryTitle";

const DataPage = () => {
    return (
        <Layout>
        <Container>
                <PrimaryTitle title="Mogen we je je data delen?" color="#2F3031"  />
                <PrimaryText text="Om profielen te kunnen vergelijken hebben we jouw data nodig die op een geanonimiseerde manier kunnen bekeken worden op basis van je ingestelde budget." color="#2F3031"/>
                <ArrowButtonPrev link="/saving" />
                <ArrowButtonNext link="/home" />
        </Container>
        </Layout>
     );
}
 
export default DataPage;