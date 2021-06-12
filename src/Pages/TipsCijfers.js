import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";

const TipsCijfers = () => {
    return ( 
        <Layout>
            <Container>
               <PrevIcon
               link="/tips" />
               <Nav/>
               <PageTitle
               title="Tips" />
            </Container>
        </Layout>
     );
}
 
export default TipsCijfers;