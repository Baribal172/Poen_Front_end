const LayoutBlue = ({children}) => {
    return ( 
        <div className="layout">
        {children}
        
        <style jsx>{`
        .layout {
            background-color: #006FFF;
        }
        `}</style>
        </div>
     );
}
 
export default LayoutBlue;