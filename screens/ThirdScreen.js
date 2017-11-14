import React from 'react';
import {Linking, FlatList, StyleSheet, Text, View, Button, Image} from 'react-native';
import {List, ListItem} from 'react-native-elements'

export default class FirstScreen extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Items',
  }
  //This fuctions saves the list of followings that we have into storage
  //Current issue not able to access the data so this is why the state is still here.
  saveFollowersJson(value) {
    AsyncStorage.setItem('following', value);
  }

  // Added a new flag to this. This flag becomes true when someone is clicked on
  // From taht you call the render function of the pf page in order to get the new info to display.
  state = {
    data: [],
    pfFlag: false,
  }

  // This is called automatically when the component is rendered.
  // This is just a wrapper function
  componentWillMount() {
    this.fetchData();
  }

  // This is the actual fectch statement that is needed for this part of the assignment
  // Got this link from my users json file.
  fetchData = async () => {
    const response = await fetch('https://api.github.com/users/ajohri/following');
    const json = await response.json();
    this.setState({data: json});
  };

  // This just gets the icon and put it in a Image to display a user's name and pf pic
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> List of Items </Text>
        <Text>
          Amplifying Tome {'\n'}
          Ancient Coin {'\n'}
          B. F. Sword {'\n'}
          Blasting Wand {'\n'}
          Boots of Speed {'\n'}
          Brawlers Gloves {'\n'}
          Cloak of Agility {'\n'}
          Cloth Armor {'\n'}
          Cull {'\n'}
          Dagger {'\n'}
          Dorans Blade {'\n'}
          Dorans Ring {'\n'}
          Dorans Shield {'\n'}
          Faerie Charm {'\n'}
          Hunters Machete {'\n'}
          Hunters Talisman {'\n'}
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
//   data={this.state.data}
//   keyExtractor={(x, i) => i}
//   renderItem={({ item }) => (
//     <Text onPress={() => {Linking.openURL(`${item.html_url}`)}}>
//     <Image
//       style={{width: 30, height: 30}}
//       source = {{uri: item.avatar_url}}
//     />
//       {item.login} {'\n'}
//     </Text>
//   )}
// />
