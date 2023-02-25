import React from "react";

function Header(){
	return(
		<header className="header">
			<div className="navbar">
				<div className="navbar__logo"><a href="#">Wolter Gray</a></div>
				<ul className="navbar__menu">
					<li className="navbar__list"><a href="#">About</a></li>
					<li className="navbar__list"><a href="#">Portfolio</a></li>
					<li className="navbar__list"><a href="#">Skills</a></li>
					<li className="navbar__list"><a href="#">Reviews</a></li>
				</ul>
				<div className="navbar__leng">
					<a href="#">EN/UA</a> 
				</div>
			</div>
		</header>
	);
}

export default Header;