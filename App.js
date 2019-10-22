import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './components/Items/Item';
import Buttons from './components/Buttons/Buttons';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.containerList}>
        <Item />
      </View>
      <View style={styles.containerButtons}>
        <Buttons />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    color: Colors.black,
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 3,
  },
});

export default App;
