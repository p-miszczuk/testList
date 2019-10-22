import React from 'react';
import {TouchableOpacity, View, Alert, Text, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const MainButton = ({text, buttonText, customBtn}) => {
  return (
    <TouchableOpacity style={customBtn} onPress={() => Alert.alert(`${text}`)}>
      <Text style={buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
