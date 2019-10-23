import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Items from './components/Items/Items';
import Buttons from './components/Buttons/Buttons';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [sorts, setSorts] = useState({id: false, author: false});
  const [data, setData] = useState(null);

  const handleFetchData = () => {
    setSorts({id: false, author: false});
    setLoading(true);
    fetchData();
  };

  const handleSortById = () => {
    setSorts({id: true, author: false});
  };

  const handleSortByName = () => {
    setSorts({id: false, author: true});
  };

  async function fetchData() {
    fetch('https://picsum.photos/v2/list')
      .then(resp => resp.json())
      .then(resp => {
        setLoading(false);
        setData([...resp]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.body}>
      <View style={isLoading ? styles.containerSpinner : styles.containerList}>
        {isLoading ? (
          <ActivityIndicator color="blue" size="large" />
        ) : (
          <Items
            data={
              sorts.author
                ? data.sort((item1, item2) => item1.author > item2.author)
                : sorts.id
                ? data.sort((item1, item2) => item1.id > item2.id)
                : data
            }
          />
        )}
      </View>
      <Buttons
        handleFetchData={handleFetchData}
        handleSortByName={handleSortByName}
        handleSortById={handleSortById}
      />
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
  containerSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerList: {
    flex: 1,
    flexDirection: 'column',
    width: '98%',
  },
});

export default App;
