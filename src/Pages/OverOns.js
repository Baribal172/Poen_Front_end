import Container from "../Components/Container";
import Layout from "../Components/Layout";
import Nav from "../Components/Nav";
import PageTitle from "../Components/PageTitle";
import PrevIcon from "../Components/PrevIcon";
import Card from "../Components/Card";
import PrimaryTitle from "../Components/PrimaryTitle";
import { Link } from "react-router-dom";
import Button from '../Components/Button';

const OverOns = () => {
    return ( 
        <Layout>
            <Container>
                <PrevIcon 
                link="/settings"/>
                <Nav />
                <PrimaryTitle title='Wie zijn wij?' color='#2F3031' />
                <div className="card">
                    <p>Wij zijn een team van 3 studenten Interactieve Multimedia Design te Thomas More Mechelen. Deze applicatie is een van onze projecten. Zit je met vragen? Neem een kijkje bij contact.</p>
                </div>
                <div className="divStyle">
                <Link to="/Login"><Button btnLabel="Contacteer ons" /></Link>
                </div>
            </Container>
            <style jsx>{`
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

            .divStyle {
                position: absolute;
                bottom: 0;
                right: 20px;
                left: 20px;
            }
            
            `}</style>
        </Layout>
     );
}
 
export default OverOns;