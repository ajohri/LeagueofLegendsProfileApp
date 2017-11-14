import React from 'react';
import {Linking, FlatList, StyleSheet, Text, View, Button, Image, AsyncStorage} from 'react-native';
import {List, ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Notifications extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Notifications',
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
    var token = await AsyncStorage.getItem('token');
    console.log(token)
    const response = await fetch('https://api.github.com/notifications?access_token='+token);
    const json = await response.json();
    this.setState({data: json});
  };

  reRenderNewPfPage(value) {
    // Call the render function of FirstScreen
    // Call the fetchData Function of FirstScreen
  }

  // Theoretically what should happen is on upon onPress it should actually call a render function with a new fetch instruction.
  // In doing this what will happen is that a new pf page will render on top of the current page.
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> List of Notifications </Text>

        <FlatList
          data = {this.state.data}
          keyExtractor = {(x, i) => i}
          renderItem={({ item }) =>
            <Text>
              Repository Name: {item.repository.full_name} {'\n'}
              Issue Title: {item.subject.title} {'\n'}
              Notification Reason: {item.reason} {'\n'}
              Notification Type: {item.subject.type} {'\n'}
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
