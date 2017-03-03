import React,{Component}from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  View
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton';
import NoteScreen from './App/Components/NoteScreen';

class ReactDemo extends Component {
  renderScene(route,navigator){
    switch(route.name){
      case 'home':
      return(
        <View style= {styles.container}>
        <SimpleButton
        onPress={()=>{
          navigator.push({
            name: 'createNote'
          });
        }}
        customText='Create note'
        />
        </View>
      );
      case 'createNote':
      return(
        <NoteScreen/>
      );
    }
  }
  render(){
    return(
      <Navigator
      initialRoute={{name:'home'}}
      renderScene={this.renderScene}/>
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
