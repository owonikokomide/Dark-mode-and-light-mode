import DarkModeToggle from "./DarkModeToggle";
import "../css/header.css";
import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
	const [showModal, setShowModal] = useState(false); 
 
	const toggleModal = () => { 
		setShowModal((prev) => {
			if (!prev) {
				document.body.classList.add("no-scroll");
			} else {
				document.body.classList.remove("no-scroll");
			}
			return !prev;
		});
	};

	return (
		<header>
			<div className="logo">
				<img
					src="/FIVANI-removebg-preview.png"
					alt="Logo"
					style={{ width: "50px", height: "50px" }}
				/>
				<h1>Fivani</h1>
			</div>

			<nav>
				<div className="dark">
				<DarkModeToggle />
				</div>
				
				<div className="btn">
				<button onClick={toggleModal}>Join Waitlist</button>
			</div>
			</nav>
			
			<Modal isVisible={showModal} onClose={toggleModal} />
		</header>
	);
};

export default Header;
