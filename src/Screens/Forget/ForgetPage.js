import React, { useState } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { useMutation, gql } from "@apollo/client";
import { Color } from "../../Color/Color";
import Filed from "../../Components/Filed";
import Btn from "../../Components/Btn";

const PasswordResetEmail = gql`
  mutation MyMutation($input: SendPasswordResetEmailInput!) {
    sendPasswordResetEmail(input: $input) {
      success
    }
  }
`;

const ForgetPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [Loader, setLoader] = useState(false);

  const [sendPasswordResetEmail] = useMutation(PasswordResetEmail);

  const handleRest = async () => {
    try {
      setLoader(true);
      const { data } = await sendPasswordResetEmail({
        variables: {
          input: {
            username,
          },
        },
      });

      setLoader(false);
      setUsername("true");
      navigation.navigate("Login");
      alert("Password Rest:", data.sendPasswordResetEmail.success);
      // Handle success, e.g., navigate to another screen
    } catch (error) {
      console.error("Error Rest Password:", error);
      Alert.alert("Password Rest:",error);

      // console.error('Error reg user:', data.registerUser.user);
      // Handle error, e.g., show an error message
    }
  };

  return (
    // <View>
    //   <Text>Reset password Screen</Text>
    //   <TextInput
    //     placeholder="Username"
    //     value={username}
    //     onChangeText={setUsername}
    //   />

    //   <Button title="Rest Password" onPress={handleRest} />
    // </View>
    <View
      style={{
        backgroundColor: "rgb(5, 160, 203)",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: Color.LightBlack,

          borderRadius: 30,
          padding: 100,
          alignItems: "center",
          paddingHorizontal: 60,
          position: "relative",
          marginHorizontal: 30,
        }}
      >
        <Filed
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
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
            Btnlabel={Loader ? <ActivityIndicator /> : "Reset password"}
            bgColor={Color.darkBlue}
            textColor={"white"}
            Press={handleRest}
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

export default ForgetPage;
