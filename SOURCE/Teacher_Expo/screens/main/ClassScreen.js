import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Image,
  StyleSheet
} from "react-native";
import * as Theme from "../../constants/Theme";
import { LinearGradient } from "expo-linear-gradient";
import NavigationUtil from "../../navigation/NavigationUtil";
import { SCREEN_ROUTER } from "../../constants/Constant";
import MainHeader from "../../components/MainHeader";
import I18n from "../../i18n/i18n";
import mockData from "../../constants/Mockup";
import Block from "../../components/Block";
export default class ClassScreen extends Component {
  renderDetailItem = (item, index) => {
    return (
      <View style={{ flexDirection: "row" }} key={index.toString()}>
        <Text style={[Theme.fonts.regular14, { marginRight: 5 }]}>
          {item.daystr}
        </Text>
        <Text style={[Theme.fonts.regular14, { flex: 1 }]}>
          {item.timeStartStr} - {item.timeEndStr}
        </Text>
      </View>
    );
  };
  renderDetailLocation = (item, index) => {
    return (
      <View style={{ flexDirection: "row" }} key={index.toString()}>
        <Text style={[Theme.fonts.regular14, { marginRight: 5 }]}>
          {item.roomName} (T{item.typeDay})
        </Text>
      </View>
    );
  };
  renderItem = ({ item, pos }) => {
    return (
      <TouchableOpacity
        onPress={() => NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)}
        style={{ marginBottom: 15, width: "100%", alignItems: "center" }}
      >
        <Block
          shadow
          style={{
            backgroundColor: Theme.colors.white,
            width: "90%",
            elevation: 5
          }}
        >
          <LinearGradient colors={["#FF740D", "#F9AD2E"]} style={style.liner}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  position: "absolute",
                  alignItems: "flex-start",
                  width: "100%",
                  paddingLeft: 10
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/stack.png")}
                  style={{ width: 21, height: 18 }}
                />
              </View>

              <Text
                style={[
                  Theme.fonts.medium22,
                  { color: Theme.colors.white, alignItems: "center" }
                ]}
              >
                {item.className}
              </Text>
            </View>
          </LinearGradient>
          <View style={{ flex: 1, padding: 18 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
                // justifyContent:'center', backgroundColor:'#000'
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/calender.png")}
                style={{ width: 13, height: 14, marginRight: 35 }}
              />
              <View style={{ width: "100%" }}>
                {item.listschedule.map(this.renderDetailItem)}
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
                // justifyContent:'center', backgroundColor:'#000'
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/location.png")}
                style={{ width: 13, height: 14, marginRight: 35 }}
              />
              <View style={{ width: "100%" }}>
                {item.listschedule.map(this.renderDetailLocation)}
              </View>
            </View>
          </View>
        </Block>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={[Theme.styles.containter]}>
        <MainHeader title={I18n.t("class")} />
        <FlatList
          style={{ marginTop: 20 }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                // this._onRefresh();
              }}
            />
          }
          keyExtractor={(item, index) => index.toString()}
          data={mockData.listClass.result}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  liner: {
    minHeight: 36,

    justifyContent: "center"
  }
});
