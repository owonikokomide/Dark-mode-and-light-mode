import { FaShieldAlt, FaUserFriends, FaRibbon } from "react-icons/fa";
import "../css/trust.css"
const Trust = () => {
	return (
		<div className="container">
			<h1 className="title">Everything You Need to Build Trust</h1>
			<p className="subtitle">
				We&apos;ve reimagined how freelancers build and maintain client 
				relationships.
			</p>

			<div className="cards">
				<div className="card">
					<FaShieldAlt className="icon" />
					<h2>Protected Success</h2>
					<p>
						Smart payment protection and milestone tracking that builds trust
						automatically.
					</p>
					<ul>
						<li>Secure global payments</li>
						<li>Clear progress tracking</li>
						<li>Automated milestone releases</li>
					</ul>
				</div>

				<div className="card">
					<FaUserFriends className="icon" />
					<h2>Client Partnership Tools</h2>
					<p>
						Transform transactions into lasting relationships with our smart
						collaboration suite.
					</p>
					<ul>
						<li>Intelligent contracts</li>
						<li>Real-time collaboration</li>
						<li>Client communication hub</li>
					</ul>
				</div>

				<div className="card">
					<FaRibbon className="icon" />
					<h2>Growth Engine</h2>
					<p>
						Build your reputation and expand your professional network
						effortlessly.
					</p>
					<ul>
						<li>Automated testimonials</li>
						<li>Referral management</li>
						<li>Portfolio showcase</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Trust;
