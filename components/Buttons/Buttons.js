import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainButton from './Button';

const Buttons = () => {
  const btnsText = ['Refresh list', 'Sort by author', 'Sort by id'];
  return (
    <>
      {btnsText.map(item => (
        <MainButton
          key={item}
          text={item}
          buttonText={styles.buttonText}
          customBtn={styles.btn}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 100,
    backgroundColor: 'blue',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
  },
});

export default Buttons;
