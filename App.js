/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, Text, TextInput, View} from 'react-native';

export default class InputState extends Component{
  constructor()
  {
    super()
    this.state = {
      nama:'',
    }
  }
  render(){
    return(
      <View>
        <TextInput
            onChangeText={(text) => {this.setState({nama:text})}}
          />
          <Text>
            Saya adalah {this.state.nama}
          </Text>
          
            </View>
    );
  }
}


// class Perkenalan extends Component{
//   render(){
//     return(
//       <Text>{this.props.name}{this.props.asal}!</Text>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component{
//   render(){
//     return(
//       <View style={{alignItems: 'center'}}>
//       <Perkenalan name= 'Muhammad Rizqi' />
//       <Perkenalan asal ='Pemalang' />
//       <Perkenalan name ='Jazak Firdaus' />
//       <Perkenalan asal ='Jember' />
//       </View>
//     );
//   }
// }
AppRegistry.registerComponent('Projekpertama', ()=> LotsOfGreetings);

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
