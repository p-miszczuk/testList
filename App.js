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
    const {isLoading, data} = this.state

    if (isLoading) 
      return (
        <View style={styles.containerSpinner}>
          <ActivityIndicator />
        </View>
      )

    return (
      <View style={styles.body}>
        <View style={styles.containerList}>
         {
           data.map(item => (
             <Item key={item.id} id={item.id} author={item.author} url={item.url} image={item.download_url} />
           ))
         }         
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
  },
  containerSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerList: {
    flex: 1,
    flexDirection: 'column',
    width: '95%'
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderColor: 'blue'
  },
});

export default App;
