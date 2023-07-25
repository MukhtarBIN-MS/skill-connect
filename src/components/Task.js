import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Task = () => {
  return (
    <View style={styles.addProfileInfo}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="calendar-sharp"
          size={20}
          color="rgba(0, 68, 192, 1);"
        />
        <Text style={styles.rowText}>
          <Text style={styles.pText}>Join Date: </Text> 19th August, 2021
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          name="checkmark-circle-sharp"
          size={20}
          color="rgba(0, 68, 192, 1);"
        />
        <Text style={styles.rowText}>
          <Text style={styles.pText}>Completed Jobs: </Text> 300
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="time-sharp" size={20} color="rgba(0, 68, 192, 1);" />
        <Text style={styles.rowText}>
          <Text style={styles.pText}>Last Seen: </Text>4 Hours Ago
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowText: {
    marginLeft: 5,
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.50);",
  },
  addProfileInfo: {
    width: "90%",
    flexDirection: "column",
    marginTop: 10,
  },
  pText: {
    color: "rgba(0, 68, 192, 1)",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Task;
