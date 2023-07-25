import React, { useLayoutEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  ProfileContainer,
  Contact,
  Button,
  Task,
  Card,
  WorkExperience,
  Skills,
  Portfolio,
  Ratings,
  ReviewButton
} from "./components";

const Profile = () => {
  const navigation = useNavigation();
  const images = {
    summaryIcon: require("../assets/summary.png"),
    workIcon: require("../assets/Work.png"),
    skillsIcon: require("../assets/Chart.png"),
    starIcon: require("../assets/Star.png"),
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackImage: () => (
        <Ionicons name="arrow-back" size={32} color="black" />
      ),
      headerTitle: () => <Text style={styles.headerTitle}>View Profile</Text>,
      headerTitleAlign: "center", // To center the header title
      headerTransparent: false, // Make the header transparent
      headerStyle: {
        backgroundColor: "white", // Set the background color to transparent
      },
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileContainer />
        <Contact />
        <Button />
        <Task />

        <View style={styles.horizontalLine2} />

        <Card img={images.summaryIcon} title="Summary">
          <Text style={styles.longText}>
            There has been a password update on your account. Kindly reach out
            to us immediately if this isn’t your doing. There has been a
            password update on your account. Kindly reach out to us immediately
            if this isn’t your doing. There has been a password update on your
            account. Kindly reach out to us immediately if this isn’t your
            doing.
          </Text>
        </Card>

        <Card img={images.workIcon} title="Work Experience">
          <WorkExperience />
        </Card>

        <Card img={images.skillsIcon} title="Skills">
          <Skills />
        </Card>

        <Card img={images.summaryIcon} title="Job Portfolio">
          <Portfolio />
        </Card>

        <Card img={images.starIcon} title="Ratings and Review (8)">
          <Ratings />
          <Text style={styles.longText}>
            There has been a password update on your account. Kindly reach out
            to us immediately if this isn’t your doing. There has been a
            password update on your account. Kindly reach out to us immediately
            if this isn’t your doing. There has been a password update on your
            account. Kindly reach out to us immediately if this isn’t your
            doing.
          </Text>
          <ReviewButton/>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: -70,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    textAlign: "center",
    fontFamily: "serif",
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 30,
    color: "#0044C0",
  },
  horizontalLine2: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.10);",
    marginTop: 15,
    width: "90%",
  },
  longText: {
    fontSize: 11,
    lineHeight: 24,
    padding: 10,
    color: "rgba(0, 0, 0, 0.50);",
  },
});

export default Profile;
