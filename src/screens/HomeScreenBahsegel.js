import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HaderLineBahsegel from '../components/HaderLineBahsegel';
import colorsBahsegel from '../data/themeBahsegel';
import styleBahsegel from '../data/styleBahsegel';

function HomeScreenBahsegel({navigation}) {
  return (
    <>
      <HaderLineBahsegel navigation={navigation} />
      <View
        style={{
          ...styles.mainBlockBahsegel,
          justifyContent: 'space-around',
          height: Dimensions.get('window').height,
        }}>
        <Image
          style={styles.logoBahsegel}
          source={require('../assets/images/icon.png')}
        />
        <TouchableOpacity
          style={styles.menuItemBahsegel}
          onPress={() => navigation.push('Market')}>
          <FontAwesomeIcon
            icon={'cart-arrow-down'}
            color={colorsBahsegel.green}
            size={25}
          />
          <Text style={styles.menuItemTextBahsegel}>A pontuação</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItemBahsegel}
          onPress={() => navigation.push('Booking')}>
          <FontAwesomeIcon
            icon={'utensils'}
            color={colorsBahsegel.green}
            size={25}
          />
          <Text style={styles.menuItemTextBahsegel}>Reserva</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItemBahsegel}
          onPress={() => navigation.push('Raspisanie')}>
          <FontAwesomeIcon
            icon={'calendar-days'}
            color={colorsBahsegel.green}
            size={25}
          />
          <Text style={styles.menuItemTextBahsegel}>Transmissão</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItemBahsegel}
          onPress={() => navigation.push('Contacts')}>
          <FontAwesomeIcon
            icon={'map-location-dot'}
            color={colorsBahsegel.green}
            size={25}
          />
          <Text style={styles.menuItemTextBahsegel}>Contatos</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const heightBahsegel = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ...styleBahsegel,
  logoBahsegel: {
    width: 249,
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 249,
    marginTop: 19,
    marginBottom: 19,
  },
  menuItemBahsegel: {
    borderColor: colorsBahsegel.green,
    flex: 1,
    borderWidth: 4,
    marginHorizontal: 5,
    minWidth: '45%',
    alignItems: 'center',
    maxHeight: heightBahsegel < 701 ? 199 : 269,
    marginVertical: 4,
    borderRadius: 18,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  menuItemTextBahsegel: {
    fontWeight: '700',
    marginLeft: 10,
  },
});

export default HomeScreenBahsegel;
