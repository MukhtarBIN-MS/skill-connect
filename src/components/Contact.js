import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Contact = () => {
  return (
    <React.Fragment>
      <View style={styles.rowContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="location-sharp"
            size={20}
            color="rgba(0, 68, 192, 1);"
          />
          <Text style={styles.rowText}>Lagos, Nigeria</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="call-sharp" size={20} color="rgba(0, 68, 192, 1);" />
          <Text style={styles.rowText}>+234 813 970 3721</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="mail-sharp" size={20} color="rgba(0, 68, 192, 1);" />
          <Text style={styles.rowText}>samdee@gmail.com</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text>Experience</Text>
          <View style={styles.rectangleBox}>
            <Text style={styles.expertText}>Expert</Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "90%", 
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowText: {
    marginLeft: 5,
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.50);",
  },
  rectangleBox: {
    backgroundColor: "lightblue",
    paddingHorizontal: 10,
    marginLeft: 3,
    paddingVertical: 5,
    borderRadius: 4,
  },
  expertText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
});

export default Contact;
