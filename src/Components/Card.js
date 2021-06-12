import { Link } from "react-router-dom";

const Card = ({ link, label, text, height}) => {
    return ( 
        <Link to={link}>
        <div className="card">
            <h3 className="label">{label}</h3>
            <p className="cardText">{text}</p>
        <style jsx>{`
        .card {
            position: relative;
            background-color: #FFFFFF;
            border-radius: 20px;
            width: 333px;
            height: ${height};
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
            z-index: 2;
            padding: 15px;
            margin-top: 15px;
        }

        .label {
            color: #006FFF;
            font-size: 20px;
            margin-bottom: 9px;
        }

        .cardText {
            font-size: 16px;
        }

        `}</style>
        </div>
        </Link>
     );
}
 
export default Card;