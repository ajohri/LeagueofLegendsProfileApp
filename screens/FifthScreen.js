import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Button, Image, AsyncStorage, TextInput, TouchableOpacity, FlatList} from 'react-native';

import * as V from 'victory'
import {VictoryBar, VictoryChart} from 'victory';

export default class FirstScreen extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Stats',
  }

  state = {
    data: []
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    var summonerId = await AsyncStorage.getItem('summonerId');
    var summonerId_parsed = JSON.parse(summonerId);
    console.log(summonerId_parsed);
    const response = await fetch('https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/'+summonerId_parsed+'?api_key=RGAPI-09ed86fa-bd44-4169-b941-3e33602a9bfb');
    const json = await response.json();
    //console.log(json);
    this.setState({data: json})
  }

  render() {
    console.log(this.state.data);
    return <View style={styles.image}>

      <View style={styles.container}>
        <Text>Summoner Information {'\n'}
        {this.state.data.rank}</Text>
        <FlatList
          data = {this.state.data}
          renderItem = {({item}) =>
          <Text style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20}}>
          {item.queueType}: {item.tier} {item.rank}{'\n'}
          Number of Wins: {item.wins}{'\n'}
          Number of Losses: {item.losses}
          </Text>}
        />

        <VictoryChart domainPadding={25}>
          <VictoryBar
            categories={{
              x: ["birds", "cats", "dogs", "fish", "frogs"]
            }}
            data={[
              {x: "cats", y: 1},
              {x: "dogs", y: 2},
              {x: "birds", y: 3},
              {x: "fish", y: 2},
              {x: "frogs", y: 1}
            ]}
          />
        </VictoryChart>

        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title = "Open DrawNavigator"
          />
      </View>

    </View>
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 2,
    alignItems: 'center'
  },
});
