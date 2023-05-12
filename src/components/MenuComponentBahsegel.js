import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colorsBahsegel from '../data/themeBahsegel';

const arrBahsegel = [
  ['home', 'Home', 'Casa'],
  ['store', 'Market', 'A pontuação'],
  ['utensils', 'Booking', 'Reserva'],
  ['calendar-days', 'Raspisanie', 'Transmissão'],
  ['map-location-dot', 'Contacts', 'Contatos'],
  ['cart-arrow-down', 'Cart', 'Cesta'],
];

function MenuComponentBahsegel({navigation, menuCloseBahsegel}) {
  const renderItemsBahsegel = () => {
    return arrBahsegel.map(ar => (
      <TouchableOpacity
        key={ar[0]}
        style={styles.menuItemBahsegel}
        onPress={() => navigation.push(ar[1])}>
        <FontAwesomeIcon icon={ar[0]} color={colorsBahsegel.green} size={25} />
        <Text style={styles.menuItemTextBahsegel}>{ar[2]}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.containerBahsegel}>
      <TouchableOpacity
        style={styles.closeMenuButtonBahsegel}
        onPress={menuCloseBahsegel}>
        <FontAwesomeIcon icon={'xmark'} color="#fff" size={50} />
      </TouchableOpacity>
      {renderItemsBahsegel()}
    </View>
  );
}

const styles = StyleSheet.create({
  containerBahsegel: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 101,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemBahsegel: {
    backgroundColor: '#fff',
    width: '90%',
    height: 71,
    borderColor: colorsBahsegel.green,
    borderWidth: 4,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 11,
  },
  closeMenuButtonBahsegel: {
    position: 'absolute',
    top: 49,
    right: 29,
  },
});

export default MenuComponentBahsegel;
