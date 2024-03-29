import Container from "../Components/Container";
import Layout from "../Components/Layout";
import ArrowButtonNext from "../Components/ArrowButtonNext";
import ArrowButtonPrev from "../Components/ArrowButtonPrev";
import PrimaryText from "../Components/PrimaryText";
import PrimaryTitle from "../Components/PrimaryTitle";
import DataCard from "../Components/DataCard";
import "../styles/global.css";

const DataPage = () => {
    return (
        <Layout>
        <Container>
                <PrimaryTitle title="Mogen we je je data delen?" color="#2F3031"  />
                <PrimaryText text="Om profielen te kunnen vergelijken hebben we jouw data nodig die op een geanonimiseerde manier kunnen bekeken worden op basis van je ingestelde budget." color="#2F3031"/>
                <div className="grid">
                    <DataCard label="Ja" color="#006FFF"/>
                    <DataCard label="Nee" color="#FF2266"/>
                </div>
                <ArrowButtonPrev link="/saving" />
                <ArrowButtonNext link="/bankLinken" />
        </Container>
        <style jsx>{`
        .grid {
            display: grid;
            grid-template-columns: auto auto;
            column-gap: 20.5px;
        }
        `}</style>
        </Layout>
     );
}
 
export default DataPage;