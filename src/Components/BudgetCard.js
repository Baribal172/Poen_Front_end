import { Link } from "react-router-dom";

const BudgetCard = ({ budget, budgetInfo}) => {
    return ( 
        <Link to="/budgetInstellen" >
        <div className="budgetCard">
            <div className="icon">
                <img src="/bagIcon.png" />
            </div>
            <div className="budget">
                <h2>{budget}</h2>
                <p>{budgetInfo}</p>
            </div>
            <style jsx>{`
				.budgetCard {
                    background-color: #FFF;
                    width: 100%;
                    height: 95px;
                    border-radius: 10px;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                }

                .budget {
                    margin-left: 20px;
                }
			`}</style>
        </div>
        </Link>
     );
}
 
export default BudgetCard;