import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Canadian National Anthem: "O Canada"
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, padding: 10}}>
              Lyrics: {"\n"}
              {"\n"}
                O Canada!
                Our home and native land! {"\n"}
                True patriot love in all of us command. {"\n"}
                Car ton bras sait porter l'épée, (For your arm knows knows how to wield the sword){"\n"}
                Il sait porter la croix! (Your arm knows how to carry the cross){"\n"}
                Ton histoire est une épopée {"\n"}
                Des plus brillants exploits. (Your history is an epic of brilliant deeds) {"\n"}
                God keep our land glorious and free! {"\n"}
                O Canada we stand on guard for thee!
            </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9RlKkvH4R9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    flex: 2,
    flexDirection: 'colomn',
    backgroundColor: 'white',
  },
    horizontal: {
    flex:5,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'white',
  },
})
