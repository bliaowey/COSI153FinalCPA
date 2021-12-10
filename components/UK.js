import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image,SafeAreaView,ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            United Kingdom National Anthem: "God Save the Queen"
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, padding: 10}}>
              Lyrics: {"\n"}
              {"\n"}
              God save our gracious Queen!{"\n"}
              Long live our noble Queen!{"\n"}
              God save the Queen!{"\n"}
              Send her victorious,{"\n"}
              Happy and glorious,{"\n"}
              Long to reign over us:{"\n"}
              God save the Queen!{"\n"}
            </Text>
<iframe width="560" height="315" src="https://www.youtube.com/embed/LJ27xS27qyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    fontSize:32,
    padding: 20,
    margin: 10,
    color:"white",
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: 'stretch',
    flexDirection: 'colomn',
    backgroundColor: 'white',
  },
    horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor:'white',
  },
})
