import React from 'react';
import { View } from 'react-native';
import NewsList from '../components/NewsList';
import { styles } from '../styles/styles';

const HomeScreen = () => (
  <View style={styles.container}>
    <NewsList />
  </View>
);

export default HomeScreen;
