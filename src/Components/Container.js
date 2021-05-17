const divStyle = {
    marginLeft: '20px',
    marginRight: '20px',
}

const Container = ({children}) => {
    return ( 
        <div style={divStyle}>
            {children}
        </div>
     );
}
 
export default Container;