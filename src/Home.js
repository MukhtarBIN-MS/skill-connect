import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Button title="Visit Profile" onPress={handleProfilePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
