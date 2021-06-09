const TransactieCard = ({transactie, kosten}) => {
    return ( 
       
        <div className="transactieCard">
            <div className="iconTransactie">
            <img src="/winkelenIcon.svg" />
            </div>
            <div className="transactie">
                <h4>{transactie}</h4>
            </div>
            <div className="kosten">
                <p>{kosten}</p>

            </div>
        <style jsx>{`
				.transactieCard {
                    margin-top: 15px;
                    background-color: #FFF;
                    width: 100%;
                    height: 95px;
                    border-radius: 20px;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
                
                .transactie {
                    text-align: left;
                }
                .iconTransactie {
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                    background-color: #006FFF;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                }

                .budget {
                    margin-left: 20px;
                }
			`}</style>
        </div>
     );
}
 
export default TransactieCard;