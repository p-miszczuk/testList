import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainButton from './Button';

const Buttons = ({handleFetchData, handleSortById, handleSortByName}) => {
  return (
    <View style={styles.containerButtons}>
      <MainButton
        onPress={handleFetchData}
        text="Refresh list"
        buttonText={styles.buttonText}
        customBtn={styles.btn}
      />
      <MainButton
        onPress={handleSortByName}
        text="Sort by author"
        buttonText={styles.buttonText}
        customBtn={styles.btn}
      />
      <MainButton
        onPress={handleSortById}
        text="Sort by id"
        buttonText={styles.buttonText}
        customBtn={styles.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderColor: 'blue',
  },
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
