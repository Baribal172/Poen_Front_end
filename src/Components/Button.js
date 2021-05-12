import { Link } from "react-router-dom";

const divStyle = {
    width: '100%',
    height: '60px',
    color: '#006FFF',
    backgroundColor: '#FFF',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
}

const Button = ({ link, btnLabel}) => {
    return ( 
        <Link to={link}>
        <div style={divStyle}>
            <a>{btnLabel}</a>
        </div>
        </Link>
     );
}
 
export default Button;