
const PrimaryTitle = ({title, color}) => {
    return ( 
        <div>
            <h1 className="title">{title}</h1>
        

        <style jsx>{`
        .title {
            padding-top: 140px;
            font-size: 52px;
            color: ${color};
        }
        `}</style>
        </div>
     );
}

export default PrimaryTitle;