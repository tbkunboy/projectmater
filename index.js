/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import { AppRegistry } from "react-native";
// import App from "./App";
// import { name as appName } from "./app.json";

// AppRegistry.registerComponent(appName, () => App);
import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/ScreenManager";
import { BottomTab } from "./src/navigation/BottomTab";
BottomTab();
registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "Initializing"
      }
    }
  });
});
