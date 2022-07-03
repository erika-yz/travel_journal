import navbar_style from "../styles/navbar.css";
import img_logo from "../images/logo.png";

export default function Navbar() {
	return (
		<nav>
			<img className="nav--logo" src={img_logo} alt="world" />
			<h1 className="nav--text"> my travel journal</h1>
		</nav>
	);
}
