import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Ratings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require("../../assets/avatar2.png")}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.column}>
          <Text style={styles.name}>Alien Daniel</Text>
          <View style={styles.starsContainer}>
            <Ionicons name="star" size={15} color="gold" />
            <Ionicons name="star" size={15} color="gold" />
            <Ionicons name="star" size={15} color="gold" />
            <Ionicons name="star" size={15} color="gold" />
            <Ionicons name="star" size={15} color="gold" />
            <Text>5.0</Text>
          </View>
        </View>
        </View>
          <Text style={styles.hours}>17 hours ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems:'flex-start',
    justifyContent:'space-between',
    padding:5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  column: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hours: {
    fontSize: 16,
    color: "grey",
    marginTop:10
  },
});

export default Ratings;
