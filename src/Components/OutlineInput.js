const divStyle = {
	width: "100%",
	height: "60px",
	color: "#fff",
	border: "2px solid #fff",
	borderRadius: "10px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	padding: "20px",
	marginBottom: "13px",
};

const labelStyle = {
	marginBottom: "5px",
};

const inputStyle = {
	width: "100%",
	color: "#fff",
	backgroundColor: "rgba(201, 76, 76, 0)",
	border: "none",
	borderBottom: "1px solid #fff",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const OutlineInput = ({ inputLabel, type, id, name }) => {
	return (
		<div style={divStyle}>
			<label style={labelStyle}>{inputLabel}</label>
			<input style={inputStyle} type={type} id={id} name={name} />
		</div>
	);
};

export default OutlineInput;
