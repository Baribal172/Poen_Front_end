import { Link } from "react-router-dom"

const divStyle = {
    color: '#fff',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
}
const TextLink = ({text, link, linkLabel}) => {
    return ( 
        <div style={divStyle}>
            <p>{text}<Link to={link}><a>{linkLabel}</a></Link></p>
        </div>
     );
}
 
export default TextLink;