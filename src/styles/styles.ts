import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 10,
  },
  image: {
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  },
  date: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },
  listContainer: {
    padding: 10,
  },
  detailContainer: {
    flex: 1,
    padding: 10,
  },
  detailImage: {
    height: 250,
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  detailAuthor: {
    fontStyle: 'italic',
    fontSize: 14,
  },
  detailSource: {
    fontSize: 14,
    color: '#888',
  },
  detailDate: {
    fontSize: 12,
    color: '#888',
  },
  detailDescription: {
    marginTop: 10,
    fontSize: 14,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
