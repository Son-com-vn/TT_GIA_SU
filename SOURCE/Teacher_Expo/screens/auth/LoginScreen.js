import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  TextInput
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Theme from "../../constants/Theme";
import I18n from "../../i18n/i18n";
import NavigationUtil from "../../navigation/NavigationUtil";
import { SCREEN_ROUTER } from "../../constants/Constant";
const { height } = Dimensions.get("window");
export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <KeyboardAvoidingView enabled behavior="padding" style={style.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
        >
          <Image
            resizeMode="contain"
            style={style.logo}
            source={require("../../assets/images/logoWindSky.png")}
          />
          <TextInput
            placeholder="Tài khoản"
            style={[style.tvInput, { marginTop: 30, marginBottom: 15 }]}
          />
          <TextInput placeholder="Mật khẩu" style={style.tvInput} />
          <TouchableOpacity
            onPress={() => NavigationUtil.navigate(SCREEN_ROUTER.MAIN)}
            activeOpacity={0.7}
            style={{ width: "90%" }}
          >
            <LinearGradient
              colors={["#F9AD2E", "#FF740D"]}
              style={{
                padding: 15,
                alignItems: "center",
                borderRadius: 5,

                marginTop: 50
              }}
            >
              <Text
                style={[Theme.fonts.medium18, { color: Theme.colors.white, fontWeight:'bold' }]}
              >
                {I18n.t("login")}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    // width: width,
    flex: 1
    // backgroundColor : 'red'
  },

  imgBg: {
    width,
    height,
    position: "absolute",
    opacity: 0.5,
    backgroundColor: "rgb(13, 45, 64)"
  },
  logo: {
    width: 240,
    height: 80,
    marginTop: width / 4
  },
  tvInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: Theme.colors.borderLogin,
    padding: 10,
    borderRadius: 6,
    backgroundColor: Theme.colors.bottombarBg
    //   marginTop:30
  }
});
