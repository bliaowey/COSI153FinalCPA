import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView, Video } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Russian National Anthem: "Gosudarstvennyy Gimn Rossiyskoy Federatsii"
            </Text>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'cet'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              {"\n"}
                Rossiya — svyashchennaya nasha derzhava,{"\n"}
                Rossiya — lyubimaya nasha strana.{"\n"}
                Moguchaya volya, velikaya slava –{"\n"}
                Tvoyo dostoyanye na vse vremena!{"\n"}
{"\n"}
                Slav'sya, Otechestvo nashe svobodnoye,{"\n"}
                Bratskikh narodov soyuz vekovoy,{"\n"}
                Predkami dannaya mudrost' narodnaya!{"\n"}
                Slav'sya, strana! My gordimsya toboy!{"\n"}
{"\n"}
                Ot yuzhnykh morey do polyarnogo kraya{"\n"}
                Raskinulis' nashi lesa i polya.{"\n"}
                Odna ty na svete! Odna ty takaya –{"\n"}
                Khranimaya Bogom rodnaya zemlya!{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Russia is our sacred state,{"\n"}
              Russia is our beloved country.{"\n"}
              A mighty will, great glory –{"\n"}
              Your Our are country{"\n"}
{"\n"}
              Be glorified, our free Fatherland,{"\n"}
              The age-old union of fraternal peoples,{"\n"}
              Ancestor-given wisdom of the people!{"\n"}
              Be glorified, country! We are proud of you!{"\n"}
{"\n"}
              From the southern seas to the polar edge{"\n"}
              Our forests and fields are spread out.{"\n"}
              You are the only one in the world! You are the only one –{"\n"}
              the native land so kept by God!{"\n"}
            </Text>
<iframe width="560" height="315" src="https://www.youtube.com/embed/6SixoGCptgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
