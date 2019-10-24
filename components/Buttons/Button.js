import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const MainButton = ({text, buttonText, customBtn, onPress}) => {
  return (
    <TouchableOpacity style={customBtn} onPress={onPress}>
      <Text style={buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
