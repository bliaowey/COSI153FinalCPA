import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Serbiam National Anthem: "Bože pravde"
            </Text>
          </View>
          <View style={styles.horizontal}>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              {"\n"}
              Bože pravde, ti što spase{"\n"}
              od propasti dosad nas,{"\n"}
              čuj i odsad naše glase{"\n"}
              i od sad nam budi spas.{"\n"}
{"\n"}
              Moćnom rukom vodi, brani{"\n"}
              budućnosti srpske brod,{"\n"}
              Bože spasi, Bože hrani,{"\n"}
              srpske zemlje, srpski rod!{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              God of Justice; Thou who saved us{"\n"}
              when in deepest bondage cast,{"\n"}
              Hear Thy Serbian children's voices,{"\n"}
              Be our help as in the past.{"\n"}
{"\n"}
              With Thy mighty hand sustain us,{"\n"}
              Still our rugged pathway trace;{"\n"}
              God, our hope; protect and cherish,{"\n"}
              Serbian lands and Serbian race!{"\n"}
            </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Iu_Wz_buPOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
