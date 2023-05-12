import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import colorsBahsegel from '../data/themeBahsegel';

function MenuItemButtonBahsegel({
  menuItemBahsegel,
  setCurrentProductBahsegel,
  setShowAddProductComponentBahsegel,
}) {
  return (
    <View style={styles.contBahsegel}>
      <Text style={styles.tipoBahsegel}>{menuItemBahsegel.type}</Text>
      <Image source={menuItemBahsegel.img} style={styles.imageBahsegel} />
      <Text style={styles.nameBahsegel}>{menuItemBahsegel.name}</Text>
      <Text style={styles.descBahsegel}>{menuItemBahsegel.desc}</Text>
      <View style={styles.priceAddBahsegel}>
        <Text style={styles.costBahsegel}>€{menuItemBahsegel.price}</Text>
        <TouchableOpacity
          style={styles.addButtonBahsegel}
          onPress={() => {
            setCurrentProductBahsegel(menuItemBahsegel);
            setShowAddProductComponentBahsegel(true);
          }}>
          <FontAwesomeIcon
            icon={'circle-plus'}
            size={22}
            color={colorsBahsegel.lightgreen}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contBahsegel: {
    paddingVertical: 9,
    position: 'relative',
    marginTop: 19,
    borderTopWidth: 3,
    borderTopColor: 'grey',
    backgroundColor: '#fff',
  },
  imageBahsegel: {
    width: 119,
    height: 119,
    borderRadius: 39,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  tipoBahsegel: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colorsBahsegel.green,
    padding: 6,
  },
  nameBahsegel: {
    fontSize: 19,
    fontWeight: '700',
    color: colorsBahsegel.green,
    padding: 4,
  },
  descBahsegel: {
    color: 'grey',
    paddingHorizontal: 4,
  },
  priceAddBahsegel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 19,
    marginTop: 9,
  },
  costBahsegel: {
    fontSize: 21,
    color: colorsBahsegel.green,
    marginTop: 9,
    paddingLeft: 9,
  },
  addButtonBahsegel: {
    width: 99,
    height: 34,
    backgroundColor: colorsBahsegel.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuItemButtonBahsegel;
