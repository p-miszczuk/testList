import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './components/Items/Item';
import Buttons from './components/Buttons/Buttons';

class App extends React.Component {

  state = {
    isLoading: true,
    data: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('https://picsum.photos/v2/list')
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        data: [...resp],
        isLoading: false
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const {isLoading, error} = this.state

    if (isLoading) 
      return (
        <View style={styles.containerSpinner}>
          <ActivityIndicator />
        </View>
      )

    if (error) {
      <View><Text>{error}</Text></View>
    }

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
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    color: Colors.black,
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  containerSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
