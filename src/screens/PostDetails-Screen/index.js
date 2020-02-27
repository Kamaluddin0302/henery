import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class PostDetails extends React.Component {
  render() {
    let data = this.props.navigation.state.params.data;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: "90%", height: 160, marginTop: 40 }}
          source={data.src}
        />
        <Text style={[styles.heading, { textAlign: "center", padding: 10 }]}>
          {data.goal}
        </Text>

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
    fontSize: 25,
    marginTop: 30,
    color: "#ED175D"
  }
});

export default PostDetails;
