// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import SignUpScreen from "./SignUpScreen";
// // import RestPassword from './RestPassword';
// // import LoginScreen from "./LoginScreen";

// const cache = new InMemoryCache();
// const client = new ApolloClient({
//   uri: "http://192.168.0.88:8080/wbpro/wbpro",
//   cache,
//   defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
// });

// export default function App() {
//   return (
//     <ApolloProvider client={client}>
//       {/* <LoginScreen /> */}
//       <View style={{ marginTop: 100 }}>
//         <Text>APP Interface 3</Text>
//         <SignUpScreen />
//         {/* <LoginScreen /> */}
//         {/* <RestPassword/> */}
//       </View>
//       <StatusBar />
//     </ApolloProvider>
//   );
// }
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

/// MY components
import LoginSignPage from "./src/Screens/LoginSignPage/LoginSignPage";
import LoginPage from "./src/Screens/Login/LoginPage";
import SignPage from "./src/Screens/Sign/SignPage";
import WebImg from "./src/Components/WebImg";
import FirstScreen from "./src/Screens/FirstScreen/FirstScreen";
import Home from "./src/Screens/Home/Home";
import ForgetPage from "./src/Screens/Forget/ForgetPage";

/// MY components

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://192.168.0.88:8080/wbpro/wbpro",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitle: (props) => (
              <WebImg
                stylesImg={{
                  width: 100,
                  height: 50,
                  resizeMode: "contain",
                }}
                {...props}
              />
            ),
          }}
        >
          <Stack.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="LoginSignPage" component={LoginSignPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Sign" component={SignPage} />
          <Stack.Screen name="Forget" component={ForgetPage} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
