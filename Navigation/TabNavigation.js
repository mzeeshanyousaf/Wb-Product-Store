import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

/// MY components
import Exployre from "../src/Screens/Exployre/Exployre";
import Cart from "../src/Screens/Cart/Cart";
import Offers from "../src/Screens/Offers/Offers";
import Account from "../src/Screens/Account/Account";
import Home from "../src/Screens/Home/Home";

function TabNavigation() {
  // const screenOptions={
  //   tabbar
  // }
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: true,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            height: 60,
            left: 0,
            right: 0,
            backgroundColor: "white",
            elevation: 0,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" size={size} color={color} />
            ),
          }}
          name="Exployre"
          component={Exployre}
        />
        <Tab.Screen
          options={{
            // tabBarLabelStyle: true,
            // tabBarStyle: {
            //   position: "absolute",
            //   bottom: 0,
            //   paddingBottom: 20,
            // },
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
          name="Home1"
          component={Home}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="shopping-cart" size={size} color={color} />
            ),
          }}
          name="Cart"
          component={Cart}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="local-offer" size={size} color={color} />
            ),
          }}
          name="Offers"
          component={Offers}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
    </View>
  );
}

export default TabNavigation;
