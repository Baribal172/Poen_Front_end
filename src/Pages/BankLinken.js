import Container from "../Components/Container";
import TextWhite from "../Components/TextWhite";
import Button from '../Components/Button';
import OutlineButton from "../Components/OutlineButton";
import { Link } from "react-router-dom";
import TitleWhite from "../Components/TitleWhite";
import OutlineInput from "../Components/OutlineInput";


const divStyle = {
    position: 'absolute',
    bottom: '0',
    right: '20px',
    left: '20px',
}

const imgStyle = {
    marginLeft: "auto",
    marginRight: "auto",
}

const BankLinken = () => {
    return ( 
        <Container>
		<div>
            <div style={imgStyle}>
                  <img src="/bank-link-icon.png" />
            </div>
                  <TitleWhite title="Koppel je bankrekening" />
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

            <div style={divStyle}>
                  <Link to="/Login"><Button btnLabel="Doorgaan" /></Link>
            </div>
		</div>
            </Container>
     );
}
 
export default BankLinken;