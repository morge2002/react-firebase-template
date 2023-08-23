import {FC, PropsWithChildren} from "react";
import {initializeApp} from "firebase/app";
import {initializePerformance} from "firebase/performance";
import {getAnalytics, setAnalyticsCollectionEnabled} from "firebase/analytics";
import {firebaseConfig} from "../config.ts";
import AnalyticsContext from "./contexts/FirebaseAnalyticsContext.tsx";

const FirebaseProvider: FC = (props: PropsWithChildren<object>) => {
	const {children} = props;
	const app = initializeApp(firebaseConfig);

	initializePerformance(app);
	// Use if you need access to the performance service to log custom traces. Create a context like below and add it to
	// this component.
	// const perf = getPerformance(app);

	const analytics = getAnalytics(app);
	// Disable analytics collection on localhost. To enable analytics collection on localhost, set the flag to true and
	// enable the debug view Chrome extension (See README).
	setAnalyticsCollectionEnabled(analytics, import.meta.env.PROD);

	return (
		<AnalyticsContext.Provider value={analytics}>
			{children}
		</AnalyticsContext.Provider>
	)
}

export default FirebaseProvider