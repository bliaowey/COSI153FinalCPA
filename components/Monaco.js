import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function App(){
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Monaco National Anthem: "Hymne Monégasque"
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              {"\n"}
                Despoei tugiù, sciü d'u nostru paise {"\n"}
                Se ride aù ventu, u meme pavayun {"\n"}
                Despoei tugiù a curù russa e gianca {"\n"}
                E stà l'emblèma d'a nostra libertà {"\n"}
                Grandi e piciui, l'an sempre respetà {"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Forever, in our land, {"\n"}
              One flag has flown in the wind {"\n"}
              Forever, the colours red and white {"\n"}
              Have symbolised our liberty {"\n"}
              Adults and children have always respected them. {"\n"}

            </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OxDpksrQ3WI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
