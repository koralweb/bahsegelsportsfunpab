import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HaderLineBahsegel from '../components/HaderLineBahsegel';
import colorsBahsegel from '../data/themeBahsegel';
import styleBahsegel from '../data/styleBahsegel';
//Cave do Ateneu Comercial do Porto, R. de Passos Manuel 40, 4000-381 Porto,
function ContactScreenBahsegel({navigation}) {
  return (
    <>
      <HaderLineBahsegel navigation={navigation} />
      <View style={styles.mainBlockBahsegel}>
        <Text style={styles.titleBahsegel}>Contatos</Text>
        <Text style={styles.phoneBahsegel}>+351 912 080 150</Text>
        <Text style={styles.subTitleBahsegel}>Endereço</Text>
        <Text style={styles.phoneBahsegel}>
          Cave do Ateneu Comercial do Porto, R. de Passos Manuel 40, 4000-381
          Porto, Portugal
        </Text>
        <Text style={styles.subTitleBahsegel}>Horário de funcionamento</Text>
        <Text style={styles.phoneBahsegel}>Segunda-feira: 09:00–03:30</Text>
        <Text style={styles.phoneBahsegel}>Terça-feira: 09:00–03:30</Text>
        <Text style={styles.phoneBahsegel}>Quarta-feira: 09:00–03:30</Text>
        <Text style={styles.phoneBahsegel}>Quinta-feira: 09:00–03:30</Text>
        <Text style={styles.phoneBahsegel}>Sexta-feira: 09:00–03:30</Text>
        <Text style={styles.phoneBahsegel}>Sábado: 09:00–03:30</Text>
        <Text style={styles.phoneBahsegel}>Domingo: 09:00–03:30</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ...styleBahsegel,
  phoneBahsegel: {
    color: colorsBahsegel.green,
    fontSize: 18,
    textAlign: 'center',
    padding: 9,
    fontWeight: '700',
  },
  subTitleBahsegel: {
    textAlign: 'center',
    marginHorizontal: 11,
    marginTop: 29,
    fontSize: 19,
  },
});

export default ContactScreenBahsegel;
