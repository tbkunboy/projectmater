import { Navigation } from "react-native-navigation";

import { registerScreens } from "./src/screens/RegisterScreens";
import store from "./src/stores";
import Provider from "./src/untils/MobxRnnProvider";
registerScreens(store, Provider);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        id: "Initializing",
        name: "Initializing"
      }
    }
  });
});
