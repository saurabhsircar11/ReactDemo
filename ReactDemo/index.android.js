import React,{Component}from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  View
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton';
import NoteScreen from './App/Components/NoteScreen';

var NavigationBarRouteMapper  ={
LeftButton:function(route,navigator,index,navState)
{switch(route.name){
  case 'createNote':
  return(
    <SimpleButton
    onPress={()=>navigator.pop()}
    customText='Back'
    />
  );
  default:return null;
}
},

RightButton:function(route,navigator,index,navState)
{
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
    );
    default:
    return null;
},
Title:function(route,navigator,index,navState)
{
  switch (route.name) {
    case 'home':return(<Text>React Notes</Text);

    case 'createNote': return(<Text>Create Note</Text>);
        
  }
}
};

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
      navigation={<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper}
    />}
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
