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
  View,
  ScrollView,
  MapView,
  Image
} from 'react-native';

// import {MapView} from 'react-native-maps';


export class Memory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uri: "",
      memoryInfo: []
    }
  }

  picDescription(item, index) {
    return (<Text key = {item + index} style = {styles.welcome}>{item}</Text>);
  }

  render() {
      return (
      <View style={{flex: 2, backgroundColor: 'gray'}}>
          <View style={{margin:20, flex: 1, flexDirection: 'row'}}>
            <Image source = { require('./rajni.jpg')} style = {styles.mypic}></Image>
              <ScrollView >
                {this.props.memoryInfo.map(this.picDescription)}
              </ScrollView>
          </View>
          <View style={{margin:20, flex: 1, flexDirection: 'row'}}>
            <MapView style={{width:150, height:150, flex:1, margin: 1, padding: 1}} 
            showsUserLocation = {true} showPointsOfInterest = {false}
             zoomEnabled={true}
            >
            </MapView>
            <MapView style={{width:150, height:150, flex:1, margin: 1, padding: 1}}
                region = {{
                  latitude: 17.35,
                  longitude: 78.38,
                  latitudeDelta: 0.15,
                  longitudeDelta: 0.18
                }}  showPointsOfInterest = {false} zoomEnabled = {true}>
            </MapView>
          </View>
      </View>
        
    );
  }
}

Memory.propTypes = {
  uri: React.PropTypes.string,
  memoryInfo: React.PropTypes.array
};

Memory.defaultProps = {
  uri: "rajni.jpg",
  memoryInfo: ["Pic of Rajni", "SuperStar", "10 Awards", "10 crores"]
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 10,
    textAlign: 'left',
    margin: 4,
  },
  mypic: {
    flex:1,
    margin: 5,
    width: 190,
    height: 110,
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
  },
 
});

// let greeters = {"greeters": ["Bhargavaaaa", "tejuuuuuu"] };



AppRegistry.registerComponent('memories', () => Memory);
