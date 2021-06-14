import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";

const TipsFG = () => {
    return ( 
        <Layout>
            <Container>
               <PrevIcon
               link="/tips" />
               <Nav/>
               <PageTitle
               title="Tips" />
               <h5 className="subTitle">Financiële geletterdheid</h5>
               <div className="card">
                   <p className="textTips">Het is de <span>kennis</span> en <span>inzichten</span> die je hebt op vlak van <span>budgetteren</span>. Denk aan pensioensparen, beleggen, lenen, maar ook het voorkomen van betalings-achterstanden. <span>België</span> staat slechts op de <span>17de</span> plaats staat van de 24 landen als het gaat om financiële geletterdheid.</p>
                    <p className="textTips">Wat kan je doen:</p>
                    <li className="listTips">Durf met je <span>ouders</span> over geld praten. </li>
                    <li className="listTips">Spreek met je ouders een <span>vast bedrag zakgeld</span> af. </li>
                    <li className="listTips">Laat je <span>voldoende informeren</span> als je gaat beleggen of een lening aangaat. Al eens gedacht aan pensioensparen?</li>
                    <li className="listTips">Doe <span>online tests</span> om je financiële geletterdheid beter te begrijpen!</li>
                </div>
            </Container>
            <style jsx>{`
            .subTitle {
                font-size: 26px;
                color: #2F3031;
                margin: 20px 0;
            }

            .card {
                position: relative;
                background-color: #FFFFFF;
                border-radius: 20px;
                width: 333px;
                box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
                z-index: 2;
                padding: 15px;
                margin-top: 15px;
            }

            .listTips {
                margin-bottom: 20px;
            }

            .textTips {
                margin: 20px 0;
            }

            span {
                color: #006FFF;
            }
            `}</style>
        
        </Layout>
     );
}
 
export default TipsFG;