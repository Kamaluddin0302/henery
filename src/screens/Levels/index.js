import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

class Levels extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: 40 }}></View>
          <Text style={styles.heading}>Cognitions of Choice</Text>

          <Text style={{ textAlign: "justify", margin: 20, marginTop: 10 }}>
            Learning to make healthy choices and maintain them is an important
            part of connecting to personal happiness and wellbeing. Cognitions
            of Choice was developed by Clare E Steffen, Ed.D to help you create
            a philosophy for living based on healthy choices. You will develop
            an approach to making choices that will carry you through life and
            in a variety of settings and environments. There are 24 Choice
            Action Traits/Shills/Abilities that you will experiment with
            applying in various situations and settings. You will learn to
            examine your own process involved in making choices at three levels:
          </Text>

          <Text style={styles.heading}>Level 1</Text>

          <Text
            style={{
              textAlign: "justify",
              margin: 20,
              marginTop: -10,
              backgroundColor: "white",
              elevation: 2,
              padding: 10
            }}
          >
            Cognitive-Behavioral Approach that focuses on inviting new choices
          </Text>

          <Text style={styles.heading}>Level 2</Text>

          <Text
            style={{
              textAlign: "justify",
              margin: 20,
              marginTop: -10,
              backgroundColor: "white",
              elevation: 2,
              padding: 10
            }}
          >
            A Meta-Communication Approach that focuses on investigating new
            choices
          </Text>

          <Text style={styles.heading}>Level 3</Text>

          <Text
            style={{
              textAlign: "justify",
              margin: 20,
              marginTop: -10,
              backgroundColor: "white",
              elevation: 2,
              padding: 10
            }}
          >
            A Mindful Approach that focuses on initiating new choices
          </Text>
          <Text style={{ textAlign: "justify", margin: 20, marginTop: -10 }}>
            As you move through the three levels of choice you will notice that
            your ability to make healthy choices will shift from an automatic
            (and sometimes an unhealthy choice) the to a conscious level while
            you connect to making healthy choices that align with your new
            choice thinking and philosophy for living. You will have the ability
            to document and track the situation, thoughts and feelings, choice
            made, COC applied, and outcomes, so that overtime the negative
            automatic thoughts are corrected and replaced with healthier
            approaches to making a choice. You can learn to be less reactive and
            more responsive. Having a personal philosophy for living based on
            choice will allow you to have an increased level of confidence,
            correct irrational or negative thoughts, connect to feeling calm,
            analyze, manage and regulate your thoughts, feelings, and behaviors,
            and maintain a mindful approach to life that supports your
            wellbeing.
          </Text>

          <Text style={styles.heading}>App Owner Name</Text>
          <Text style={{ textAlign: "center", marginBottom: 40 }}>
            Clare E. Steffen, Ed.D., N.D, BCC, NCC, CBHC, CADCII, ICADC, CNHP,
            CMH,
          </Text>
        </ScrollView>
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
    marginTop: 10,
    color: "#ED175D",
    textAlign: "center",
    marginBottom: 20
  }
});

export default Levels;
