import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Items from './components/Items/Items';
import Buttons from './components/Buttons/Buttons';

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleFetchData = () => {
    fetchData();
  };

  const handleSortById = () => {
    data.sort((a, b) => (parseInt(a.id, 10) > parseInt(b.id, 10) ? 1 : -1));
    setData([...data]);
  };

  const handleSortByName = () => {
    data.sort((item1, item2) => (item1.author > item2.author ? 1 : -1));
    setData([...data]);
  };

  async function fetchData() {
    setLoading(true);
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
          <Items data={data} />
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
