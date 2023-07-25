import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ReviewButton = () => {
  return (
    <React.Fragment>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Write a Review</Text>
      </TouchableOpacity>
    </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 68, 192, 0.20)",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'bold',
    color:'rgba(0, 68, 192, 1)'
  },
});

export default ReviewButton;
