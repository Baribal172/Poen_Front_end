import { Link } from "react-router-dom";

const ArrowButtonPrev = ({ link }) => {
    return ( 
    <Link to={link}>
    <div className="buttonPrev">
        <img classname="iconPrev" src="/arrowPrev.svg" />
    <style jsx>{`
    .buttonPrev {
        position: absolute;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        bottom: 13px;
        left: 20px;
        background-color: #FFFFFF;
        border-radius: 20px;
        width: 56px;
        height: 34px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
        z-index: 2;
        transform: rotate(180deg);
    }
    
    `}</style>
    </div>
    </Link>
    );
}
 
export default ArrowButtonPrev;