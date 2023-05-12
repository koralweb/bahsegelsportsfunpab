import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HaderLineBahsegel from '../components/HaderLineBahsegel';
import themeBahsegel from '../data/themeBahsegel';
import styleBahsegel from '../data/styleBahsegel';

function CheckoutScreenBahsegel({navigation}) {
  const [nameBahsegel, setNameBahsegel] = useState(null);
  const [phoneBahsegel, setPhoneBahsegel] = useState(null);
  const [addressBahsegel, setAddressBahsegel] = useState(null);
  const [deliveryBahsegel, setDeliveryBahsegel] = useState(true);

  return (
    <>
      <HaderLineBahsegel navigation={navigation} />
      <View style={styles.mainBlockBahsegel}>
        <Text style={styles.titleBahsegel}>Relógios</Text>
        <Text style={styles.labelBahsegel}>Nome</Text>
        <TextInput
          style={styles.inputBahsegel}
          onChangeText={setNameBahsegel}
          value={nameBahsegel}
        />
        <Text style={styles.labelBahsegel}>Telefone</Text>
        <TextInput
          style={styles.inputBahsegel}
          onChangeText={setPhoneBahsegel}
          value={phoneBahsegel}
        />
        <View style={styles.rowBahsegel}>
          <TouchableOpacity
            style={styles.deliveryBtnBahsegel}
            onPress={() => setDeliveryBahsegel(true)}>
            <FontAwesomeIcon
              icon={deliveryBahsegel ? 'circle-check' : 'circle-xmark'}
              color={deliveryBahsegel ? 'green' : 'red'}
              size={30}
            />
            <Text style={styles.deliveryTextBahsegel}>Entrega</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deliveryBtnBahsegel}
            onPress={() => setDeliveryBahsegel(false)}>
            <FontAwesomeIcon
              icon={!deliveryBahsegel ? 'circle-check' : 'circle-xmark'}
              color={!deliveryBahsegel ? 'green' : 'red'}
              size={30}
            />
            <Text style={styles.deliveryTextBahsegel}>Coletar</Text>
          </TouchableOpacity>
        </View>
        {deliveryBahsegel && (
          <>
            <Text style={styles.labelBahsegel}>Endereço</Text>
            <TextInput
              style={styles.inputBahsegel}
              onChangeText={setAddressBahsegel}
              value={addressBahsegel}
            />
          </>
        )}
        <TouchableOpacity
          style={styles.nextButtonBahsegel}
          onPress={() => navigation.push('After')}>
          <Text>Desenho</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ...styleBahsegel,
  labelBahsegel: {
    paddingLeft: 19,
    fontSize: 17,
    color: 'grey',
  },
  inputBahsegel: {
    backgroundColor: '#ededed',
    height: 35,
    paddingLeft: 9,
    borderWidth: 3,
    borderColor: 'grey',
    marginHorizontal: 11,
    marginBottom: 8,
  },
  rowBahsegel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  deliveryBtnBahsegel: {
    backgroundColor: '#fff',
    width: 149,
    height: 140,
    borderRadius: 19,
    borderColor: themeBahsegel.green,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 11,
  },
  deliveryTextBahsegel: {
    color: themeBahsegel.green,
    fontWeight: '700',
  },
});

export default CheckoutScreenBahsegel;
