import React, { Component } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  TextInput
} from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
import { Icon } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import {
  HomeScreen,
  PostDetails,
  PrivacyPolicy,
  AboutScreen,
  Levels
} from "../../screens";
import { CustomMenu } from "../../components";
import * as Animatable from "react-native-animatable";

global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {
  constructor() {
    super();
    this.state = {
      searchBarFocused: true
    };
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardDidShow
    );
    this.keyboardWillShow = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row", marginLeft: 15 }}>
        {/* {this.state.searchBarFocused ? (
          <View style={{ width: screenWidth - 20 }}>
            <Animatable.View
              animation="slideInRight"
              duration={500}
              style={{
                height: 50,
                backgroundColor: "white",
                flexDirection: "row",
                padding: 5,
                alignItems: "center"
              }}
            >
              <Animatable.View
                animation={
                  this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"
                }
                duration={400}
              >
                <Icon
                  name={
                    this.state.searchBarFocused ? "md-arrow-back" : "ios-search"
                  }
                  style={{ fontSize: 24 }}
                />
              </Animatable.View>
              <TextInput
                placeholder="Search"
                style={{ fontSize: 24, marginLeft: 15, width: "100%" }}
              />
            </Animatable.View>
          </View>
        ) : ( */}
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon name="menu" style={{ color: "white" }} />
        </TouchableOpacity>
        {/* )} */}
      </View>
    );
  }
}

// Home Stack

const StackNavigatorForHome = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "lightgreen"
      },
      headerTintColor: "#fff"
    })
  },
  Details: {
    screen: PostDetails,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "lightgreen"
      },
      headerTintColor: "#fff"
    })
  }
});

const StackNavigatorForPrivacy = createStackNavigator({
  Privacy: {
    //Title
    screen: PrivacyPolicy,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "lightgreen"
      },
      headerTintColor: "#fff"
    })
  }
});

const StackNavigatorForLevels = createStackNavigator({
  Privacy: {
    //Title
    screen: Levels,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "lightgreen"
      },
      headerTintColor: "#fff"
    })
  }
});

const StackNavigatorForAboutApp = createStackNavigator({
  About: {
    //Title
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "lightgreen"
      },
      headerTintColor: "#fff"
    })
  }
});

const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    Home: {
      //Title
      screen: StackNavigatorForHome,
      navigationOptions: {
        drawerLabel: "Home"
      }
    },

    Privacy: {
      //Title
      screen: StackNavigatorForPrivacy
    },
    About: {
      screen: StackNavigatorForAboutApp
    },
    Levels: {
      screen: StackNavigatorForLevels
    }
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomMenu,
    //Sidebar width
    drawerWidth: Dimensions.get("window").width - 130
  }
);

export default createAppContainer(DrawerNavigatorExample);
