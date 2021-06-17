import { Link } from "react-router-dom";

const PrevIcon = ({link}) => {
    return ( 
        <Link to={link}>
        <div className="prevIcon">
            <img src="./prevIcon.png" />
        
        <style jsx>{`
            .prevIcon {
                display: inline-flex;
            }
        `}</style>
        </div>
        </Link>
     );
}
 
export default PrevIcon;