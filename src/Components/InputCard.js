const InputCard = ({ inputLabel, type, id, name }) => {
    return ( 
        <div className="inputCard">
            <label className="labelStyle">{inputLabel}</label>
			<input className="inputStyle" type={type} id={id} name={name} />
            <style jsx>{`
				.inputCard {
                    width: 335px;
                    height: 60px;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 20px;
                    margin-bottom: 13px;
                    background-color: #FFF;
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
                    z-index: 900;
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