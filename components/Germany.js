import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            German National Anthem: "Deutschlandlied"
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              Einigkeit und Recht und Freiheit{"\n"}
              Für das deutsche Vaterland!{"\n"}
              Danach lasst uns alle streben{"\n"}
              Brüderlich mit Herz und Hand!{"\n"}
              Einigkeit und Recht und Freiheit{"\n"}
              Sind des Glückes Unterpfand{"\n"}
              Blüh' im Glanze dieses Glückes,{"\n"}
              Blühe, deutsches Vaterland!{"\n"}
              Blüh' im Glanze dieses Glückes,{"\n"}
              Blühe, deutsches Vaterland!{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Unity and justice and freedom{"\n"}
              For the German fatherland!{"\n"}
              Towards these let us all strive{"\n"}
              Brotherly with heart and hand!{"\n"}
              Unity and justice and freedom{"\n"}
              Are the safeguards of fortune;{"\n"}
              Flourish in the radiance of this fortune,{"\n"}
              Flourish, German fatherland!{"\n"}
              Flourish in the radiance of this fortune,{"\n"}
              Flourish, German fatherland!{"\n"}
            </Text>
<iframe width="560" height="315" src="https://www.youtube.com/embed/gWlYH5raQf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
