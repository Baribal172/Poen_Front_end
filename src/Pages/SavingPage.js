import Container from "../Components/Container";
import Layout from "../Components/Layout";
import ArrowButtonNext from "../Components/ArrowButtonNext";
import ArrowButtonPrev from "../Components/ArrowButtonPrev";
import PrimaryText from "../Components/PrimaryText";
import PrimaryTitle from "../Components/PrimaryTitle";
import CardCategorie from "../Components/CardCategorie";

const SavingPage = () => {
    return ( 
        <Layout>
        <Container>
                <PrimaryTitle title="Waarvoor wil je sparen?" color="#2F3031"  />
                <PrimaryText text="Kies hieronder uit één of meerdere opties. Deze worden opgenomen in je profiel." color="#2F3031"/>
                <div className="grid">
                    <CardCategorie icon="/brommerIcon.svg" categorieName="Brommer" />
                    <CardCategorie icon="/autoIcon.svg" categorieName="Auto" />
                    <CardCategorie icon="/reizenIcon.svg" categorieName="Reizen" />
                    <CardCategorie icon="/uitgaanIcon.svg" categorieName="Uitgaan" />
                    <CardCategorie icon="/hobbyIcon.svg" categorieName="Hobby" />
                    <CardCategorie icon="/multimediaIcon.svg" categorieName="Multimedia" />
                    <CardCategorie icon="/kledingIcon.svg" categorieName="Kleding" />
                    <CardCategorie icon="/woningIcon.svg" categorieName="Woning" />
                    <CardCategorie icon="/andereIcon.svg" categorieName="Andere" />
                </div>
                <ArrowButtonPrev link="/budget" />
                <ArrowButtonNext link="/data" />
        </Container>
        <style jsx>{`
        .grid {
            display: grid;
            grid-template-columns: auto auto auto;
            column-gap: 34px;
            row-gap: 25px;
        }
        `}</style>
        </Layout>
     );
}
 
export default SavingPage;