import { Link } from "react-router-dom"

const divStyle = {
    color: '#fff',
    position: 'absolute',
    bottom: '95px',
    left: '80px',
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