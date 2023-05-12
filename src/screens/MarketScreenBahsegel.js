import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import HaderLineBahsegel from '../components/HaderLineBahsegel';
import styleBahsegel from '../data/styleBahsegel';
import listOfMenuBahsegel from '../data/listOfMenuBahsegel';
import MenuItemButtonBahsegel from '../components/MenuItemButtonBahsegel';
import AddProductComponentBahsegel from '../components/AddProductComponentBahsegel';
import themeBahsegel from '../data/themeBahsegel';

const tipsBahsegel = ['Tudo', 'Pizza', 'Rolos', 'Wok', 'Cutucar', 'Saladas'];

function MarketScreenBahsegel({navigation}) {
  const [showAddProductComponentBahsegel, setShowAddProductComponentBahsegel] =
    useState(false);
  const [currentProductBahsegel, setCurrentProductBahsegel] = useState(null);
  const [tipoBahsegel, setTipoBahsegel] = useState('Tudo');

  const renderFilterBahsegel = () => {
    return tipsBahsegel.map(tipBahsegel => (
      <TouchableOpacity
        key={tipBahsegel}
        style={styles.tipBahsegel}
        onPress={() => setTipoBahsegel(tipBahsegel)}>
        <Text>{tipBahsegel}</Text>
      </TouchableOpacity>
    ));
  };

  const renderFullMenuBahsegel = () => {
    if (tipoBahsegel === 'Tudo')
      return listOfMenuBahsegel.map(menuItemBahsegel => (
        <MenuItemButtonBahsegel
          menuItemBahsegel={menuItemBahsegel}
          key={menuItemBahsegel.name}
          setShowAddProductComponentBahsegel={
            setShowAddProductComponentBahsegel
          }
          setCurrentProductBahsegel={setCurrentProductBahsegel}
        />
      ));
    else
      return listOfMenuBahsegel
        .filter(e => e.type === tipoBahsegel)
        .map(menuItemBahsegel => (
          <MenuItemButtonBahsegel
            menuItemBahsegel={menuItemBahsegel}
            key={menuItemBahsegel.name}
            setShowAddProductComponentBahsegel={
              setShowAddProductComponentBahsegel
            }
            setCurrentProductBahsegel={setCurrentProductBahsegel}
          />
        ));
  };

  return (
    <>
      {showAddProductComponentBahsegel && (
        <AddProductComponentBahsegel
          currentProductBahsegel={currentProductBahsegel}
          setShowAddProductComponentBahsegel={
            setShowAddProductComponentBahsegel
          }
        />
      )}
      <HaderLineBahsegel navigation={navigation} />
      <ScrollView style={styles.mainBlockBahsegel}>
        <View style={styles.rowBahsegel}>{renderFilterBahsegel()}</View>
        {renderFullMenuBahsegel()}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  ...styleBahsegel,
  tipBahsegel: {
    backgroundColor: '#fff',
    borderColor: themeBahsegel.green,
    borderWidth: 4,
    width: 99,
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 29,
  },
  rowBahsegel: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default MarketScreenBahsegel;
