const InputCard = ({ inputLabel, type, id, name }) => {
    return ( 
        <div className="inputCard">
            <label className="labelStyle">{inputLabel}</label>
			<input className="inputStyle" type={type} id={id} name={name} />
            <style jsx>{`
				.inputCard {
                    width: 100%;
                    height: 60px;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 20px;
                    margin-bottom: 13px;
                    background-color: #FFF;
                }

                .labelStyle {
                    margin-bottom: 5px;
                }

                .inputStyle {
                    border: none;
                    border-bottom: 1px solid #000;
                }
			`}</style>
        </div>
     );
}
 
export default InputCard;