import { Link } from "react-router-dom";

const ArrowButtonNext = ({ link }) => {
    return ( 
    <Link to={link}>
    <div className="buttonNext">
        <img classname="icon" src="/arrowNext.svg" />
    <style jsx>{`
    .buttonNext {
        position: absolute;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        bottom: 13px;
        right: 20px;
        background-color: #FFFFFF;
        border-radius: 20px;
        width: 56px;
        height: 34px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
        z-index: 2;
    }
    `}</style>
    </div>
    </Link>
    );
}
 
export default ArrowButtonNext;