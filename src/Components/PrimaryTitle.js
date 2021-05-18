
const PrimaryTitle = ({title, color}) => {
    return ( 
        <div>
            <h1 className="title">{title}</h1>
        

        <style jsx>{`
        .title {
            margin-top: 140px;
            font-size: 52px;
            color: ${color};
        }
        `}</style>
        </div>
     );
}

export default PrimaryTitle;