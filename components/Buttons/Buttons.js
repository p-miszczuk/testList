import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainButton from './Button';

const Buttons = ({handleFetchData, handleSortById, handleSortByName}) => {
  const btnsText = ['Refresh list', 'Sort by author', 'Sort by id'];
  return (
    <>
        <MainButton
          onPress={handleFetchData}
          text={btnsText[0]}
          buttonText={styles.buttonText}
          customBtn={styles.btn}
        />
        <MainButton
          onPress={handleSortByName}
          text={btnsText[1]}
          buttonText={styles.buttonText}
          customBtn={styles.btn}
        />
        <MainButton
          onPress={handleSortById}
          text={btnsText[2]}
          buttonText={styles.buttonText}
          customBtn={styles.btn}
        />
   
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 100,
    backgroundColor: 'blue',
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
  },
});

export default Buttons;
