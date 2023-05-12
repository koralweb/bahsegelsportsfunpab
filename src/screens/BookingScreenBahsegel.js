import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import HaderLineBahsegel from '../components/HaderLineBahsegel';
import styleBahsegel from '../data/styleBahsegel';
import DatePicker from 'react-native-modern-datepicker';
import colorsBahsegel from '../data/themeBahsegel';

let curDateBahsegel = new Date().toISOString().split('T')[0];

function BookingScreenBahsegel({navigation}) {
  const [selectedDateBahsegel, setSelectedDateBahsegel] = useState('');
  const [showDatePickerBahsegel, setShowDatePickerBahsegel] = useState(false);
  const [nameBahsegel, setNameBahsegel] = useState(null);
  const [phoneBahsegel, setPhoneBahsegel] = useState(null);
  const [personBahsegel, setPersonBahsegel] = useState(null);
  return (
    <>
      <HaderLineBahsegel navigation={navigation} />
      <View style={styles.mainBlockBahsegel}>
        <Text style={styles.titleBahsegel}>Mesa de reservas</Text>
        <Text style={styles.labelBahsegel}>Selecione uma data</Text>
        <TouchableOpacity onPress={() => setShowDatePickerBahsegel(true)}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 10,
              flexDirection: 'row',
            }}>
            <View style={styles.dateRenderBahsegel}>
              <Text>{selectedDateBahsegel}</Text>
            </View>
            <FontAwesomeIcon
              icon={'calendar-days'}
              size={28}
              color={colorsBahsegel.green}
            />
          </View>
        </TouchableOpacity>
        {showDatePickerBahsegel ? (
          <View>
            <DatePicker
              onSelectedChange={date => setSelectedDateBahsegel(date)}
              selected={curDateBahsegel}
              current={curDateBahsegel}
              minimumDate={curDateBahsegel}
            />
            <TouchableOpacity
              style={styles.saveBahsegel}
              onPress={() => setShowDatePickerBahsegel(false)}>
              <Text style={styles.saveTextBahsegel}>Impor</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text style={styles.labelBahsegel}>Número de pessoas</Text>
            <TextInput
              style={styles.inputBahsegel}
              onChangeText={setPersonBahsegel}
              value={personBahsegel}
              keyboardType="numeric"
            />

            <Text style={styles.labelBahsegel}>Seu nome</Text>
            <TextInput
              style={styles.inputBahsegel}
              onChangeText={setNameBahsegel}
              value={nameBahsegel}
            />
            <Text style={styles.labelBahsegel}>Seu numero de telefone</Text>
            <TextInput
              style={styles.inputBahsegel}
              onChangeText={setPhoneBahsegel}
              value={phoneBahsegel}
            />
            <TouchableOpacity
              style={styles.nextButtonBahsegel}
              onPress={() => navigation.push('After')}>
              <Text>Desenho</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ...styleBahsegel,
  labelBahsegel: {
    fontSize: 18,
    color: '#fff',
    paddingLeft: 20,
  },
  saveBahsegel: {
    alignItems: 'center',
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  saveTextBahsegel: {
    borderWidth: 2,
    backgroundColor: 'silver',
    paddingHorizontal: 5,
    borderColor: colorsBahsegel.green,
  },
  dateRenderBahsegel: {
    height: 30,
    width: 200,
    marginLeft: 10,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  inputBahsegel: {
    height: 30,
    backgroundColor: '#ededed',
    borderWidth: 2,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginBottom: 15,
    borderColor: 'grey',
  },
});

export default BookingScreenBahsegel;
