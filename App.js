import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Items from './components/Items/Items'
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

    sortByAuthor && data.sort((item1,item2) => item1.author > item2.author)
    sortById && data.sort((item1,item2) => item1.id > item2.id)

    return (
      <View style={styles.body}>
        <View style={isLoading ? styles.containerSpinner : styles.containerList}>
         {
            isLoading ? 
              <ActivityIndicator color="blue" size="large" /> : 
              <Items sortById={sortById} sortByAuthor={sortByAuthor} data={data}/>
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
    width: '98%',
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
