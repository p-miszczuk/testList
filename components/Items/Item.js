import React from 'react';
import {StyleSheet, View, Text, Image, Linking} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const handleOpenUrl = url => {
   Linking.openURL(`${url}`).catch(error => console.log(error))
}

const Item = ({id, author, url, image}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `${image}`}}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{`${author}`}</Text>
          <Text style={styles.number}>{`${id}`}</Text>
        </View>
        <View>
          <Text style={styles.link} onPress={() => handleOpenUrl(url)}>{`${url}`}</Text>
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
    width: '98%',
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
    backgroundColor: '#ccc',
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
    fontWeight: 'bold',
  },
  number: {
    width: 25,
    height: 25,
    lineHeight: 25,
    textAlign: 'center',
    backgroundColor: 'blue',
    borderRadius: 50,
    color: '#fff',
    fontSize: 10,
  },
  link: {
    fontSize: 12
  }
});

export default Item;
