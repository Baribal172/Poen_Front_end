const divStyle = {
    width: '333px',
    height: '60px',
    color: '#006FFF',
    backgroundColor: '#FFF',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const Button = ({btnLabel}) => {
    return ( 
        <div style={divStyle}>
            <a>{btnLabel}</a>
        </div>
     );
}
 
export default Button;