import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Button, Image, AsyncStorage, TextInput, TouchableOpacity, FlatList} from 'react-native';

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
    const response = await fetch('https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/'+summonerId_parsed+'?api_key=RGAPI-d35f6fed-82a2-424f-9d55-aad5c9ce32dc');
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
