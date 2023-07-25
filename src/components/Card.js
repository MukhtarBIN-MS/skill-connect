import React from "react";
import {Image, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ img, title, children }) => {
  return (
    <View style={styles.Firstcontainer}>
      <View style={styles.rowContainer2}>
        {Image && <Image source={img} style={styles.img} />}
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <View style={styles.horizontalLine} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  Firstcontainer: {
    width: "90%",
    borderWidth: 1,
    borderColor: "rgba(0, 68, 192, 0.20)",
    borderRadius: 10,
    marginTop: 20,
    marginBottom:10
  },
  rowContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    padding: 10,
  },
  img:{
     width:30,
     height:30
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "rgba(0, 68, 192, 0.20)",
    marginBottom: 8,
  },
});

export default Card;
