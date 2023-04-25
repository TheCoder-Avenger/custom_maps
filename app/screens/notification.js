/**
 * External dependencies
 */
import React from 'react';
import {View, Text} from 'react-native';

/**
 * Internal dependencies
 */
import EmptyScreen from '../components/empty-screen';

function Notification() {
  return (
    <View>
      <EmptyScreen data={'notification'} />
    </View>
  );
}

export default Notification;
