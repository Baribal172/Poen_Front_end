const LayoutBlue = ({children}) => {
    return ( 
        <div className="layout">
        {children}
        
        <style jsx>{`
        .layout {
            background-color: #006FFF;
            height: 100%;
        }
        `}</style>
        </div>
     );
}
 
export default LayoutBlue;