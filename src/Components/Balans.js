const Balans = ({infoBalans, balans}) => {
    return ( 
        <div className="flex">
        <h2>{infoBalans}</h2>
        <div className="balans">
            <p>{balans}</p>
        </div>
        <style jsx>{`
			.flex {
                margin-top: 30px;
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            h2 {
                font-size: 26px;
                font-weight: 400;
            }

            .balans {
                width: 96px;
                height: 96px;
                border-radius: 50px;
                background-color: #006FFF;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: 18px;
            }
		`}</style>
        </div>
     );
}
 
export default Balans;