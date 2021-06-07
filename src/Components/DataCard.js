const DataCard = ({label, color}) => {
    return ( 
        <div className="card">
        <div className="cardContent">
            <p className="label">{label}</p>
        </div>
        <style jsx>{`
        .card {
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 123px;
            background-color: #FFFFFF;
            width: 156.5px;
            border-radius: 20px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
            z-index: 2;
        }

        .cardContent {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .icon {
            object-fit: cover;
            height: 50px;
        }

        .label {
            margin-top: 15px;
            color: ${color};
            text-align: center;
            font-size: 36px;
            font-weight: 700;
        }
        `}</style>
        </div>
     );
}
 
export default DataCard;