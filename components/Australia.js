import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image,SafeAreaView,ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Australian National Anthem: "Advance Australia Fair"
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, padding: 10}}>
              Lyrics: {"\n"}
              {"\n"}
              Australians all let us rejoice,{"\n"}
              For we are one and free;{"\n"}
              We've golden soil and wealth for toil;{"\n"}
              Our home is girt by sea;{"\n"}
              Our land abounds in nature's gifts{"\n"}
              Of beauty rich and rare;{"\n"}
              In history's page, let every stage{"\n"}
              Advance Australia Fair.{"\n"}
              In joyful strains then let us sing,{"\n"}
              Advance Australia Fair.{"\n"}
            </Text>
<iframe width="560" height="315" src="https://www.youtube.com/embed/B30nvx5jmCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </View>
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
