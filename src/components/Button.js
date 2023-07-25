import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Button = () => {
  return (
      <TouchableOpacity style={styles.sendButton}>
        <Ionicons name="send-sharp" size={10} color="white" />
        <Text style={styles.sendButtonText}>Send Message</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sendButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "90%", 
    borderRadius: 3,
    backgroundColor: "blue", 
    paddingVertical: 10,
  },
  sendButtonText: {
    color: "white",
    marginLeft: 5,
    fontSize: 13,
  },
});

export default Button;
