import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { styles } from '../styles/styles';

const NewsCard = ({ article }: any) => {
  const navigation = useNavigation();

  return (
    <Card style={styles.card} onPress={() => navigation.navigate('NewsDetail', { article })}>
      <Card.Cover source={{ uri: article.urlToImage }} style={styles.image} />
      <Card.Content>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.date}>{new Date(article.publishedAt).toDateString()}</Text>
      </Card.Content>
    </Card>
  );
};

export default NewsCard;
