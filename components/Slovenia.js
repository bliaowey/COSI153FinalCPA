import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Slovenian National Anthem: "Zravljica"
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              {"\n"}
                Žive naj vsi narodi {"\n"}
                Ki hrepene dočakat' dan {"\n"}
                Da koder sonce hodi {"\n"}
                Prepir iz sveta bo pregnan {"\n"}
                Da rojak {"\n"}
                Prost bo vsak {"\n"}
                Ne vrag, le sosed bo mejak!
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              God's blessing on all nations {"\n"}
              Who long and work for that bright day {"\n"}
              When o'er earth's habitations {"\n"}
              No war, no strife shall hold its sway {"\n"}
              Who long to see {"\n"}
              That all men free {"\n"}
              No more shall foes, but neighbours be! {"\n"}
            </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ta_mtzNZKPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </View>
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
