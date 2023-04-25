/**
 * External dependencies
 */
import React from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

/**
 * Internal dependencies
 */
import EmptyScreen from '../components/empty-screen';

function Maps() {
  return (
    <View>
      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
      <EmptyScreen data={'maps'} />
    </View>
  );
}

export default Maps;
