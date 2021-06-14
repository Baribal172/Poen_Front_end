import PrimaryTitle from "../Components/PrimaryTitle"
import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";
import InputCard from "../Components/InputCard";
import Button from "../Components/Button";

const Budget = () => {
    return ( 
        
        <Layout>
            <Container>
                <Nav />
                <PrimaryTitle
                title="Wat is je maandelijkse budget?" color="#2F3031" />
                <div className="inputBudget">
                    <InputCard 
                    inputLabel="Budget"
                    type=""
                    id=""
                    name=""
                    />
                </div>
                <Button
                link="/budgetInstellen"
                btnLabel="Volgende">

                </Button>
                
            </Container>
            <style jsx>{`
                .inputBudget {
                    margin-top: 120px;
                }

				
			`}</style>
        </Layout>
     );
}
 
export default Budget;