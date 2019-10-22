import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Item = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        // source={require('@expo/snack-static/react-native-logo.png')}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>Header</Text>
          <Text style={styles.number}>100</Text>
        </View>
        <View>
          <Text>link</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    margin: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 6,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '800',
  },
  number: {
    width: 25,
    height: 25,
    lineHeight: 25,
    backgroundColor: 'blue',
    borderRadius: 50,
    color: '#fff',
    fontSize: 12,
  },
});

export default Item;
