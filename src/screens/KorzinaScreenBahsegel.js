import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import HaderLineBahsegel from '../components/HaderLineBahsegel';
import colorsBahsegel from '../data/themeBahsegel';
import styleBahsegel from '../data/styleBahsegel';
import cartBahsegel from '../store/CartBahsegel';
import {observer} from 'mobx-react-lite';

function KorzinaScreenBahsegel({navigation}) {
  const renderLIstBahsegel = () => {
    if (cartBahsegel.products.length)
      return cartBahsegel.products.map(prod => (
        <View style={styles.itemProdBahsegel} key={prod.name}>
          <TouchableOpacity
            style={styles.removeBtnBahsegel}
            onPress={() => cartBahsegel.removeProductFromCartBahsegel(prod)}>
            <FontAwesomeIcon icon={'xmark'} color={colorsBahsegel.red} />
          </TouchableOpacity>
          <Image source={prod.img} style={styles.imageBahsegel} />
          <View>
            <Text style={styles.nameBahsegel}>{prod.name}</Text>
            <CounterBahsegel cnt={prod.counter} />
          </View>
          <Text style={styles.priceBahsegel}>€{prod.price}</Text>
        </View>
      ));
    else
      return (
        <Text style={styles.emptyTextBahsegel}>
          Não existem itens no carrinho
        </Text>
      );
  };

  const CounterBahsegel = ({cnt}) => {
    const [counterBahsegel, setCounterBahsegel] = useState(cnt);

    const decBahsegel = () => {
      if (counterBahsegel > 1) setCounterBahsegel(counterBahsegel - 1);
    };

    const incBahsegel = () => {
      setCounterBahsegel(counterBahsegel + 1);
    };

    return (
      <View style={styles.counterBahsegel}>
        <TouchableOpacity style={styles.operatorBahsegel} onPress={decBahsegel}>
          <FontAwesomeIcon icon={'minus'} color={colorsBahsegel.green} />
        </TouchableOpacity>
        <View style={styles.counterValueBahsegel}>
          <Text style={{color: 'silver', fontWeight: '700'}}>
            {counterBahsegel}
          </Text>
        </View>
        <TouchableOpacity style={styles.operatorBahsegel} onPress={incBahsegel}>
          <FontAwesomeIcon icon={'plus'} color={colorsBahsegel.green} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <HaderLineBahsegel navigation={navigation} />
      <View style={styles.mainBlockBahsegel}>
        <Text style={styles.titleBahsegel}>Cesta</Text>
        {renderLIstBahsegel()}
        {cartBahsegel.products.length ? (
          <TouchableOpacity
            style={styles.nextButtonBahsegel}
            onPress={() => navigation.push('Checkout')}>
            <Text>Vá para o caixa</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ...styleBahsegel,
  itemProdBahsegel: {
    borderBottomWidth: 3,
    flexDirection: 'row',
    padding: 11,
    alignItems: 'center',
    borderBottomColor: 'grey',
  },
  imageBahsegel: {
    marginRight: 11,
    width: 69,
    height: 69,
  },
  nameBahsegel: {
    fontWeight: '700',
    fontSize: 19,
    color: colorsBahsegel.green,
  },
  counterBahsegel: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  operatorBahsegel: {
    borderRadius: 14,
    width: 29,
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colorsBahsegel.green,
  },
  counterValueBahsegel: {
    paddingHorizontal: 9,
    borderTopColor: colorsBahsegel.green,
    borderBottomColor: colorsBahsegel.green,
  },
  removeBtnBahsegel: {
    borderRadius: 14,
    width: 29,
    height: 29,
    alignItems: 'center',
    backgroundColor: '#ededed',
    marginRight: 9,
    justifyContent: 'center',
  },
  priceBahsegel: {
    color: '#ededed',
    marginLeft: 'auto',
    fontSize: 19,
    fontWeight: '700',
  },
  emptyTextBahsegel: {
    marginTop: 38,
    color: 'silver',
    textAlign: 'center',
  },
});

export default observer(KorzinaScreenBahsegel);
