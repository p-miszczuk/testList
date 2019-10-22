import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Alert } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './components/Items/Item';
import Buttons from './components/Buttons/Buttons';

class App extends React.Component {

  state = {
    isLoading: true,
    data: [],
    sortById: false,
    sortByAuthor: false
  }

  handleFetchData = () => {
    this.setState({isLoading: true, sortById: false, sortByAuthor: false})
    this.fetchData()
  }

  handleSortById = () => {
    this.setState({sortById: true, sortByAuthor: false})
  }

  handleSortByName = () => {
    this.setState({sortById: false, sortByAuthor: true})
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
    const {isLoading, data, sortById, sortByAuthor} = this.state

    if (isLoading) 
      return (
        <View style={styles.containerSpinner}>
          <ActivityIndicator color="blue" size="large" />
        </View>
      )

    return (
      <View style={styles.body}>
        <View style={styles.containerList}>
         {
          sortByAuthor ? 
            data
            .sort((id1, id2) => (id1.author > id2.author))
            .map(item => (
              <Item key={item.id} id={item.id} author={item.author} url={item.url} image={item.download_url} />
            )) :
          sortById ?
            data
            .sort((id1, id2) => (id1.id > id2.id))
            .map(item => (
              <Item key={item.id} id={item.id} author={item.author} url={item.url} image={item.download_url} />
            )) :
          data.map(item => (
            <Item key={item.id} id={item.id} author={item.author} url={item.url} image={item.download_url} />
          ))
         }         
        </View>
        <View style={styles.containerButtons}>
          <Buttons 
            handleFetchData={this.handleFetchData}
            handleSortByName={this.handleSortByName}
            handleSortById={this.handleSortById}
          />
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
