import AdviesBalk from "../Components/AdviesBalk";
import Container from "../Components/Container"
import InputCard from "../Components/InputCard";
import Nav from "../Components/Nav"
import PageTitle from "../Components/PageTitle"
import PrevIcon from "../Components/PrevIcon";
import { Form, Button, Card, Alert } from "react-bootstrap";

const DoelInstellen = () => {
    async function handleSubmit(e) {
    }
    return ( 
        <div>
        <Container>
            <PrevIcon 
            link="/"/>
            <Nav/>
            <div className="doel">
            <h1>Doel instellen</h1>
            </div>
           
					<Form onSubmit={handleSubmit}>
                        <Form.Group id='foto'>
							<div className='formStyle'>
								<Form.Label className='labelStyle'>Icoon / Foto</Form.Label>
								<Form.Control
									className='inputStyle'
									type='foto'
									
									required
								/>
							</div>
						</Form.Group>
                        
						<Form.Group id='doel'>
							<div className='formStyle'>
								<Form.Label className='labelStyle'>Waar spaar je voor?</Form.Label>
								<Form.Control
									className='inputStyle'
									type='doel'
									
									required
								/>
							</div>
						</Form.Group>

                        <Form.Group id='prijs'>
							<div className='formStyle'>
								<Form.Label className='labelStyle'>Hoeveel kost je doel?</Form.Label>
								<Form.Control
									className='inputStyle'
									type='prijs'
									
									required
								/>
							</div>
						</Form.Group>
                        <Button className='btnOpslaan' type='submit'>
							Opslaan
						</Button>
                        </Form>
            
        </Container>
        <AdviesBalk 
            bedrag="€150,00"
            advies="Maandelijkse opzij zetten"
        />
        <div className="advies">
        </div>
        <Container>
            

            
           
        </Container>
        <style jsx>{`
            .doel {
                padding: 20px 0;
            }

            .advies {
                background-color: #006FFF;
                height: 53vh;
            }

            .formStyle {
                width: 335px;
                    height: 60px;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 20px;
                    margin-bottom: 13px;
                    background-color: #FFF;
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
                    z-index: 900;
				}

				.labelStyle {
					margin-bottom: 5px;
				}

				.inputStyle {
					border: none;
                    border-bottom: 1px solid #000;
				}

				.btnOpslaan {
					position: absolute;
					bottom: 0;
					right: 20px;
					left: 20px;
					width: 335px;
					height: 60px;
					color: #006fff;
					background-color: #fff;
					border-radius: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 20px;
					border: none;
				}
		`}</style>
        </div>
     );
}
 
export default DoelInstellen;