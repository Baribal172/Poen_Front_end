import AdviesBalk from "../Components/AdviesBalk";
import Button from "../Components/Button";
import Container from "../Components/Container"
import InputCard from "../Components/InputCard";
import Nav from "../Components/Nav"
import PageTitle from "../Components/PageTitle"
import PrevIcon from "../Components/PrevIcon";

const DoelInstellen = () => {
    return ( 
        <>
        <Container>
            <PrevIcon />
            <Nav/>
            <div className="doel">
            <h1>Doel instellen</h1>
            </div>
            <InputCard 
                inputLabel="Foto"
                type=""
                id=""
                name=""
            />
            <InputCard 
                inputLabel="Waar spaar je voor?"
                type=""
                id=""
                name=""
            />
            <InputCard 
                inputLabel="Hoeveel kost je doel."
                type=""
                id=""
                name=""
            />

            
        </Container>
        <AdviesBalk 
            advies="€150,00"
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
            .doel {
                padding: 20px 0;
            }

            .advies {
                background-color: #006FFF;
                height: 50vh;
            }

            .btnOpslaan {
					position: absolute;
					bottom: 0;
					right: 20px;
					left: 20px;
					background-color: #fff;
					border-radius: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 20px;
					border: none;
				}

		`}</style>
        </>
     );
}
 
export default DoelInstellen;