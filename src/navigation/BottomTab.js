import { Navigation } from "react-native-navigation";

export const BottomTab = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "BottomTabId",
        children: [
          { component: { name: "Home" } },
          { component: { name: "Settings" } }
        ]
      }
    }
  });
