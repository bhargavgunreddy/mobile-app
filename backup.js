/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Navigator,
  ListView,
  Image
} from 'react-native';

// export class memories extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Hello Bhargav !!
//         </Text>
        
//       </View>
//     );
//   }
// }

// export class picMemory extends Component {
//   render() {

//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };

//     return (
//       <Image source={pic} style={styles.mypic}/>
      
//     );
//   }
// }

// export class Greeting extends Component {
//   render() {

//     return (
//       <Text> Hello Greetings to {this.props.greet}</Text>
      
//     );
//   }
// }

// Greeting.propTypes = {
//   greeters: React.PropTypes.string
// };

// Greeting.defaultProps = {
//   greet: "bhargav"
// };


// class GreetingCard extends Component {
  
//   constructor(props) {
//     super(props);
//     console.log("props-- >", this.props);
//   }

//   greetThem(item){
//     console.log("greetThem ", item);
//       return <Greeting greet={item}/>
//   }

//   render() {
//     //console.log("props -- >", this.props);
//     return (
//        <Text>
//        {this.props.greeters.map(this.greetThem)}
//        </Text>
      
//     );
//   }
// }

// GreetingCard.propTypes = {
//   greeters: React.PropTypes.array
// };

// let greeterArr=  ["Bhargavaaa", "tejuuuu"] ;

// GreetingCard.defaultProps = {
//   greeters: greeterArr
// };

// GreetingCard.props = {
//   greeters: ["bhargavvv", "tejuuu"]
// }


// return (
//         <ScrollView style = {{padding: 20}}>
//           <Text style={styles.welcome}>
//             Hello Bhargav !!
//           </Text>
//           <Image source = {require('./tej_group.jpg')}></Image>
//             <TextInput
//                 style = {{height:40}}
//                 placeholder = "Type here" editable = {true} keyboardType = 'numeric'
//                 onChangeText = {(text) => this.setState({text}) } value = {this.state.text}>
//                 </TextInput>
//                 <TextInput style = {{height:40}}
//                 defaultValue = "Type here"></TextInput>
//             <Text style = {{padding: 10, fontSize: 42}} editable = {true}>
//             {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//             </Text>
//           </ScrollView>    
//       );


// class PizzaTranslator extends Component {

//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows(['John','A','Johnny','B','Jimmy','C','Jon','D'])
//     };

//   }


//   render() {

//     return (
//         <View style = {{flex:1, padding: 20}}>
//           <ListView
//             dataSource = {this.state.dataSource}
//             renderRow = {(rowData) => <Text>{rowData}</Text>}> </ListView>
//           </View>    
//       );
//   }
// }

import MyScene from './Myscene';

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  mypic: {
    margin: 5,
    width: 190,
    height: 110,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

let greeters = {"greeters": ["Bhargavaaaa", "tejuuuuuu"] };



AppRegistry.registerComponent('memories', () => SimpleNavigationApp);
