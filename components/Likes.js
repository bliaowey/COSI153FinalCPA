import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Button, SafeAreaView, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LikeButton = () => {
    const [likedAnthem, setLikedAnthem] = useState("");
    const [anthemList, setAnthemList] = useState([]);
    useEffect(() => {getData()}, []);


    const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@anthemList')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setAnthemList(data)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            // this happens the first time the app is loaded
            // as there is nothing in storage...
            setAnthemList([])
          }
        } catch(e) {
          console.log("error in getData ")
          // this shouldn't happen, but its good practice
          // to check for errors!
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@anthemList', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }

  const renderAnthems = ({item}) => {
    return (
      <View style={{flex: 1, flexDirection:'row', justifyContent: 'center'}}>
           <Text style={{fontSize: 20, weight: 'bold'}}>{item}</Text>
      </View>
    )
  }

  return (

    <View style={styles.container}>
      <Text style={styles.headerText}>Your Favourite Anthems</Text>
      <Text style={{fontSize:20}}>
          Do you like a certain National Anthem? Keep track by entering it here:
      </Text>

      <View style={{flexDirection:'row',
                    margin:20,
                    justifyContent:'space-around'}}>

            <TextInput // for the result
              style={{fontSize:20}}
              placeholder="Enter Anthem"
              onChangeText={text => {
                   setLikedAnthem(text);
                 }}
              value = {likedAnthem}
            />
        </View>
        <View style={{flexDirection:'row',
                      justifyContent:'space-around'}}>
        <Button
               title={"Add"}
               color="blue"
               onPress = {() => {
                 console.log("AnthemList = ")
                 console.dir(anthemList)
                 const newList = anthemList.concat(likedAnthem)
                 console.dir(newList)
                 setAnthemList(newList)
                 //setAnthemList([...anthemList, likedAnthem])
                 storeData(anthemList)
                 setLikedAnthem("")
               }}
               />
        <Button
                title={"Clear"}
                color="red"
                onPress = {() => {
                  clearAll()
                  setAnthemList([]);
                }}
                />

      </View>
      <View style={{flexDirection:'row',
                    justifyContent:'center',
                    backgroundColor:'lightgray'}}>
        <Text style={{fontSize:20,
                      color:'green',backgroundColor:'lightgray'}}>
              Your Favourite National Anthems:
         </Text>
      </View>


      <FlatList
        data={anthemList}
        renderItem={renderAnthems}
        keyExtractor={(item) => item}
      />

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#eee',
    justifyContent: 'center',
    textAlign:'left',
    marginTop:20,
    padding:20,
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'#aaa',
    fontSize: 40,
    padding:10,
    color: 'blue',
  },

});


export default LikeButton;
