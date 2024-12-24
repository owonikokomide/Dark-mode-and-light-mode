import "../css/herosection.css";
import { IoShieldOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { FiBarChart } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";
import Modal from "./Modal";

const HeroSection = () => {
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
		<section className="Herosection">
			<div className="word">
				<p className="trust">
					<IoShieldOutline />
					Trusted by 500+ Freelancers
				</p>
				<h1>
					Build Your{" "}
					<span style={{ color: "#b3d826" }}>Professional Legacy</span> One
					Relationship at a Time
				</h1>
				<p style={{ marginBottom: "20px", lineHeight: "2rem" }}>
					Transform one-time projects into lasting partnerships. Join a
					community of freelancers who prioritize trust, growth, and meaningful
					connections.
				</p>
				<button className="herobtn" onClick={toggleModal}>
					Join Waitlist <IoMdArrowForward />
				</button>
			</div>
			<div className="box">
				<div className="item">
					<LuUsers />
					<div className="text">
						<h4>Client Dashboard</h4>
						<p>Real-time project insights</p>
					</div>
				</div>
				<div className="item">
					<FiBarChart />
					<div className="text">
						<h4>Project Progress</h4>
						<p>85% Complete</p>
					</div>
				</div>
				<div className="item">
					<CiCalendar />

					<div className="text">
						<h4>Next Meeting</h4>
						<p>Tomorrow, 2 PM</p>
					</div>
				</div>
				<div className="item">
					<FaRegMessage />
					<div className="text">
						<h4>Client Messages</h4>
						<p>3 unread</p>
					</div>
				</div>
			</div>
			
			<Modal isVisible={showModal} onClose={toggleModal} />
		</section>
	);
};

export default HeroSection;
