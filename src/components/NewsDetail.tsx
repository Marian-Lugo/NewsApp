import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from '../styles/styles';

const NewsDetail = ({ route }: any) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.detailContainer}>
      <Card>
        <Card.Cover source={{ uri: article.urlToImage }} style={styles.detailImage} />
        <Card.Content>
          <Text style={styles.detailTitle}>{article.title}</Text>
          <Text style={styles.detailAuthor}>By {article.author || 'Unknown'}</Text>
          <Text style={styles.detailSource}>Source: {article.source.name}</Text>
          <Text style={styles.detailDate}>{new Date(article.publishedAt).toDateString()}</Text>
          <Text style={styles.detailDescription}>{article.content}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default NewsDetail;
