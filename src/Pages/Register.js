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

const Registreren = () => {
    return ( 
        <Container>
        <div style={divStyle1}>
            <TitleWhite title="Welkom" />
            <TextWhite text="Maak je nieuwe account aan en start met het plannen van je budget!" />
            <div style={inputStyle}>
            <OutlineInput
            inputLabel="Naam"
            type="text"
            id="naam"
            name="naam"/>

            <OutlineInput
            inputLabel="Email"
            type="email"
            id="email"
            name="email"/>

            <OutlineInput
            inputLabel="Wachtwoord"
            type="password"
            id="wachtwoord"
            name="wachtwoord"/>

            <OutlineInput
            inputLabel="Bevestig wachtwoord"
            type="password"
            id="bevestigWachtwoord"
            name="bevestigWachtwoord"/> 
            </div>

            <div style={divStyle}>
                <TextLink
                  text="Heb je al een account? "
                  link="/login"
                  linkLabel="Log in" />
                
                <Button link="/BankLinken" btnLabel="Registreer" />
            </div>
        </div> 
    </Container>
     );
}
 
export default Registreren;