import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView} from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Argentine National Anthem: "Himno Nacional Argentino"
            </Text>
          </View>

          <View style={styles.container}>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              {"\n"}
                Oíd, mortales, el grito sagrado:{"\n"}
                "¡Libertad! ¡Libertad! ¡Libertad!"{"\n"}
                Oíd el ruido de rotas cadenas{"\n"}
                ved en trono a la noble igualdad{"\n"}
{"\n"}
                Ya su trono dignísimo abrieron{"\n"}
                las Provincias Unidas del Sud{"\n"}
                y los libres del mundo responden:{"\n"}
                "¡Al gran pueblo argentino, salud!"{"\n"}
                Y los libres del mundo responden:{"\n"}
                ¡Al gran pueblo argentino, salud!"{"\n"}
{"\n"}
                Sean eternos los laureles,{"\n"}
                que supimos conseguir.{"\n"}
                Coronados de gloria vivamos{"\n"}
                ¡O juremos con gloria morir!{"\n"}
                ¡O juremos con gloria morir!{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
            English Translation:{"\n"}
            {"\n"}
            Hear, mortals, the sacred cry:{"\n"}
            "Freedom! Freedom! Freedom!"{"\n"}
            Hear the sound of broken chains{"\n"}
            See noble equality enthroned.{"\n"}
{"\n"}
            Their most worthy throne have now opened{"\n"}
            The United Provinces of the South.{"\n"}
            And the free people of the world reply:{"\n"}
            "To the great Argentine people, hail!"{"\n"}
            And the free ones of the world reply:{"\n"}
            "To the great Argentine people, hail!"{"\n"}
{"\n"}
            May the laurels be eternal{"\n"}
            that we were able to achieve{"\n"}
            Let us live crowned in glory{"\n"}
            Or let us swear to die with glory!{"\n"}
            Or let us swear to die with glory!{"\n"}
            </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TrRiFOb3RGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
