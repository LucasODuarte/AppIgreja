import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import Noticias from './pages/noticias';
import Calendario from './pages/calendario';
import Catequese from './pages/catequese';
import Comunidade from './pages/comunidade';

const TabNav = createBottomTabNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <TabNav.Navigator screenOptions={
        {
          tabBarShowLabel: true,
          tabBarStyle:styles.tabBarStyle,
          tabBarIconStyle: styles.iconContainer,
        }
      }>

        <TabNav.Screen name='Notícias'
          component={Noticias}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
              if(focused){
                return <Ionicons name="home" size={size} color={color} />
              }
              return <Ionicons name="home-outline" size={size} color={color} />
            } 
          }}
        />

        <TabNav.Screen
        name='Calendário'
        component={Calendario}
        options={{
          //headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            if(focused){
              return <Ionicons name="calendar" size={size} color={color} />
            }
            return <Ionicons name="calendar-outline" size={size} color={color} />
          } 
        }}
      />

        <TabNav.Screen 
        name='Catequese' 
        component={Catequese}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            if(focused){
              return <Ionicons name="school" size={size} color={color} />
            }
            return <Ionicons name="school-outline" size={size} color={color} />
          } 
        }}
      />

        <TabNav.Screen 
        name='Comunidade' 
        component={Comunidade}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            if(focused){
              return <Ionicons name="people" size={size} color={color} />
            }
            return <Ionicons name="people-outline" size={size} color={color} />
          },
        }}
      />

      </TabNav.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    height: 80,
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  }
});