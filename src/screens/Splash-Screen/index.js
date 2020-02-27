import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  ActivityIndicator
} from "react-native";
class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          <Image
            square
            style={styles.logo}
            source={require("./../../../assets/splashScreen.jpg")}
          />
          <View>
            <Text style={styles.heading}>
              Cognitions of Choice: Your Daily Approach to Healthy Living.
            </Text>
          </View>
          <View style={styles.container}>
            <ActivityIndicator
              color="#ED175D"
              size={70}
              style={styles.activityIndicator}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 100
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen"
  },
  activityIndicator: {
    marginTop: -40,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    height: 140
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    color: "#ED175D",
    textAlign: "center"
  }
});

export default HomeScreen;

// We need the front page of the app(where there is the picture of the colorful brain) to be labeled.
// Cognitions of Choice: Your Daily Approach to Healthy Living.

// Somewhere it needs to show my name: Clare E.Steffen, Ed.D., N.D, BCC, NCC, CBHC, CADCII, ICADC, CNHP, CMH,
//   H
// henry244
// Feb 18, 8: 22 PM
// ReportSpam
// Will the Welcome to Our App page be the page where you describe what the Cognitions of Choice are and how to best use the App ?
