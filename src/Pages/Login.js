import Button from "../Components/Button";
import Container from "../Components/Container";
import OutlineInput from "../Components/OutlineInput";
import TextLink from "../Components/TextLink";
import TitleWhite from "../Components/TitleWhite";

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
    marginTop: '75px',
}

const Inloggen = () => {
    return ( 
        <Container>
            <div style={divStyle1}>
                <TitleWhite title="Welkom terug" />

                <div style={inputStyle}>
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
                </div>

                <div style={divStyle}>
                    <TextLink
                    text="Nog geen account? "
                    link="/Register"
                    linkLabel="Registreer" />

                    <Button link="/Home" btnLabel="Log in" />
                </div>
            </div> 
        </Container>
    );
}
 
export default Inloggen;