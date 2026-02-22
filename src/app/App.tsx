import { useEffect } from "react";

import { HomePage } from "@pages/home-page";
import AOS from "aos";
import "aos/dist/aos.css";

export const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 450,
			easing: "ease-out-cubic",
			once: true,
			offset: 8,
		});
	}, []);

	return <HomePage />;
};
