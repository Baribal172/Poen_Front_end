import AdviesBalk from "../Components/AdviesBalk";
import Balans from "../Components/Balans";
import Button from "../Components/Button";
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
                <CardCategorie icon="/etenIcon.svg" categorieName="Eten" />
                <CardCategorie icon="/winkelenIcon.svg" categorieName="Winkelen" />
                <CardCategorie icon="/drinkenIcon.svg" categorieName="Drinken" />
                <CardCategorie icon="/brommerIcon.svg" categorieName="Uitgaan" />
                <CardCategorie icon="/rokenIcon.svg" categorieName="Roken" />
                <CardCategorie icon="/cafeIcon.svg" categorieName="Cafe" />
            </div>
        </Container>
        <AdviesBalk
            bedrag="€150,00"
            advies="Winkelen"
        />
        <div className="advies">
        </div>
        <Container>
            

            
            <Button
                btnLabel="Opslaan"
                link="/"
            />
        </Container>
        <style jsx>{`
        .grid {
            display: grid;
            grid-template-columns: auto auto auto;
            column-gap: 34px;
            row-gap: 25px;
        }

        .advies {
                background-color: #006FFF;
                height: 38vh;
            }
        `}</style>
        
        
        </>
        
     );
}
 
export default BudgetInstellen;