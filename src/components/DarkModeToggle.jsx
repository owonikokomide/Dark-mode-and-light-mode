import { useState, useEffect } from "react";

const DarkModeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}, [isDarkMode]);

	return (
		<button
			onClick={() => setIsDarkMode(!isDarkMode)}
			style={{
				background: isDarkMode ? "#fff" : "#333",
				color: isDarkMode ? "#333" : "#fff",
				border: "none",
				borderRadius: "50%",
				padding: "8px",
				cursor: "pointer",
			}}
		>
			{isDarkMode ? "☀️" : "🌙"}
		</button>
	);
};

export default DarkModeToggle;
