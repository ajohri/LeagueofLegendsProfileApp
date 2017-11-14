import React from 'react';
import {Linking, FlatList, StyleSheet, Text, View, Button, Image, AsyncStorage} from 'react-native';

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
    const response = await fetch('https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=RGAPI-0b5a069c-2e02-40fb-99ea-b2957f6f236f');
    const json = await response.json();
    console.log(json);
    this.setState({data: json});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> List of Champions </Text>
        <Text>
        Aatrox {'\n'}
        Ahri {'\n'}
        Akali {'\n'}
        Alistar {'\n'}
        Amumu {'\n'}
        Anivia {'\n'}
        Annie {'\n'}
        Ashe {'\n'}
        Azir {'\n'}
        Blitzcrank {'\n'}
        Brand {'\n'}
        Braum {'\n'}
        Caitlyn {'\n'}
        Cassiopeia {'\n'}
        Cho Gath {'\n'}
        Corki {'\n'}
        Darius {'\n'}
        Diana {'\n'}
        Dr. Mundo {'\n'}
        Draven {'\n'}
        </Text>


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


// <FlatList
//   data = {this.state.data}
//   keyExtractor = {(x, i) => i}
//   renderItem={({ item }) =>
//     <Text onPress={() => {Linking.openURL(`${item.html_url}`)}}>
//       {item.status.message} {'\n'}
//       Project Title: {item.name} {'\n'}
//       Project Owner: {item.owner.login} {'\n'}
//       Project Description: {item.description} {'\n'}
//     </Text>
//   }
// />
