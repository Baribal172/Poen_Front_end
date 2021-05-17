const pStyle = {
    fontSize: '20px',
    color: '#fff',
    marginTop: '10px',
    marginBottom: '30px',
}


const TextWhite = ({text}) => {
    return ( 
        <div>
            <p style={pStyle}>{text}</p>
        </div>
     );
}
 
export default TextWhite;