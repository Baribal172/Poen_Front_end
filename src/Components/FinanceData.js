const FinanceDate = ({uitgaven, overig}) => {
    return ( 
        <div className="financeFlex">
            <div>
                <p>Uitgaven</p>
                <h1>{uitgaven}</h1>
            </div>
            <div>
                <p>Overig</p>
                <h1>{overig}</h1>
            </div>
            <style jsx>{`
				.financeFlex {
                    background-color: #FFF;
                    width: 100%;
                    height: 115px;
                    margin-top: 10px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    text-align: center;
                }

                .budget {
                    margin-left: 20px;
                }
			`}</style>
        </div>
     );
}
 
export default FinanceDate;