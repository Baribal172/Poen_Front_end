const CardCategorie = ({ icon, categorieName}) => {
    return ( 
        <div className="card">
            <div className="cardContent">
                <div className="icon">
                    <img src={icon} />
                </div>
                <h4 className="categorieName">{categorieName}</h4>
            </div>
        <style jsx>{`
        .card {
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            background-color: #FFFFFF;
            border-radius: 5px;
            width: 89px;
            height: 89px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
            z-index: 2;
            padding: 10px;
        }

        .cardContent {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .icon {
            max-width: 40px;
            color: #006FFF;
            fill: #fff;
        }

        .categorieName {
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            margin-top: 10px;
        }

        .card:focus,
        .card:hover{
        background-color: #006CFA;
        fill: #fff;
        }

        .categorieName:focus,
        .categorieName:hover {
        color: #fff;
        }


        `}</style>
        </div>
     );
}
 
export default CardCategorie;