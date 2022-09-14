import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default function Example()  {
  const [items, setItems] = React.useState([
    {
      name: 'Logros y metas',
      code: 'violet',
      url: 'https://static.thenounproject.com/png/108494-200.png',
    },
    {
      name: 'Mis ejercicios',
      code: 'violet',
      url: 'https://cdn3.iconfinder.com/data/icons/workouts/500/workout-512.png',
    },
    {
      name: 'Mi perfil',
      code: 'violet',
      url: 'http://cdn.onlinewebfonts.com/svg/img_266351.png',
    },
    {
      name: 'Calendario',
      code: 'violet',
      url: 'http://cdn.onlinewebfonts.com/svg/img_189017.png',
    }
  ]);

  function createButtonAlert(msg, title) {
    Alert.alert(
      title,
      msg,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }

  
return (
    <SectionGrid
      itemDimension={120}
      spacing={20}
      sections={[
        {
          title: 'Club González',
          data: items.slice(0, 6),
        },
        {
          title: 'www.clubgonzalez.com',
          data: items.slice(6, 12),
        }
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDD"
          onPress={() => createButtonAlert(item.name, section.title)}>
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Image
              style={{ width: 60, height: 60 }}
              source={{ uri: item.url }}
            />
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 0,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'space-around',
    borderRadius: 30,
    padding: 31,
    height: 170,
    width: 140,
    alignItems: 'center'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center'
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    marginTop: 30
  },
});
