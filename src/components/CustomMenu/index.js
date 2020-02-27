//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      "https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png";

    this.items = [
      {
        navOptionThumb: "home",
        navOptionName: "Home Screen",
        screenToNavigate: "Home"
      },
      {
        navOptionThumb: "users",
        navOptionName: "Levels of Cognitions",
        screenToNavigate: "Levels"
      },
      {
        navOptionThumb: "text-document-inverted",
        navOptionName: "Privacy Policy",
        screenToNavigate: "Privacy"
      },
      {
        navOptionThumb: "info",
        navOptionName: "About App",
        screenToNavigate: "About"
      }
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={require("../../../assets/splashScreen.jpg")}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 15
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: "100%" }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 10,
                marginTop: 5,
                backgroundColor:
                  global.currentScreenIndex === key ? "lightgreen" : "#ffffff"
              }}
              key={key}
            >
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Entypo
                  name={item.navOptionThumb}
                  size={25}
                  style={{
                    color: global.currentScreenIndex === key ? "white" : "black"
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: global.currentScreenIndex === key ? "white" : "black"
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}
              >
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FCDEE6",
    alignItems: "center",
    paddingTop: 20
  },
  sideMenuProfileIcon: {
    width: "100%",
    height: 200,
    marginTop: 5
  }
});
