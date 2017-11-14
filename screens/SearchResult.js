import React from 'react';
import {Linking, FlatList, StyleSheet, Text, View, Button, Image, AsyncStorage} from 'react-native';

export default class SearchResult extends React.Component{
  static navigationOptions = {
    drawerLabel: 'SearchResult',
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
    var search = await AsyncStorage.getItem('search_repository');
    var json = await AsyncStorage.getItem(search);
    this.setState({data: JSON.parse(json)});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> List of Projects </Text>

        <FlatList
          data = {this.state.data}
          keyExtractor = {(x, i) => i}
          renderItem={({ item }) =>
            <Text>
              Project Title: {item.items.name} {'\n'}
              Project Owner: {item.items.owner.login} {'\n'}
              Project Description: {item.items.description} {'\n'}
            </Text>
          }
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
