import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Italian National Anthem: "Il Canto degli Italiani"
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              Fratelli d'Italia,{"\n"}
              l'Italia s'è desta,{"\n"}
              dell'elmo di Scipio{"\n"}
              s'è cinta la testa.{"\n"}
              Dov'è la Vittoria?{"\n"}
              Le porga la chioma,{"\n"}
              ché schiava di Roma{"\n"}
              Iddio la creò.{"\n"}
{"\n"}
              Stringiamci a coorte,{"\n"}
              siam pronti alla morte.{"\n"}
              Siam pronti alla morte,{"\n"}
              l'Italia chiamò.{"\n"}
              Stringiamci a coorte,{"\n"}
              siam pronti alla morte{"\n"}
              Siam pronti alla morte,{"\n"}
              l'Italia chiamò!{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Brothers of Italy,{"\n"}
              Italy has woken,{"\n"}
              bound Scipio's helmet{"\n"}
              Upon her head.{"\n"}
              Where is Victory?{"\n"}
              Let her bow down,{"\n"}
              Because as a slave of Rome{"\n"}
              God created her.{"\n"}
{"\n"}
              Let us join in a cohort,{"\n"}
              we are ready for death.{"\n"}
              We are ready for death,{"\n"}
              Italy has called.{"\n"}
              Let us join in a cohort,{"\n"}
              We are ready for death.{"\n"}
              We are ready for death,{"\n"}
              Italy has called!{"\n"}
            </Text>
<iframe width="560" height="315" src="https://www.youtube.com/embed/kqAP9c2hJ6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </View>
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
