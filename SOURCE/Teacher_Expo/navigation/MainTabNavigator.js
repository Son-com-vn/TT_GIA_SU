import React from "react";
import { Platform, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  BottomTabBar
} from "react-navigation";
import * as Icon from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import * as theme from "../constants/Theme";
import I18n from "../i18n/i18n";
import NotificationScreen from "../screens/main/NotificationScreen";
import UserScreen from "../screens/main/UserScreen";
import SalaryScreen from "../screens/main/SalaryScreen";
import ClassScreen from "../screens/main/ClassScreen";

const TabBarComponent = props => <BottomTabBar {...props} />;

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName = "basket";
  switch (routeName) {
    case "Class": {
      iconName = "home";
      break;
    }
    case "Salary": {
      iconName = "wallet";
      break;
    }
    case "Notification": {
      iconName = "bell";
      break;
    }
    case "UserInfor": {
      iconName = "user";
      break;
    }
  }
  return (
    <Icon.SimpleLineIcons name={iconName} size={20} color={tintColor} outline />
  );
};

const bottomBar = createBottomTabNavigator(
  {
    Class: {
      screen: ClassScreen,
      title: I18n.t("class"),
      navigationOptions: {
        tabBarLabel: I18n.t("class")
      }
    },
    Salary: {
      screen: SalaryScreen,
      title: I18n.t("salary"),
      navigationOptions: {
        tabBarLabel: I18n.t("salary")
      }
    },
    Notification: {
      screen: NotificationScreen,
      title: I18n.t("notification"),
      navigationOptions: {
        tabBarLabel: I18n.t("notification")
      }
    },
    UserInfor: {
      screen: UserScreen,
      title: I18n.t("user"),
      navigationOptions: {
        tabBarLabel: I18n.t("user")
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
      // tabBarLabel: ({ focused, tintColor }) => getTabBarLabel(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: theme.colors.active,
      inactiveTintColor: theme.colors.inactive
      // style: {
      //   backgroundColor: theme.colors.white,
      //   height: 58
      // }
    },
    tabBarComponent: props => {
      return (
        <TabBarComponent
          {...props}
          onTabPress={props.onTabPress}
          style={{
            borderTopColor: theme.colors.gray3,
            backgroundColor: theme.colors.bottombarBg,
            height: 58
          }}
        />
      );
    }
  }
);

export default createStackNavigator(
  {
    main: {
      screen: bottomBar
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
