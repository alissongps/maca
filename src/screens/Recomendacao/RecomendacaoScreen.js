import * as React from 'react';
import { Text, View, AsyncStorage, Button } from 'react-native';

import styles from './styles';

export default function RecomendacaoScreen() {
  async function loadAsyncStorage() {
    try {
      const frutasStr = await AsyncStorage.getItem('minhasFrutas');
      if(frutasStr !== null) {
        let frutasArr = JSON.parse(frutasStr);
        console.log(frutasArr);
      }
      else {
        console.log('Nenhuma fruta encontrada');
      }
    }
    catch (error) {
      console.log('Error getting data');
      return;
    }
  }
  return (
    <View style={styles.container}>
      <Text>
        Você está na RecomendacaoScreen
      </Text>
      <Button onPress={loadAsyncStorage} title='Botao'/>
    </View>
  );
}

RecomendacaoScreen.navigationOptions = {
  header: null,
};
