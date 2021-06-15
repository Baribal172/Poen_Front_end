const LayoutBlue = ({children}) => {
    return ( 
        <div className="layout">
        {children}
        
        <style jsx>{`
        .layout {
            background-color: #006FFF;
            height: 100vh;
        }
        `}</style>
        </div>
     );
}
 
export default LayoutBlue;