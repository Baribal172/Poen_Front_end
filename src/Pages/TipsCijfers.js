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
               <h5 className="subTitle">Gemiddelde uitgaven</h5>
               <div className="card">
                   <p>Hieronder vind je de <span>cijfers</span> per maand van leeftijdsgenoten studenten die thuis <span>(T)</span> of alleen <span>(A)</span> wonen:</p>
                    <li><span>Huur</span>: T: €0 / A: €450</li>
                    <li><span>Studeren</span>: T: €230 / A: €230</li>
                    <li><span>Boodschappen</span>: T: €31.5 / A: €184.25</li>
                    <li><span>Sport/Uitgaan</span>: T: €130 / A: €134</li>
                    <li><span>Shoppen</span>: €56.5 / A: €52.5</li>
                    <li><span>Vervoer</span>: T: €100 / A: €100</li>
                    <li><span>Abbo/Gamen</span>: T: €29 / A: €38</li>
                    <li><span>Telefoon</span>: T: €25 / A: €30</li>
                    <li><span>Overige</span>: T: €40 / A: €48</li>
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

            p {
                margin: 20px 0;
            }

            span {
                color: #006FFF;
            }
            `}</style>
        
        </Layout>
     );
}
 
export default TipsCijfers;