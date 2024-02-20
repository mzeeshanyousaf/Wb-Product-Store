import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useMutation, gql } from "@apollo/client";
import Filed from "../../Components/Filed";
import { Color } from "../../Color/Color";
import Btn from "../../Components/Btn";
const LOGIN_USER = gql`
  mutation MyMutation($input: LoginInput!) {
    login(input: $input) {
      authToken
      user {
        id
        name
      }
    }
  }
`;

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Loader, setLoader] = useState(false);
  const [login] = useMutation(LOGIN_USER);

  const handleLogin = async () => {
    try {
      setLoader(true);
      const { data } = await login({
        variables: {
          input: {
            username,
            password,
          },
        },
      });
      setLoader(false);
      navigation.navigate("Home", {
        name: username,
      });
      setUsername("");
      setPassword("");
      console.log("User Token:", data.login.authToken);
      console.log("User Name:", data.login.user.name);

      // Handle success, e.g., navigate to another screen
    } catch (error) {
      console.error("Error login user:", error);
      Alert.alert("Your", error);

      // console.error('Error reg user:', data.registerUser.user);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <View style={{ backgroundColor: "rgb(5, 160, 203)" }}>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 64 }}>Login</Text>
      </View>
      <View
        style={{
          backgroundColor: Color.LightBlack,
          height: 700,
          borderTopLeftRadius: 130,
          paddingTop: 100,
          alignItems: "center",
          paddingHorizontal: 60,
          position: "relative",
        }}
      >
        <Text
          style={{ color: Color.darkBlue, fontSize: 40, fontWeight: "bold" }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Login to your account
        </Text>

        <Filed
          placeholder="Username Or Email"
          value={username}
          onChangeText={setUsername}
        />

        <Filed
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Forget")}
            style={{
              marginVertical: 5,
              alignSelf: "right",
            }}
          >
            <Text style={{ color: "red", fontWeight: "bold" }}>
              Forget Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "",
            width: "100%",
          }}
        ></View>
        <View
          style={{
            width: "100%",
            marginTop: 100,
          }}
        >
          <Btn
            Btnlabel={Loader ? <ActivityIndicator /> : "Login"}
            bgColor={Color.darkBlue}
            textColor={"white"}
            Press={handleLogin}
          />
        </View>
        <View style={{ width: "100%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 17 }}>
              Dont have an account?{" "}
            </Text>
            <Text
              style={{
                color: Color.darkBlue,
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
