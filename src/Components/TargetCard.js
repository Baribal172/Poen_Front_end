const TargetCard = ({ key, target, image, gespaard, doel }) => {
	return (
		<div className='targetCard'>
			<h1>{target}</h1>
			<div className='target-flex'>
				<img src={image} />
				<div>
					<div className='card'>
						<p>Gespaard</p>
						<p>{gespaard}</p>
					</div>
					<div className='card'>
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
				}

				.target-flex {
					display: flex;
					justify-content: space-around;
				}

				.card {
					margin-top: 10px;
					background-color: #f6f7ff;
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
};

export default TargetCard;
