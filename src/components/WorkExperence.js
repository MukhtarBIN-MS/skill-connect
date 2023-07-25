import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WorkExperience = () => {


  return (
    <React.Fragment>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.boldLetter}>S</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.title}>CEO/Founder</Text>
          <Text style={styles.subtitle1}>Samdon Fashion House</Text>
          <Text style={styles.subtitle2}>June-2018 - Present</Text>
        </View>
      </View>

      <View style={styles.row}>
      <View style={styles.column}>
        <Text style={styles.boldLetter}>M</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.title}>Tailoring Apprentice</Text>
        <Text style={styles.subtitle1}>Maydan Tailoring House</Text>
        <Text style={styles.subtitle2}>June-2011 - May2018</Text>
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
    fontSize: 24,
    flexShrink:0,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 68, 192, 0.10);',
    borderRadius: 10,
    color:'rgba(0, 68, 192, 1)',
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

export default WorkExperience;
