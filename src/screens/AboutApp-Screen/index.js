import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: "80%", height: 100, marginTop: 40 }}
          source={require("../../../assets/about.jpg")}
        />
        <Text style={styles.heading}>Welcome To Our App</Text>

        <Text style={{ textAlign: "justify", margin: 20, marginTop: 30 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat..
        </Text>

        <Text style={{ textAlign: "justify", margin: 20, marginTop: -10 }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </Text>

        <Text style={{ textAlign: "justify", margin: 20, marginTop: -10 }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
    color: "#ED175D"
  }
});

export default AboutScreen;
