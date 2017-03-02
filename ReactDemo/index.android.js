import React,{Component}from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton';

class ReactDemo extends Component {
  render(){
    return(
      <View style={styles.container}>
      <SimpleButton/>
      </View>
    );
  }
}

var styles =StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
});
AppRegistry.registerComponent('ReactDemo', ()=>ReactDemo);
