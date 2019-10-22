import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';

const Items = ({sortById, sortByAuthor, data}) => (
  <>
    {sortById ? <FlatList 
      data={data}
      renderItem={({item}) => (
        <Item key={item.id} id={item.id} author={item.author} url={item.url} image={item.download_url} />
      )}
    /> :
    sortByAuthor ? <FlatList 
      data={data}
      renderItem={({item}) => (
        <Item key={item.id} id={item.id} author={item.author} url={item.url} image={item.download_url} />
      )}
    /> :
    <FlatList 
      data={data}
      renderItem={({item}) => (
        <Item key={item.id} id={item.id} author={item.author} url={item.url} image={item.download_url} />
      )} 
    /> }
  </>
)
export default Items