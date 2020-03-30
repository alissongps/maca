import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';

export default function DietaScreen() {
  return (
    <View style={styles.container}>
      <Text>
        Você está na DietaScreen
      </Text>
    </View>
  );
}

DietaScreen.navigationOptions = {
  header: null,
};
