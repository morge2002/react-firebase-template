import {createContext} from "react";
import {Analytics} from "firebase/analytics";

const AnalyticsContext = createContext<Analytics>({} as Analytics);

export default AnalyticsContext