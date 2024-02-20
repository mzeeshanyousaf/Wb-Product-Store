import { Text, View } from "react-native";
import Btn from "../../Components/Btn";
import { Color } from "../../Color/Color";
import WebImg from "../../Components/WebImg";

function LoginSignPage({ navigation }) {
  function Login() {
    navigation.navigate("Login");
  }
  function Sign() {
    navigation.navigate("Sign");
  }
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 40,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "grey", fontSize: 29, marginBottom: 10 }}>
          READY TO ELEVATE YOUR
        </Text>
        <Text style={{ color: "#22D5FE", fontSize: 35, fontWeight: "bold" }}>
          ONLINE PRESENCE?
        </Text>
        <View style={{ marginVertical:30 }}>
          <WebImg
            stylesImg={{
              height: 100,
              resizeMode: "contain",
            }}
          />
        </View>
        <View >
          <Btn
            Btnlabel="Login"
            bgColor={Color.darkBlue}
            textColor="white"
            Press={Login}
          />
          <Btn
            Btnlabel="Signup"
            bgColor={Color.LightBlack}
            textColor={"white"}
            Press={Sign}
          />
        </View>
      </View>
    </View>
  );
}

export default LoginSignPage;
