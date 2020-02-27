import React, { Component } from "react";
import {
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Button,
  View
} from "native-base";
import { Dimensions, StyleSheet, TouchableOpacity, Image } from "react-native";
const Width = Dimensions.get("window").width;
import { Feather } from "@expo/vector-icons";

export default class ListThumbnailExample extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.7}>
        <List style={styles.list}>
          <ListItem thumbnail onPress={this.props.onPress} noBorder>
            <Left>
              <Image
                style={{ width: 100, height: 100, left: -18 }}
                source={this.props.imagePath}
              />
            </Left>
            <Body>
              <Text
                style={{ fontSize: 14, marginLeft: -15, fontWeight: "bold" }}
              >
                {this.props.name}
              </Text>

              <Text
                note
                style={{ fontSize: 12, marginLeft: -15, color: "grey" }}
                numberOfLines={1}
              >
                {this.props.info}
              </Text>
            </Body>
            <Right>
              <Button
                transparent
                onPress={this.props.onPress}
                style={styles.Button}
              >
                <Feather
                  name="chevron-right"
                  size={20}
                  style={{ alignSelf: "center", color: "#ED175D" }}
                />
              </Button>
            </Right>
          </ListItem>
        </List>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: Width - 20,
    marginBottom: 10,
    height: 100,
    elevation: 1,
    backgroundColor: "white"
  },
  icon: {
    alignSelf: "center",
    color: "#FCDEE6"
  },
  Button: {
    backgroundColor: "#FCDEE6",
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});
