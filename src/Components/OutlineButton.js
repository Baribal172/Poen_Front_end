const divStyle = {
    width: '333px',
    height: '60px',
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const OutlineButton = ({btnLabel}) => {
    return ( 
        <div style={divStyle}>
            <a>{btnLabel}</a>
        </div>
     );
}
 
export default OutlineButton;