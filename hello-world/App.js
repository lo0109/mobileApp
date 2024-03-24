import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const pressme = () => console.log('Pressed');
const steps = ['O','','O','X','X','O','X','','O'];
export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={[styles.box, styles.view]}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <Text style={[styles.text, {color: 'red'}]}>Hello World!</Text>
      <Text numberOfLines={1} >hijadhsikhfkasjdhfkahsdkskdjfgjksdfhghsdkjghfkashdfklahdkfhaksd</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}} onPress={pressme}>
        Press ME
        </Text> */}
        <View style={styles.board}>
          {steps.map( (s,i)=> (
            <View style={styles.box} key={i}>
              <Text style={ styles.chess}>{s}</Text>
            </View> 
          ))}
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margain: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight:'bold'
  },
  welcome: {
    font:50
  },
  view:{
    flex:1,
    backgroundColor:'blue',
    flexDirection:'column',
  },
  box:{
    width:80,
    height:80,
    backgroundColor:'green',
    borderWidth:1,
    borderColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
  board:{
    width: 300,
    height:300,
    boarderWidth: 2,
    boarderColor: 'black',
    backgroundColor:'darkorange',
    boarderRadius: 100,
    flexDirection:'row',
    justifyContent: 'center',
    flexWrap:'wrap',
    alignContent:'center'
  },
  chess: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  }
});
