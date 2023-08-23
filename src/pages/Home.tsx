import typescriptLogo from '../typescript.svg'
import viteLogo from '/vite.svg?url'
import '../style.css'
import {useContext, useEffect} from "react";
import {logEvent} from "firebase/analytics";
import AnalyticsContext from "../components/contexts/FirebaseAnalyticsContext.tsx";

const Home = () => {
	const analytics = useContext(AnalyticsContext)
	useEffect(() => {
		logEvent(analytics, 'home_page_visited')
	}, []);
	return (
		<div>
			<a href="https://vitejs.dev" target="_blank">
				<img src={viteLogo} className="logo" alt="Vite logo"/>
			</a>
			<a href="https://www.typescriptlang.org/" target="_blank">
				<img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo"/>
			</a>
			<h1>Vite + TypeScript</h1>
			<p className="read-the-docs">
				Click on the Vite and TypeScript logos to learn more
			</p>
		</div>
	)
}

export default Home