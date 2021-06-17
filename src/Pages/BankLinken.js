import Container from "../Components/Container";
import TextWhite from "../Components/PrimaryText";
import OutlineButton from "../Components/OutlineButton";
import { Link } from "react-router-dom";
import PrimaryTitle from "../Components/PrimaryTitle";
import OutlineInput from "../Components/OutlineInput";
import LayoutBlue from "../Components/LayoutBlue";
import { Form, Button, Card, Alert } from "react-bootstrap";


const divStyle = {
    position: 'absolute',
    bottom: '0',
    right: '20px',
    
}

const imgStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "30px",
}

const BankLinken = () => {
    return ( 
      <LayoutBlue>
        <Container>
		<div>
            <div style={imgStyle}>
                  <img src="/bank-link-icon.png" />
            </div>
                  <PrimaryTitle title="Koppel je bankrekening" color="#fff" />
                  <OutlineInput
                  inputLabel="Bank"
                  type="text"
                  id="bank"
                  name="bank" />

                  <OutlineInput
                  inputLabel="Rekeningnummer"
                  type="text"
                  id="rekeningnummer"
                  name="rekeningnummer" />

            <Link to="https://link.tink.com/1.0/account-check/?client_id=458b97a9a9cf463daffe5c374b50324a&redirect_uri=https%3A%2F%2Fpoen-7fa31.web.app%2F&market=FR&locale=en_US&test=true">
            <Button className='btnLogin'>
			Link je bankrekening
		</Button>
            </Link>
		</div>
            </Container>
            <style jsx>{`
			.btnLogin {
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
      </LayoutBlue>
     );
}
 
export default BankLinken;