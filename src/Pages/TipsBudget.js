import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";

const TipsBudget = () => {
    return ( 
        <Layout>
            <Container>
               <PrevIcon
               link="/tips" />
               <Nav/>
               <PageTitle
               title="Tips" />
               <h5 className="subTitle">Budget verdelen</h5>
                <div className="card">
                    <li className="listTips">Gebruik de <span>50/30/20 regel. 50%</span> essentiële zaken zoals voedsel, onderdak, water en energie. <span>30%</span> wensen, entertainment en luxeproducten. <span>20%</span> sparen en schuldaflossing.</li>
                    <li className="listTips">Denk op <span>lange(re) termijn.</span></li>
                    <li className="listTips">Wees <span>voorbereid</span> op onvoorziene en grote uitgaven.</li>
                    <li className="listTips">Hou een <span>kalender</span> bij met je vaste of geplande uitgaven.</li>
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
            span {
                color: #006FFF;
            }
            `}</style>
        
        </Layout>
     );
}
 
export default TipsBudget;