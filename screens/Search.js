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

export default class Search extends React.Component {
  render() {
    return (
        <View style = {styles.image}>
          <TextInput underlineColorAndriod = 'transparent'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username} placeholder='user'>
          </TextInput>

          <TouchableOpacity onPress={this.users}>
            <Text>SEARCH USER</Text>
          </TouchableOpacity>

          <TextInput underlineColorAndriod = 'transparent'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password} placeholder = 'repository'>
          </TextInput>

          <TouchableOpacity onPress={this.login}>
            <Text>SEARCH REPOSITORIES</Text>
          </TouchableOpacity>

        </View>


    );
  }

  constructor(props) {
    super(props);
    this.state = {users: '', repository: ''};
  }

  //One method for users
  users = () => {
    AsyncStorage.setItem('search_user', this.state.users);
    var api_user_search_url = '';
  }

  //One method for repositories
  repository = () => {
    AsyncStorage.setItem('search_repository', this.state.repository);
    var api_user_search_url = 'https://api.github.com/search/repositories?q=' + this.state.repository;
    fetch(api_user_search_url)
    .then((response) => response.json())
    .then((result) => {
      AsyncStorage.setItem(this.state.repository, JSON.stringify(result));
    })
  }

}

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
  },
});
