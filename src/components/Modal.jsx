import "../css/modal.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";

const Modal = ({ isVisible, onClose }) => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
	});
	const [loading, setLoading] = useState(false); // State for tracking loading

	if (!isVisible) return null;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true); // Set loading to true when submission starts

		try {
			const response = await fetch(
				"https://qa-api.savesecure.io/api/waitlist",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (response.ok) {
				Swal.fire({
					title: "Success!",
					text: "You have joined the waitlist.",
					icon: "success",
					confirmButtonText: "OK",
				});
				setFormData({ firstname: "", lastname: "", email: "" }); // Reset form
				onClose(); // Close modal after successful submission
			} else {
				Swal.fire({
					title: "Error!",
					text: "Something went wrong. Please try again.",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		} catch (error) {
			Swal.fire({
				title: "Error!",
				text: "An error occurred. Please check your connection.",
				icon: "error",
				confirmButtonText: "OK",
			});
			console.log(error);
		} finally {
			setLoading(false); // Set loading back to false when submission finishes
		}
	};

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h2>Join the Movement</h2>
					<button className="modal-close" onClick={onClose}>
						&times;
					</button>
				</div>
				<p>Be part of the next generation of freelancing excellence.</p>

				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="firstname">Firstname</label>
						<input
							type="text"
							name="firstname"
							id="firstname"
							value={formData.firstname}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastname">Lastname</label>
						<input
							type="text"
							name="lastname"
							id="lastname"
							value={formData.lastname}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleInputChange}
							required
						/>
					</div>
					<button className="join-btn" type="submit" disabled={loading}>
						{loading ? "Joining..." : "Join Now"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Modal;

Modal.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};
