import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            French National Anthem: "La Marseillaise"
            </Text>
          </View>
          <View style={styles.horizontal}>

          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              Allons enfants de la Patrie,{"\n"}
              Le jour de gloire est arrivé!{"\n"}
              Contre nous de la tyrannie{"\n"}
              L'étendard sanglant est levé, {"\n"}
              Entendez-vous dans les campagnes{"\n"}
              Mugir ces féroces soldats?{"\n"}
              Ils viennent jusque dans vos bras{"\n"}
              Égorger vos fils, vos compagnes!{"\n"}
{"\n"}
              Aux armes, citoyens,{"\n"}
              Formez vos bataillons,{"\n"}
              Marchons, marchons!{"\n"}
              Qu'un sang impur{"\n"}
              Abreuve nos sillons!{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Arise, children of the Fatherland,{"\n"}
              The day of glory has arrived!{"\n"}
              Against us, tyranny's{"\n"}
              Bloody standard is raised, {"\n"}
              Do you hear, in the countryside,{"\n"}
              The roar of those ferocious soldiers?{"\n"}
              They're coming right into your arms{"\n"}
              To cut the throats of your sons, your women!{"\n"}
{"\n"}
              To arms, citizens,{"\n"}
              Form your battalions,{"\n"}
              March, march!{"\n"}
              Let an impure blood{"\n"}
              Water our furrows!{"\n"}
            </Text>
<iframe width="560" height="315" src="https://www.youtube.com/embed/5g4fhqCSdLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </View>
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
