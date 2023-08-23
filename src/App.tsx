import AppRoutes from "./AppRoutes.tsx";
import FirebaseProvider from "./components/FirebaseProvider.tsx";

const App = () => {
	return (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<FirebaseProvider>
			<AppRoutes/>
		</FirebaseProvider>
	)
}

export default App