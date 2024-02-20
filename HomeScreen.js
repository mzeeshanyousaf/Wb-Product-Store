import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query getproducts {
    products {
      nodes {
        id
        slug
        name
        type
        databaseId
        shortDescription
        image {
          id
          sourceUrl
          altText
        }
      }
    }
  }
`;

const HomeScreen = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <FlatList
        data={data.products.nodes}
        keyExtractor={(item) => item.id.toString()}
      
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text>Name: {item.name}</Text>
            <Text>Type: {item.type}</Text>
            {  console.log('img Url:', item.image.sourceUrl)}
            <Text>Description: {item.shortDescription}</Text>
            <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: item.image.sourceUrl }}
                resizeMode="contain"
                />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
