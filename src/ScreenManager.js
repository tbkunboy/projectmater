import { Navigation } from "react-native-navigation";

import Home from "./Home";
import Initializing from "./Initializing";
import Settings from "./Settings";

export const registerScreens = () => {
  Navigation.registerComponent("Initializing", () => Initializing);
  Navigation.registerComponent("Home", () => Home);
  Navigation.registerComponent("Settings", () => Settings);
};
