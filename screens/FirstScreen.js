import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Button, Image, AsyncStorage, TextInput, TouchableOpacity} from 'react-native';
// import logo from './images/League-of-Legends-logo.png';

export default class FirstScreen extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Profile',
  }

  state = {
    data: []
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    //var json = await AsyncStorage.getItem('ajohri');
    // const response = await fetch('https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=RGAPI-70c7c2d8-37c0-47c1-9e8f-ff3d9894e702');
    // const json_raw = await response.json();
    // console.log(Object.keys(json_raw.data));
    // this.setState({data: Object.keys(json_raw.data)});
  };

  storeUser = async () => {
    AsyncStorage.clear();
    console.log(this.state.username);
    AsyncStorage.setItem('username', this.state.username);
  }

  render() {
    return <View style={styles.image}>

      <View style={styles.container}>
      <Image
        style={{width: 200, height: 50}}
        source={{uri: 'https://freelogo2016cdn.b-cdn.net/wp-content/uploads/2016/12/League-of-legends-logo.png'}}
      />
        <Text>League of Legends Information App {'\n'}</Text>
        <TextInput underlineColorAndriod = 'transparent'
        onChangeText={(username) => this.setState({username})}
        value={this.state.username} placeholder='username'>
        </TextInput>
        <TouchableOpacity onPress={this.storeUser}>
          <Text>Store Username</Text>
        </TouchableOpacity>

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


// <Text style={{fontSize: 20, color: 'black'}}>
//   {'\t'} {'\t'}{this.state.data.login} {'\n'}
//   {'\t'}NO WEBSITE{'\n'}
//   johri3@illinois.edu {'\n'}
//   # Public Repositories: {this.state.data.public_repos} {'\n'}
//   # Followers: {this.state.data.followers} {'\n'}
//   # Following: {this.state.data.following} {'\n'}
//   Created At: {this.state.data.created_at} {'\n'}
// </Text>
