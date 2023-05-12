import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import cartBahsegel from '../store/CartBahsegel';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import themeBahsegel from '../data/themeBahsegel';
import MenuComponentBahsegel from './MenuComponentBahsegel';

function HaderLineBahsegel({navigation}) {
  const [menuVisibleBahsegel, setmenuVisibleBahsegel] = useState(false);

  const menuCloseBahsegel = () => {
    setmenuVisibleBahsegel(false);
  };

  const renderBtnBahsegel = () => {
    if (cartBahsegel.products.length)
      return (
        <TouchableOpacity
          style={{...styles.dfgghcvbcvBahsegel, left: 'auto', right: 10}}
          onPress={() => navigation.push('Cart')}>
          <FontAwesomeIcon
            icon={'cart-arrow-down'}
            color={themeBahsegel.green}
            size={22}
          />
          <View style={styles.countProdBahsegel}>
            <Text style={styles.countProdTextBahsegel}>
              {cartBahsegel.products.length}
            </Text>
          </View>
        </TouchableOpacity>
      );
  };

  return (
    <View
      style={{
        backgroundColor: themeBahsegel.lightgreen,
        position: 'relative',
        zIndex: 101,
      }}>
      <StatusBar barStyle={'light-content'} />
      {menuVisibleBahsegel && (
        <MenuComponentBahsegel
          navigation={navigation}
          menuCloseBahsegel={menuCloseBahsegel}
        />
      )}
      <TouchableOpacity
        style={styles.dfgghcvbcvBahsegel}
        onPress={() => setmenuVisibleBahsegel(true)}>
        <FontAwesomeIcon icon={'bars'} color={themeBahsegel.green} size={23} />
      </TouchableOpacity>
      {renderBtnBahsegel()}
      <View style={styles.conntBahsegel}>
        <Image
          style={styles.logoBahsegel}
          source={require('../assets/images/icon.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dfgghcvbcvBahsegel: {
    position: 'absolute',
    left: 10,
    top: 44,
    width: 54,
    backgroundColor: themeBahsegel.lightgreen,
    borderColor: themeBahsegel.green,
    height: 54,
    borderRadius: 24,
    borderWidth: 4,
    justifyContent: 'center',
    zIndex: 98,
    alignItems: 'center',
  },
  conntBahsegel: {
    height: 98,
    borderBottomColor: themeBahsegel.green,
    borderBottomWidth: 3,
    paddingTop: 33,
    width: '100%',
  },
  logoBahsegel: {
    width: 58,
    marginRight: 'auto',
    height: 58,
    marginLeft: 'auto',
  },
  countProdBahsegel: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    top: 0,
    height: 22,
    width: 22,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
  },
  countProdTextBahsegel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default observer(HaderLineBahsegel);
