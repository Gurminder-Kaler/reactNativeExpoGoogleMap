import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 43.595310,
          longitude: -79.640579,
          latitudeDelta: 0.03358723958820065,
          longitudeDelta: 0.03358723958820065,
        }}
        minZoomLevel="4"
      >
        <Marker coordinate={{ latitude: 43.595310, longitude: -79.640579 }}
          pinColor={"green"} // any color
          title={"Mississauga"}
          description={"Ontario"} />
      </MapView>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
