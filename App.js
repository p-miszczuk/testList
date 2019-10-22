/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.containerList}>
        <Text>Test</Text>
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
  },
  containerButton: {},
});

export default App;
