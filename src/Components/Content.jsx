import React from "react";

function Content() {
	return (
		<div className="content">
			<div className="content__wrapper">
				<div className="content__macbook">
					<img src="img/Content/macbook.png" alt="macbook" />
				</div>
				<div className="content__info">
					<div className="content__title">
						<h1>Your personal &lt;developer&gt;</h1>
					</div>
					<div className="content__subtitle">
						<h2>Development company</h2>
					</div>
					<div className="content__text">
						<p>We will implement any idea, or help you find it!</p>
					</div>
				</div>
			</div>
			<nav className="social">
				<a href="#" className="social__instagram"><img src="img/Header/icon/instagram.png" alt="Instagram" /></a>
				<a href="#" className="social__facebook"><img src="img/Header/icon/facebook.png" alt="Facebook" /></a>
				<a href="#" className="social__telegram"><img src="img/Header/icon/telegram.png" alt="Telegram" /></a>
				<a href="#" className="social__post"><img src="img/Header/icon/post.png" alt="" /></a>
			</nav>
		</div>
	);
}

export default Content;