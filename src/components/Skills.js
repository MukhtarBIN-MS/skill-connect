import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Skills = () => {


  return (
    <React.Fragment>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.boldLetter}>Fitting</Text>
        </View>

        <View style={styles.column}>
        <Text style={styles.boldLetter}>Sewing</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.boldLetter}>Measurement Taking</Text>
        </View>

        <View style={styles.column}>
        <Text style={styles.boldLetter}>Amendment</Text>
        </View>
      </View>
      </React.Fragment>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding:10,
    marginTop: 10, 
  },
  column: {
    flexDirection: 'column',
    alignItems:'flex-start' ,
    justifyContent:'center'
  },
  boldLetter: {
    fontSize: 15,
    borderWidth: 2,
    borderColor: "rgba(0, 68, 192, 0.20)",
    borderRadius: 20,
    color:'black',
    padding: 10,
    marginRight:15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'rgba(0, 68, 192, 1)'
  },
  subtitle1: {
    fontSize: 14,
    color: '#000',
  },
  subtitle2: {
    fontSize: 14,
    color: 'grey',
  },
});

export default Skills;
