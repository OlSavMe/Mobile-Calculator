import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Icon, Image} from 'react-native';

const styles = StyleSheet.create ({
  container: {
flex: 1,
 flexDirection: 'column',
  margin: 100,
  alignItems: 'center',
  justifyContent: 'space-around'
  

  },
  text: {
    width: 200,
     borderWidth: 1,
     borderColor: 'gray',
  
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-around'
   
   
  }

})



export default class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      n1: 0,
      n2: 0,
      result: 0
    };
  }


  render() {
    return (
      <View style={styles.container}>
      <View >
          <Text style={styles.text}>{ this.state.result ? 'Result= '+ this.state.result : null}</Text>
          </View>
          <View >
           <TextInput style={styles.text} keyboardType ='numeric' onChangeText={(text) => this.setState({n1:parseInt(text)})}/>
           <TextInput style={styles.text} keyboardType ='numeric' onChangeText={(text) => this.setState({n2:parseInt(text)})}/>
           </View>
        <View style={styles.button}>
           <Button  onPress={()=>{
          this.setState({result: this.state.n1 && this.state.n2 ? this.state.n1 + this.state.n2 : null})}} title="+"/>
           <Button   onPress={()=>{
          this.setState({result: this.state.n1 && this.state.n2 ? this.state.n1 - this.state.n2 : null})}} title="-"/>
          </View>
          <View>
            <Image style={{width: 200, height: 200}} source={require('./assets/calc.png')} />
          </View>
      </View>
  );
  }

}
