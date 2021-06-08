const AdviesBalk = ({advies}) => {
    return ( 
        <div className="adviesBalk">
            <h1>{advies}</h1>
            <p className="adviesBold">Maandelijks opzij zetten</p>
            <style jsx>{`
			.adviesBalk {
                background-color: #FFF;
                width: 100%;
                height: 62px;
                margin-top: 10px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                text-align: center;
            }

            .adviesBold {
                font-weight: 700;
            }
		`}</style>
        </div>
     );
}
 
export default AdviesBalk;