import React, { useState } from "react";
import {
  View,
  Alert,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useMutation, gql } from "@apollo/client";
import { Color } from "../../Color/Color";
import Filed from "../../Components/Filed";
import Btn from "../../Components/Btn";

const CREATE_USER = gql`
  mutation MyMutation($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        jwtAuthToken
        jwtRefreshToken
      }
    }
  }
`;

const Sign = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loader, setLoader] = useState(false);

  const [registerUser] = useMutation(CREATE_USER);

  const handleSignUp = async () => {
    try {
      setLoader(true);
      const { data } = await registerUser({
        variables: {
          input: {
            username,
            email,
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
      setEmail("");
      console.log("User created:", data.registerUser.user.jwtAuthToken);
      // Handle success, e.g., navigate to another screen
    } catch (error) {
      console.error("Error reg user:", error);
      Alert.alert(error);

      // console.error('Error reg user:', data.registerUser.user);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <View>
      {/* <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} /> */}

      <View style={{ backgroundColor: "rgb(5, 160, 203)" }}>
        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 64 }}>Register</Text>
          <Text
            style={{
              color: "white",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            create an account
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Color.LightBlack,
            height: 700,
            borderTopLeftRadius: 130,
            paddingTop: 12,
            alignItems: "center",
            paddingHorizontal: 60,
            position: "relative",
          }}
        >
          {/* <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
            }}
            source={require("../../../assets/sign1.png")}
          /> */}
          <Filed
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <Filed
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Filed
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View
            style={{
              backgroundColor: "",
              width: "100%",
            }}
          ></View>
          <View
            style={{
              width: "100%",
              marginTop: 20,
            }}
          >
            <Btn
              Btnlabel={Loader ? <ActivityIndicator /> : "Sign Up"}
              bgColor={Color.darkBlue}
              textColor={"white"}
              Press={handleSignUp}
            />
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "grey", fontWeight: "bold", fontSize: 17 }}
                >
                  Already have an account?{" "}
                </Text>
                <Text
                  style={{
                    color: Color.darkBlue,
                    fontWeight: "bold",
                    fontSize: 17,
                  }}
                >
                  Login In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sign;
