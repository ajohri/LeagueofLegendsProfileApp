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
          style={{width: null, height: null}}
          source={{uri: 'https://freelogo2016cdn.b-cdn.net/wp-content/uploads/2016/12/League-of-legends-logo.png'}}
        />
          <Text>League of Legends Information App {'\n'}</Text>
          <TextInput placeholder='username' style={styles.input} underlineColorAndriod = 'transparent'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username} >
          </TextInput>
          <TouchableOpacity style={styles.button} onPress={this.storeUser}>
            <Text style={styles.buttonText}>Store Username</Text>
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
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },

  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  image: {
    marginTop: 50,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },


});

// background: {
//   width,
//   height,
// },

// <Text style={{fontSize: 20, color: 'black'}}>
//   {'\t'} {'\t'}{this.state.data.login} {'\n'}
//   {'\t'}NO WEBSITE{'\n'}
//   johri3@illinois.edu {'\n'}
//   # Public Repositories: {this.state.data.public_repos} {'\n'}
//   # Followers: {this.state.data.followers} {'\n'}
//   # Following: {this.state.data.following} {'\n'}
//   Created At: {this.state.data.created_at} {'\n'}
// </Text>
