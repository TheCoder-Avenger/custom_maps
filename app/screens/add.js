/**
 * External dependencies
 */

import React from 'react';
import {View, Text} from 'react-native';
import {useTheme, DarkTheme} from '@react-navigation/native';

function Add() {
  const theme = useTheme();

  // const changeTheme = () => {
  //   theme.dark ?  :
  // };

  return (
    <View>
      <Text>ADD</Text>
    </View>
  );
}

export default Add;
