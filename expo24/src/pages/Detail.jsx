import detailCss from "../styles/Detail.module.css";
import foto from "../assets/vrGames.jpg";

function Detail() {
	return (
		<>
			<div className={detailCss.header}>
				<img src={foto} alt="" />
				<h1>Title </h1>
			</div>
			<div>
				<div>
					<h1>Wat is er te doen?</h1>
					<p>Bescrhijving activiteit</p>
				</div>
				<div>
					<h1>Wanneer?</h1>
					<div>
						<h2>14-14:30</h2>
						<h2>plaats</h2>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
