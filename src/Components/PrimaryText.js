const PrimaryText = ({text, color}) => {
    return ( 
        <div>
            <p className="text">{text}</p>

        <style jsx>{`
        .text {
            font-size: 20px;
            color: ${color};
            margin-top: 10px;
            margin-bottom: 30px;
        }
        `}</style>
        </div>
     );
}
 
export default PrimaryText;