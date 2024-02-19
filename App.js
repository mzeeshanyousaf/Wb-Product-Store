import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import SignUpScreen from './SignUpScreen';
// import RestPassword from './RestPassword';
import LoginScreen from "./LoginScreen";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://192.168.0.88:8080/wbpro/wbpro",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      {/* <LoginScreen /> */}
      <View style={{ marginTop: 100 }}>
        <Text>APP Interface 1</Text>
        {/* <SignUpScreen /> */}
        <LoginScreen />
        {/* <RestPassword/> */}
      </View>
      <StatusBar />
    </ApolloProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
