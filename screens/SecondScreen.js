import React from 'react';
import {ListView, Linking, FlatList, StyleSheet, Text, View, Button, Image, AsyncStorage} from 'react-native';

//global.champs = champs;
export default class FirstScreen extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Champions',
  }

  saveFollowersJson(value) {
    AsyncStorage.setItem('repositories', value);
  }

  state = {
    data: []
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=RGAPI-70c7c2d8-37c0-47c1-9e8f-ff3d9894e702');
    const json_raw = await response.json();
    console.log(json_raw);
    this.setState({data: json_raw.data});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> List of Champions {'\n'}</Text>
        <FlatList
          data = {Object.keys(this.state.data)}
          renderItem = {({item}) => <Text>{item}</Text>}
          />
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    color: 'black'
  }
});
