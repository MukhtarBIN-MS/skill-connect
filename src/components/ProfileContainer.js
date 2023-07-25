import React from "react";
import { Image, Text, View, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileContainer = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../assets/avatar.png")} 
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.onlineIndicator} />
      </View>
      <Text style={styles.name}>Samuel Dominic</Text>
      <Text style={styles.profession}>Fashion Designer, Male</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={15} color="gold" />
        <Ionicons name="star" size={15} color="gold" />
        <Ionicons name="star" size={15} color="gold" />
        <Ionicons name="star" size={15} color="gold" />
        <Ionicons name="star" size={15} color="gold" />
        <Text style={styles.rating}>5.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center", 
    fontFamily: "serif", 
    fontSize: 25, 
    fontWeight: "700", 
    lineHeight: 30,
    marginBottom:10, 
    color: "#0044C0", 
  },
  Nav:{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    width:'100%'
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 90, 
  },
  avatarContainer: {
    backgroundColor: "lightblue", 
    borderRadius: 60, 
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, 
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profession: {
    fontSize: 18,
    color: "lightgrey",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  rating: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "bold",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 5, 
    right: 17, 
    width: 15,
    height: 15,
    borderRadius: 15, 
    backgroundColor: "green", 
  },
});

export default ProfileContainer;
