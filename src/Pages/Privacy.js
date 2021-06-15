import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";
import Card from "../Components/Card";
const Privacy = () => {
    return ( 
        <Layout>
            <Container>
                <PrevIcon 
                link="/settings"/>
                <Nav />
            </Container>
        </Layout>
     );
}
 
export default Privacy;