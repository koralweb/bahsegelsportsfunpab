import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import TopHeaderBahsegel from '../components/HaderLineBahsegel';
import styleBahsegel from '../data/styleBahsegel';
import sportGamesSheduleBahsegel from '../data/sportGamesSheduleBahsegel';

const currentDayBahsegel = new Date().getDate();

function RaspisanieScreenBahsegel({navigation}) {
  const renderDaysBahsegel = () => {
    return sportGamesSheduleBahsegel
      .filter(d => d.date >= currentDayBahsegel)
      .map(day => (
        <View style={styles.dayBahsegel} key={day.date}>
          <Text style={styles.dayTextBahsegel}>
            {day.date}th {day.month}
          </Text>
          {renderListBahsegel(day.list)}
        </View>
      ));
  };

  const renderListBahsegel = list => {
    return list.map(match => (
      <View
        style={styles.listItemBahsegel}
        key={match.t1 + match.t2 + match.time}>
        <View style={styles.listItemTopBahsegel}>
          <Text>{match.ligaBahsegel}</Text>
          <Text style={{color: 'grey'}}>{match.time}</Text>
        </View>
        <Text style={styles.teamBahsegel}>{match.t1}</Text>
        <Text style={styles.teamBahsegel}>{match.t2}</Text>
      </View>
    ));
  };

  return (
    <>
      <TopHeaderBahsegel navigation={navigation} />
      <ScrollView style={styles.mainBlockBahsegel}>
        <Text style={styles.titleBahsegel}>Transmissão</Text>
        {renderDaysBahsegel()}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  ...styleBahsegel,
  dayBahsegel: {
    minHeight: 55,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  listItemBahsegel: {
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 10,
    width: '96%',
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#171717',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginVertical: 10,
  },
  listItemTopBahsegel: {
    backgroundColor: '#efeeee',
    padding: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayTextBahsegel: {
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '700',
    fontSize: 18,
  },
  teamBahsegel: {
    fontWeight: '700',
    paddingHorizontal: 9,
    marginVertical: 9,
  },
});

export default RaspisanieScreenBahsegel;
