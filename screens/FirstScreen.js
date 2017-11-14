import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View, Button, Image, AsyncStorage} from 'react-native';
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
    var json = await AsyncStorage.getItem('ajohri');
    // const response = await fetch('https://api.github.com/users/ajohri');
    // const json = await response.json();
    this.setState({data: JSON.parse(json)});
  };

  render() {
    return <View style={styles.image}>

      <View style={styles.container}>
      <Image
        style={{width: 200, height: 50}}
        source={{uri: 'https://freelogo2016cdn.b-cdn.net/wp-content/uploads/2016/12/League-of-legends-logo.png'}}
      />
        <Text>League of Legends Information App</Text>


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
    flex: 1,
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
