import React, { Component, } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Clipboard,
    AppState
} from 'react-native';
import NavigationUtil from '../../navigation/NavigationUtil';
import { SCREEN_ROUTER } from '../../constants/Constant'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'
export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    async registerForPushNotificationsAsync() {
        const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            // Android remote notification permissions are granted during the app
            // install, so this will only ask on iOS
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted') {
            return;
        }
        // Get the token that uniquely identifies this device
        let token = await Notifications.getExpoPushTokenAsync();
        await AsyncStorage.setItem("deviceID",token)
        await Clipboard.setString(token)
        Clipboard.setString(token)
        console.log(token)
    }

    _handleNotification = (notification) => {
        // NavigationUtil.navigate("Pickup")
        // if (AppState.currentState === 'active') {
        //     Notifications.dismissAllNotificationsAsync()
        // }
    };

    componentDidMount() {
        this.registerForPushNotificationsAsync();
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        // if (userToken) {
        //     NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
        // } else {
            NavigationUtil.navigate(SCREEN_ROUTER.AUTH)
        // }
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center'
            }}>
                <ActivityIndicator
                    size='large'
                    color='#000'
                />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}