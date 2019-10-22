import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './components/Items/Item';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.containerList}>
        <Item />
      </View>
      <View>
        <Text>Buttons</Text>
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
  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
  },
  containerButtons: {},
});

export default App;
