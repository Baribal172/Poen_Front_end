import { Link } from "react-router-dom";

const divStyle = {
    width: '100%',
    height: '60px',
    color: '#006FFF',
    backgroundColor: '#FFF',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
}

const Button = ({ link, btnLabel}) => {
    return ( 
        <Link to={link}>
        <div className="divStyle">
            <a>{btnLabel}</a>
        </div>
        <style jsx>{`
            .divStyle {
                position: absolute;
                bottom: 0;
                right: 20px;
                left: 20px;
                width: 335px;
                height: 60px;
                color: #006fff;
                background-color: #fff;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;
                border: none;
            }

		`}</style>
        </Link>
     );
}
 
export default Button;