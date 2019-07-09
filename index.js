// index.ios.js - plCE CODE IN HERE FOR ios

//IMPORT A LIBERY TO HELP create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Creaate a component
const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  </SafeAreaView>
);
//Render it to the Device
AppRegistry.registerComponent('albums', () => App);
