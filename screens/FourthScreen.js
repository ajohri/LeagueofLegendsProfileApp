import React from 'react';
import {Linking, FlatList, StyleSheet, Text, View, Button, Image,TextInput, TouchableOpacity} from 'react-native';
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
    var api_url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/ajlegend?api_key=RGAPI-70c7c2d8-37c0-47c1-9e8f-ff3d9894e702';
    console.log(api_url);
    const response = await fetch(api_url);
    const json = await response.json();
    this.setState({data: json});
  }

  // Theoretically what should happen is on upon onPress it should actually call a render function with a new fetch instruction.
  // In doing this what will happen is that a new pf page will render on top of the current page.
  render() {
    return (
      <View style={styles.container}>
        <TextInput underlineColorAndriod = 'transparent'
        onChangeText={(username) => this.setState({username})}
        value={this.state.username} placeholder='username'>
        </TextInput>
        <TouchableOpacity onPress={this.lookup}>
          <Text>LOGIN</Text>
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
