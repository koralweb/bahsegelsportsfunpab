import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colorsBahsegel from '../data/themeBahsegel';
import cartBahsegel from '../store/CartBahsegel';

function AddProductComponentBahsegel({
  currentProductBahsegel,
  setShowAddProductComponentBahsegel,
}) {
  const [counterBahsegel, setCounterBahsegel] = useState(1);

  const CounterBahsegel = () => {
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
        <View style={styles.counterBahsegelValue}>
          <Text>{counterBahsegel}</Text>
        </View>
        <TouchableOpacity style={styles.operatorBahsegel} onPress={incBahsegel}>
          <FontAwesomeIcon icon={'plus'} color={colorsBahsegel.green} />
        </TouchableOpacity>
      </View>
    );
  };

  const addProductToCartBahsegel = () => {
    cartBahsegel.addProductToCartBahsegel({
      ...currentProductBahsegel,
      counter: counterBahsegel,
    });
    setShowAddProductComponentBahsegel(false);
  };

  return (
    <View style={styles.containerBahsegel}>
      <View style={styles.boxBahsegel}>
        <Image
          style={styles.imageBahsegel}
          source={currentProductBahsegel.img}
        />
        <Text style={styles.nameBahsegel}>{currentProductBahsegel.name}</Text>
        <Text style={styles.descBahsegel}>{currentProductBahsegel.desc}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
            marginBottom: 20,
          }}>
          <CounterBahsegel />
          <Text style={styles.priceBahsegel}>
            €
            {Math.floor(currentProductBahsegel.price * counterBahsegel * 100) /
              100}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnBahsegel}
          onPress={addProductToCartBahsegel}>
          <Text style={{color: '#fff'}}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerBahsegel: {
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.85)',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 101,
    justifyContent: 'center',
  },
  boxBahsegel: {
    width: '97%',
    paddingTop: 31,
    minHeight: 296,
    backgroundColor: '#fff',
  },
  btnBahsegel: {
    width: 206,
    height: 31,
    backgroundColor: colorsBahsegel.lightgreen,
    justifyContent: 'center',
    marginBottom: 19,
    alignItems: 'center',
    marginTop: 31,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
  },
  imageBahsegel: {
    width: 152,
    height: 152,
    margin: 11,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  nameBahsegel: {
    fontSize: 19,
    color: colorsBahsegel.green,
    fontWeight: '700',
    textAlign: 'center',
    padding: 6,
  },
  descBahsegel: {
    textAlign: 'center',
    color: 'silver',
    paddingHorizontal: 6,
  },
  counterBahsegel: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 21,
  },
  operatorBahsegel: {
    width: 31,
    alignItems: 'center',
    height: 31,
    borderColor: colorsBahsegel.green,
    borderWidth: 6,
    justifyContent: 'center',
  },
  counterBahsegelValue: {
    borderTopWidth: 6,
    borderBottomColor: colorsBahsegel.green,
    borderBottomWidth: 6,
    borderTopColor: colorsBahsegel.green,
    paddingHorizontal: 9,
  },
  priceBahsegel: {
    marginRight: 18,
    fontSize: 23,
    fontWeight: '700',
    color: colorsBahsegel.green,
  },
});

export default AddProductComponentBahsegel;
