/**
 * External dependencies
 */
import React from 'react';
import {View, Text} from 'react-native';

function EmptyScreen({data}) {
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Text style={{fontSize: 16, color: '#333'}}>
        This {data} page is currently
      </Text>
      <Text style={{fontSize: 16, color: '#333'}}>down for maintenance</Text>
    </View>
  );
}

export default EmptyScreen;
