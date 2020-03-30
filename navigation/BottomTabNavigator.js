import * as React from 'react';
import { Button, Text, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../src/screens/Home/HomeScreen';
import ConfiguracaoScreen from '../src/screens/Configuracao/ConfiguracaoScreen';
import DietaScreen from '../src/screens/Dieta/DietaScreen';
import RecomendacaoScreen from '../src/screens/Recomendacao/RecomendacaoScreen';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';

import macaBoldImg from '../src/assets/macaBold.png';
import homeIcon from '../src/assets/homeIcon.png';
import dietaIcon from '../src/assets/dietaIcon.png';
import recomendacaoIcon from '../src/assets/recomendacaoIcon.png';
import homeIconPressed from '../src/assets/homeIconPressed.png';
import dietaIconPressed from '../src/assets/dietaIconPressed.png';
import recomendacaoIconPressed from '../src/assets/recomendacaoIconPressed.png';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ 
    headerTitle: () => {
      const title = getHeaderTitle(route);
      if(title === 'Maçã') {
        return (
          <Image source={macaBoldImg} style={{width:35,height:35}}/>
        );
      }
      else {
        return (
          <Text style={{fontWeight:'bold', fontSize:18}}>
            {getHeaderTitle(route)}
          </Text>
        );
      }
    },
    headerRight: () => {
      if(getHeaderTitle(route) === 'Maçã') {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Configuracao')} style={{paddingRight:10}}>
               <EvilIcons name="gear" size={40} color="grey" />
          </TouchableOpacity>
        );
      }
      else {
        return null;
      }
    }, 
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{showLabel:false}}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => {
            if(focused) {
              return (
                <Image source={homeIconPressed} style={{width:28, height:28}}/>
              );
            }
            else {
              return (
                <Image source={homeIcon} style={{width:28, height:28}}/>
              );
            }
          },
        }}
      />
      <BottomTab.Screen
        name="Dieta"
        component={DietaScreen}
        options={{
          title: 'Dieta', 
          tabBarIcon: ({ focused }) => {
            if(focused) {
              return (
                <Image source={dietaIconPressed} style={{width:28, height:28}}/>
              );
            }
            else {
              return (
                <Image source={dietaIcon} style={{width:28, height:28}}/>
              );
            }
          },
        }}
      />
      <BottomTab.Screen
        name="Recomendacao"
        component={RecomendacaoScreen}
        options={{
          title: 'Recomendação',
          tabBarIcon: ({ focused }) => {
            if(focused) {
              return (
                <Image source={recomendacaoIconPressed} style={{width:28, height:28}}/>
              );
            }
            else {
              return (
                <Image source={recomendacaoIcon} style={{width:28, height:28}}/>
              );
            }
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Maçã';
    case 'Dieta':
      return 'Dieta';
    case 'Recomendacao':
      return 'Recomendação';
  }
}
