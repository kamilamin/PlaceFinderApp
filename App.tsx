import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  // Sample data for the FlatList
  // const data = [
  //   { id: '1', title: 'Item 1', image: 'https://picsum.photos/id/10/200/300', cordinates: { lat: 100, long: 100 } },
  //   { id: '2', title: 'Item 2', image: 'https://picsum.photos/id/11/200/300', cordinates: { lat: 100, long: 100 } },
  //   { id: '3', title: 'Item 3', image: 'https://picsum.photos/id/12/200/300', cordinates: { lat: 100, long: 100 }},
  //   { id: '4', title: 'Item 4', image: 'https://picsum.photos/id/13/200/300', cordinates: { lat: 100, long: 100 } },
  //   { id: '5', title: 'Item 5', image: 'https://picsum.photos/id/14/200/300', cordinates: { lat: 100, long: 100 } },
  //   { id: '6', title: 'Item 6', image: 'https://picsum.photos/id/15/200/300', cordinates: { lat: 100, long: 100 } },
  //   { id: '7', title: 'Item 7', image: 'https://picsum.photos/id/16/200/300', cordinates: { lat: 100, long: 100 } },
  //   { id: '8', title: 'Item 8', image: 'https://picsum.photos/id/17/200/300', cordinates: { lat: 100, long: 100 } },
  // ];

  // // Render item for FlatList
  // const renderItem = ({ item }) => (
  //   <View style={styles.item}>
  //     <Image source={{ uri: item.image }} style={styles.image} />
  //     <Text style={styles.title}>{item.title}</Text>
  //   </View>
  // );

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{width: '100%', height: '100%'}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
       />
    </View>
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.header}>Horizontal Scroll List</Text>
    //   <FlatList
    //     data={data}
    //     renderItem={renderItem}
    //     keyExtractor={item => item.id}
    //     horizontal={true}
    //     showsHorizontalScrollIndicator={false}
    //     contentContainerStyle={styles.listContent}
    //   />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  listContent: {
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 150,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
