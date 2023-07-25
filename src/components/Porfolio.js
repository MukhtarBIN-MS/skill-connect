import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Image
            source={require('../../assets/img-1.png')} // Replace with the path to your image
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>Ankara Gown</Text>
        </View>
     
        <View style={styles.column}>
          <Image
            source={require('../../assets/img-2.png')} // Replace with the path to your image
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>3- Piece Suit</Text>
        </View>

        <View style={styles.column}>
          <Image
            source={require('../../assets/img-3.png')} // Replace with the path to your image
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>Jumpsuit Dress</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 122,
    flexShrink:0,
    borderRadius: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 11,
    
  },
});

export default Portfolio;
