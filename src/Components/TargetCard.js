const TargetCard = ({ target, image, gespaard, doel }) => {
    return ( 
        <div className="targetCard">
                <h1>{target}</h1>
            <div className="target-flex">
                <img src={image} />
                <div>
                    <div className="card">
                        <p>Gespaard</p>
                        <p>{gespaard}</p>
                    </div>
                    <div className="card">
                        <p>Doel</p>
                        <p>{doel}</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
				.targetCard {
                    background-color: #fff;
                    width: 100%;
                    border-radius: 10px;
                    padding: 10px;
                    margin-top: 15px;
                    position: relative;
                    z-index: 900;
                }

                .target-flex {
                    display: flex;
                    justify-content: space-around;
                }

                .card {
                    margin-top: 10px;
                    background-color: #F6F7FF;
                    border-radius: 10px;
                    width: 86px;
                    height: 48px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                 
                }
			`}</style>
        </div>
     );
}
 
export default TargetCard;