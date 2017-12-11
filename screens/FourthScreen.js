import React from 'react';
import {Linking, FlatList, StyleSheet, Text, View, Button, Image,TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import {List, ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FourthScreen extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Account Lookup',
  }

  saveFollowersJson(value) {
    AsyncStorage.setItem('followers', value);
  }

  state = {
    data: []
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://api.github.com/users/ajohri/followers');
    const json = await response.json();
    this.setState({data: json});
  };

  lookup = async () =>{
    var token = await AsyncStorage.getItem('username');
    var api_url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+token+'?api_key=RGAPI-09ed86fa-bd44-4169-b941-3e33602a9bfb';
    console.log(api_url);
    const response = await fetch(api_url);
    const json = await response.json();
    this.setState({data: json});
    var summonerId = json.id;
    var accountId = json.accountId
    AsyncStorage.setItem('summonerId', JSON.stringify(summonerId));
    AsyncStorage.setItem('accountId', JSON.stringify(accountId));
  }

  // Theoretically what should happen is on upon onPress it should actually call a render function with a new fetch instruction.
  // In doing this what will happen is that a new pf page will render on top of the current page.
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.lookup}>
          <Text>Get Info</Text>
        </TouchableOpacity>

        <Text>LookupId:{this.state.data.id} {'\n'}
              AccountId:{this.state.data.accountId}{'\n'}
              Summoner Level:{this.state.data.summonerLevel}</Text>

        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title = "Open DrawNavigator"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    color: 'black'
  }
});
