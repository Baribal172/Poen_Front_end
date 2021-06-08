const PageTitle = ({title}) => {
    return ( 
        <div className="pageTitle">
            <h1>{title}</h1>
        <style jsx>{`
            .pageTitle {
                display: inline-flex;
                
            }
        `}</style>
        </div>
     );
}
 
export default PageTitle;