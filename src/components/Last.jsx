import "../css/last.css"

const Last = () => {
  return (
		<div className="Last">
			<h1>Join the Future of Freelancing</h1>
			<p> 
				Be one of the 50 founding members who will shape the future of
				professional relationships.
			</p>
			<button className="priority-btn">Get Priority Access</button>
			<div className="sub-info">
				<span className="freelancers">
					❤️ Join 500+ freelancers building their legacy
				</span>
				<div className="progress-bar">
					<div className="progress" style={{ width: "87%" }}></div>
				</div>
				<span className="progress-text">Founding Circle: 87% Complete</span>
			</div>
		</div>
	);
}

export default Last
