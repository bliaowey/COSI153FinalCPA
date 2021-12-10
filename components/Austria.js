import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image,SafeAreaView,ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Austrian National Anthem: "Land der Berge, Land am Strome"
            </Text>
          </View>
          <View style={styles.horizontal}>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, padding: 10}}>
              Lyrics: {"\n"}
              {"\n"}
              Land der Berge, Land am Strome,{"\n"}
              Land der Äcker, Land der Dome,{"\n"}
              Land der Hämmer, zukunftsreich!{"\n"}
              Heimat großer Töchter und Söhne,{"\n"}
              Volk, begnadet für das Schöne,{"\n"}
              Vielgerühmtes Österreich!{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Land of peaks, oh, land of rivers,{"\n"}
              Land of fields, oh, land of steeples{"\n"}
              Land of labours, future-bound!{"\n"}
              Home thou art to prodigious kin,{"\n"}
              Shining brighter than ever been{"\n"}
              Austria, of high praise!{"\n"}
            </Text>
<iframe width="560" height="315" src="https://www.youtube.com/embed/BSJjNJYbhxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor:'white',
  },
})
