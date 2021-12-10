import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Croatian National Anthem: "Lijepa naša domovino"
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              {"\n"}
              Lijepa naša domovino,{"\n"}
              Oj, junačka zemljo mila,{"\n"}
              Stare slave djedovino,{"\n"}
              Da bi vazda sretna bila!{"\n"}
{"\n"}
              Mila kano si nam slavna,{"\n"}
              Mila si nam ti jedina,{"\n"}
              Mila kuda si nam ravna,{"\n"}
              Mila kuda si planina!{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Our beautiful homeland,{"\n"}
              Oh so fearless and gracious,{"\n"}
              Our fathers' ancient glory,{"\n"}
              May you be blessed forever.{"\n"}

              Dear, you are our only glory,{"\n"}
              Dear, you are our only one,{"\n"}
              Dear, we love your plains,{"\n"}
              Dear, we love your mountains{"\n"}
            </Text>
<iframe width="560" height="315" src="https://www.youtube.com/embed/X3xNDB_kGk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </View>
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
    flex:2,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
})
