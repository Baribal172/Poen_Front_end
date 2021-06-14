import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";

const TipsSparen = () => {
    return ( 
        <Layout>
            <Container>
               <PrevIcon
               link="/tips" />
               <Nav/>
               <PageTitle
               title="Tips" />
             <h5 className="subTitle">Sparen</h5>
             <div className="card">
                    <li>Leg eerst een <span>spaarpotje</span> aan voor onvoorziene kosten en begin daarna pas te sparen voor die grote reis die je al zo lang wil maken.</li>
                    <li>Hou een <span>doel</span> voor ogen.</li>
                    <li>Probeer wat vaker de <span>fiets</span> te nemen in plaats van de auto. Je bespaart benzine en het is beter voor het milieu</li>
                    <li>Profiteer van <span>kortingen</span> en speciale aanbiedingen.</li>
                    <li>Denk eens na over <span>beleggen</span></li>
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

            li {
                margin-bottom: 20px;
            }
            span {
                color: #006FFF;
            }
            `}</style>
        
        </Layout>
     );
}
 
export default TipsSparen;