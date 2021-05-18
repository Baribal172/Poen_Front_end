import BlueBg from "./BlueBg";

const Layout = ({children}) => {
    return ( 
        <div className="layout">
        {children}
        <BlueBg/>
        
        <style jsx>{`
        .layout {
            background-color: #F6F7FF;
        }
        .blueBg {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40%;
            border-radius: 20px 0px 0px 0px;
            background-color: #006FFF;
        }
        `}</style>
        </div>
     );
}
 
export default Layout;