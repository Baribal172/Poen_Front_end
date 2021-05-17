import Button from "../Components/Button";
import Container from "../Components/Container";
import OutlineInput from "../Components/OutlineInput";
import TitleWhite from "../Components/TitleWhite";
import TextWhite from "../Components/TextWhite";
import TextLink from "../Components/TextLink";

const divStyle = {
    position: 'absolute',
    bottom: '0',
    right: '20px',
    left: '20px',
}

const divStyle1 = {
    marginTop: '140px',
}

const inputStyle = {

}

const ResetWachtwoord = () => {
    return ( 
        <Container>
        <div style={divStyle1}>
            <TitleWhite title="Reset wachtwoord" />
            <TextWhite text="Vul je emailadres in en we  versturen zo snel mogelijk een link om je wachtwoord te resetten." />
            <div style={inputStyle}>

            <OutlineInput
            inputLabel="Email"
            type="email"
            id="email"
            name="email"/>

            </div>

            <div style={divStyle}>
                <Button btnLabel="Bevestig" />
            </div>
        </div> 
    </Container>
     );
}
 
export default ResetWachtwoord;