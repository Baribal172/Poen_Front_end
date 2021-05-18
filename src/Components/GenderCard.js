const GenderCard = ({ gender, genderLabel, color}) => {
    return ( 
        <div className="card">
        <div className="cardContent">
            <img className="icon" src={gender}/>
            <p className="genderLabel">{genderLabel}</p>
        </div>
        <style jsx>{`
        .card {
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 184px;
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

        .genderLabel {
            margin-top: 15px;
            color: ${color};
            text-align: center;
        }
        `}</style>
        </div>
     );
}
 
export default GenderCard;