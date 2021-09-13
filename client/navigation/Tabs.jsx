import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcon } from "../components";
import { icons } from "../constants/index";
import { Home, Mangas, Animes } from "../screens/index";
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Animes"
        component={Animes}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focuse={focused} icon={icons.Home} label="Animes" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focuse={focused} icon={icons.Home} label="Home" />;
          },
        }}
      />
      <Tab.Screen
        name="Mangas"
        component={Mangas}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focuse={focused} icon={icons.Home} label="Mangas" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
