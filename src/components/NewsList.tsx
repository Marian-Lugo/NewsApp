import React, { useEffect } from 'react';
import { FlatList, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';
import NewsCard from './NewsCard';
import { styles } from '../styles/styles';

const NewsList = () => {
  const dispatch = useDispatch();
  const { loading, articles, error } = useSelector((state: any) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => <NewsCard article={item} />}
      keyExtractor={(item) => item.url}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default NewsList;
