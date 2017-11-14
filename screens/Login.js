import React from 'react';
import {TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
        <View style = {styles.image}>
          <TextInput underlineColorAndriod = 'transparent'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username} placeholder='username'>
          </TextInput>

          <TextInput secureTextEntry = {true} underlineColorAndriod = 'transparent'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password} placeholder = 'password'>
          </TextInput>

          <TouchableOpacity onPress={this.login}>
            <Text>LOGIN</Text>
          </TouchableOpacity>

        </View>


    );
  }

  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  login = () => {
    AsyncStorage.clear();
    var api_user_url = 'https://api.github.com/users/' + this.state.username;
    var loginURL = 'https://api.github.com/authorizations/clients/86416e37ac23bb2c8d2c';
    let base64 = require('base-64');
    var fingerprint = new Date();
    let headers = new Headers();

    headers.append('Authorization', 'Basic ' + base64.encode(this.state.username + ":" + this.state.password));

    AsyncStorage.setItem('username', this.state.username);
    AsyncStorage.setItem('password', this.state.password);

    fetch(loginURL, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
              "client_secret": "647c66a109d3a3e5a0bf0bf894c987aab62f3d5b",
              "scopes": [
                "user:follow",
                "public_repo",
                "notifications",
                "repo"
              ],
              "fingerprint":fingerprint
            })
    })
    .then((response) => response.json())
    .then((result_data)=> {
        //console.log(result_data.token)
        if(result_data.token != null) {
          AsyncStorage.setItem('token', result_data.token);
          fetch(api_user_url)
          .then((response_user) => response_user.json())
          .then((result) => {
            //console.log(result);
            console.log(result.login);
            //console.log(api_user_url);
            AsyncStorage.setItem('currentProfile', result.login);
            AsyncStorage.setItem('loginProfile', result.login);
            AsyncStorage.setItem('username', result.login);
            AsyncStorage.setItem(result.login, JSON.stringify(result));
            this.props.navigation.navigate('DrawerOpen');
          });
        }
        else {
          alert("Invalid Login Credentials");
        }
    });
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
  },
});
