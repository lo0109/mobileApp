import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const pressme = () => console.log('Pressed');
const toDoList = [{id:'1', name:'Buy milk'}, {id:'2',name:'Buy bread'}, {id:'3',name:'Buy eggs'}]; 
export default function App() {
  return (
    <View style={styles.container}>
    <Text style = {[styles.title, {alignSelf:'center'}]}>My Todo List</Text>   
      <View>{toDoList.map((item) => {
        return (
          <View>
            <Text style={styles.list}>{item.name}</Text>
          </View>
        );
      })}
      </View>
      <View style = {[{alignSelf:'center'}]}>
        <Text  style={[styles.addToDo]} onPress={pressme}>Add New ToDo</Text>
      </View>
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
    flexDirection: 'column',
  },
  title: {
    flex: 0,
    justifyContent:'center',
    alignContent: 'center',
    fontSize:25,
    fontWeight:'bold',
    marginTop:10,
    padding:30,
  },
  list: {
    flex:0,
    fontSize:20,
    backgroundColor:'green',
    color:'white',
    justifyContent: 'center',
    alignContent: 'flex-start',
    borderColor:'white',
    borderWidth:2,
    borderRadius:5,
    margin:2,
    padding:5
  },
  addToDo: {
    flex:1,
    fontSize:20,
    fontWeight: 'bold',
    color: 'blue',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -500,
  }
});
