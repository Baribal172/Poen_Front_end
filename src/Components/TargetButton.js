const TargetButton = ({btnLabel}) => {
    return (
        <div className="targetFlex">
        <a href="/doelInstellen">
        <div className="targetButton">
            
            <p>{btnLabel}</p>
            <div className="icon">
                <img src="/plusIcon.png" />
            </div>
            
        </div>
        </a>
        <style jsx>{`
            .targetFlex {
                display: flex;
                justify-content: flex-end;
            }

            .targetButton {
                width: 158px;
                height: 50px;
                color: #fff;
                background-color: #006FFF;
                display: inline-flex;
                padding-left: 15px;
                align-items: center;
                border-radius: 10px;
            }

            .icon {
                padding-left: 15px;
                display: inline-flex;
                align-items: center;
            }
        `}</style>
        </div>

     );
}
 
export default TargetButton;