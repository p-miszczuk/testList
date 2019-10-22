import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const MainButton = ({text, buttonText, customBtn, onPress}) => {
  return (
    <TouchableOpacity style={customBtn} onPress={onPress}>
      <Text style={buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
