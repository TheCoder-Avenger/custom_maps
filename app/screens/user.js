/**
 * External dependencies
 */
import React from 'react';
import {View, Text} from 'react-native';

/**
 * Internal dependencies
 */
import EmptyScreen from '../components/empty-screen';

function User() {
  return (
    <View>
      <EmptyScreen data={'user'} />
    </View>
  );
}

export default User;
