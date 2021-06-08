import Balans from "../Components/Balans";
import CardCategorie from "../Components/CardCategorie";
import Container from "../Components/Container";
import Nav from "../Components/Nav";
import PrevIcon from "../Components/PrevIcon";

const BudgetInstellen = () => {
    return ( 
        <>
        <Container>
            <PrevIcon />
            <Nav />
            <div className="doel">
            <h1>Budget</h1>
            </div>

            <Balans 
                infoBalans="Resterend budget"
                balans="€575,00"
            />
            <div className="grid">      
                <CardCategorie icon="/brommerIcon.svg" categorieName="Eten" />
                <CardCategorie icon="/brommerIcon.svg" categorieName="Winkelen" />
                <CardCategorie icon="/brommerIcon.svg" categorieName="Drinken" />
                <CardCategorie icon="/brommerIcon.svg" categorieName="Uitgaan" />
                <CardCategorie icon="/brommerIcon.svg" categorieName="Roken" />
                <CardCategorie icon="/brommerIcon.svg" categorieName="Feesten" />
            </div>
        </Container>
        <style jsx>{`
        .grid {
            display: grid;
            grid-template-columns: auto auto auto;
            column-gap: 34px;
            row-gap: 25px;
        }
        `}</style>
        
        
        </>
        
     );
}
 
export default BudgetInstellen;