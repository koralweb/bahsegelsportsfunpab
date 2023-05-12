import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HaderLineBahsegel from '../components/HaderLineBahsegel';
import styleBahsegel from '../data/styleBahsegel';
import cartBahsegel from '../store/CartBahsegel';

function AfterScreenBahsegel({navigation}) {
  useEffect(() => {
    cartBahsegel.resetBahsegel();
  }, []);
  return (
    <>
      <HaderLineBahsegel navigation={navigation} />
      <View style={styles.mainBlockBahsegel}>
        <Text
          style={{
            ...styles.textBahsegel,
            fontSize: 23,
            fontWeight: '700',
            marginTop: 50,
            marginBottom: 15,
          }}>
          Obrigado pelo seu pedido!
        </Text>
        <Text style={styles.textBahsegel}>
          Nossos gerentes entrarão em contato com você em breve
        </Text>
        <Text style={styles.textBahsegel}>
          Obrigado por escolher o nosso sports bar
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ...styleBahsegel,
  textBahsegel: {
    color: '#ededed',
    textAlign: 'center',
    fontSize: 13,
    paddingHorizontal: 10,
  },
});

export default AfterScreenBahsegel;
