import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Keyboard
} from "react-native";
import { PostCard } from "../../components";

let traits = [
  {
    choice: "Consider Options",
    moto: "There are always choices!",
    goal: `Slow down and review, while exploring possibilities`,
    src: require("../../../assets/head1.jpg")
  },
  {
    choice: "Create Alternatives",
    moto: `Let’s see another way I can look at this!`,
    goal: `You can always create a plan B and even in life situations where you can’t you still have choices`,
    src: require("../../../assets/peoples.png")
  },
  {
    choice: "Discernment",

    moto: ` I can discriminate between healthy and unhealthy choices`,
    goal: `Remain true to your values and respect personal boundaries for yourself and others`,
    src: require("../../../assets/brainy1.jpg")
  },
  {
    choice: "Altruism",

    moto: `I am giving back because I am grateful!`,
    goal: ` It is not about seeing others as less fortunate; it involves understanding loss and trauma can happen to anyone`,
    src: require("../../../assets/brainy3.jpg")
  },
  {
    choice: "Positive Mental Attitude",

    moto: `Things have a way of working out!`,
    goal: `Life is an exceptional gift to be appreciated at all levels of functioning`,
    src: require("../../../assets/brainy4.jpg")
  },
  {
    choice: "Cultural Appreciation",

    moto: `Aesthetics are present in all aspects of life`,
    goal: `Appreciate the differences because that is where real natural beauty exists`,
    src: require("../../../assets/brainy5.jpg")
  },

  {
    choice: "Open Communication",
    moto: `I want to connect to you!`,
    goal: `Listening occurs only when we are present and receptive, without this no intimacy occurs `,
    src: require("../../../assets/head6.jpg")
  },
  {
    choice: "Commitment",
    moto: `I am here for the long haul!`,
    goal: `Being connected allows us to prevent isolation and anxiety, and is an opportunity to  `,
    src: require("../../../assets/brainy6.jpg")
  },
  {
    choice: "Congruency  & Compatibility",

    moto: `Things need to fit to maintain wellness`,
    goal: `Complimentary views or perspectives can exist within us and between others, it creates harmony `,
    src: require("../../../assets/ORI14.jpg")
  },
  {
    choice: "Transcendence",
    moto: `I can see the future!`,
    goal: `We need to live in the present while being mindful of the future; without this we can become vulnerable to discouragement or despair `,
    src: require("../../../assets/TREE2.jpg")
  },
  {
    choice: "Future Orientation",

    moto: `I am hopeful!`,
    goal: `Passing the baton allows the rely to occur between generations and creates continuity in life`,
    src: require("../../../assets/TREE3.jpg")
  },
  {
    choice: "Seeking Solutions",

    moto: `I Investigate life with an open mind and heart`,
    goal: `Investigation with an open mind and heart goes beyond simple problem solving, it involves relational joining`,
    src: require("../../../assets/trees.png")
  },
  {
    choice: "Respect for Equality",
    moto: `We all do the best we can and have something to offer`,
    goal: `We don’t all have the same abilities or gifts but on a human level we all matter and contribute to life`,
    src: require("../../../assets/TREE6.jpg")
  },
  {
    choice: "Integrity",

    moto: `I will do the best I am able and respect all living creatures ~ I give you my word`,
    goal: `Being authentic and representing what you communicate to others with consistency offers a solid foundation`,
    src: require("../../../assets/TREE5.jpg")
  },
  {
    choice: "Sharing",

    moto: `I have more than enough!`,
    goal: `One of the greatest joys is giving to others willingly and not expecting anything in return`,
    src: require("../../../assets/TREE4.jpg")
  },
  {
    choice: "Reciprocal Joy",

    moto: `We matter to each-other!`,
    goal: `Learning to appreciate another beyond our flaws is a reason to celebrate`,
    src: require("../../../assets/brainy2.jpg")
  },
  {
    choice: "Protective Bond",

    moto: `I am there for you with love, acceptance, and forgiveness `,
    goal: `I will nurture you and release when you communicate you are ready to go forward`,
    src: require("../../../assets/TREE7.jpg")
  },
  {
    choice: "Courageous Acts",

    moto: `I will take a reasonable risk!`,
    goal: `We all have limitations because moving forward and being able to ask for help when needed allows us to live a successful life`,
    src: require("../../../assets/TREE8.jpg")
  },
  {
    choice: "Harmonious Balance",

    moto: `I live life in balance`,
    goal: `Life will through us curve balls and we can feel off balance, but protecting our core allows us holistic wellness`,
    src: require("../../../assets/head5.jpg")
  },
  {
    choice: "Whimsical Spontaneity",

    moto: `Life is fun~ Let’s see what happens`,
    goal: `We need to learn to laugh at ourselves, and enjoy others who grow from doing the same`,
    src: require("../../../assets/TREE1.jpg")
  },
  {
    choice: "Fearless Conviction",

    moto: `I am ready!`,
    goal: `Fearlessness is being committed to trying and being in a state of readiness to learn`,
    src: require("../../../assets/head4.jpg")
  },
  {
    choice: "Charisma",

    moto: `My authentic self is the best version of me!`,
    goal: `Accepting ourselves,forgiving our limitations, and loving ourselves provides us with a magnet that will draw others who focus on living in wellness toward us`,
    src: require("../../../assets/empowers.png")
  },
  {
    choice: "Self- Encouragement",

    moto: `I got this!`,
    goal: `The world doesn’t always offer readymade encouragement I will find it within myself`,
    src: require("../../../assets/ORI13.jpg")
  },
  {
    choice: "Self-Respect",
    moto: `It is my time!`,
    goal: `For everything there is a season and understanding that we are worthy and deserving allows us to live authentically`,
    src: require("../../../assets/minds.png")
  }
];

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            {traits &&
              traits.map((v, i) => {
                return (
                  <PostCard
                    name={v.choice}
                    imagePath={v.src}
                    info={v.moto}
                    onPress={() =>
                      this.props.navigation.navigate("Details", { data: v })
                    }
                  />
                );
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10
  }
});

export default HomeScreen;
