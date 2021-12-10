import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            New Zealand National Anthem: "Aotearoa/God Defend New Zealand"
            </Text>
          </View>
          <View style={styles.horizontal}>
            
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Maori Lyrics: {"\n"}
              {"\n"}
                E Ihowā Atua {"\n"}
                O ngā iwi mātou rā {"\n"}
                Āta whakarangona {"\n"}
                Me aroha noa {"\n"}
                Kia hua ko te pai {"\n"}
                Kia tau tō atawhai {"\n"}
                Manaakitia mai {"\n"}
                Aotearoa
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Lyrics: {"\n"}
              {"\n"}
                  God of Nations at Thy feet {"\n"}
                  In the bonds of love we meet {"\n"}
                  Hear our voices, we entreat {"\n"}
                  God defend our free land {"\n"}
                  Guard Pacific's triple star {"\n"}
                  From the shafts of strife and war {"\n"}
                  Make her praises heard afar {"\n"}
                  God defend New Zealand
            </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kfTzF1Nfpo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'white',
  },
})
