import ArrowButtonNext from "../Components/ArrowButtonNext";
import Container from "../Components/Container";
import GenderCard from "../Components/GenderCard";
import Layout from "../Components/Layout";
import PrimaryText from "../Components/PrimaryText"
import PrimaryTitle from "../Components/PrimaryTitle"

const GenderPage = () => {
    return (
        <Layout>
        <Container>
            
            <PrimaryTitle title="Wat is je geslacht?" color="#2F3031" />
            <PrimaryText text="Om een beter beeld te krijgen over jongeren hun budgetteringen hebben wij je geslacht nodig." color="#2F3031" />
            <div className="grid">
                <GenderCard gender="/manIcon.svg" genderLabel="Man" color="#006FFF"/>
                <GenderCard gender="/vrouwIcon.svg" genderLabel="Vrouw" color="#FF2266"/>
            </div>
            <ArrowButtonNext link="/housing" />
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
 
export default GenderPage;