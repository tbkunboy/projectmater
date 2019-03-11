import { Navigation } from "react-native-navigation";

export const Drawer = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: "sideMenu",
        left: {
          component: {
            id: "Home",
            name: "Home"
          }
        },
        center: {
          stack: {
            id: "AppRoot",
            children: [
              {
                component: {
                  id: "Settings",
                  name: "Settings"
                }
              }
            ]
          }
        }
      }
    }
  });
};
