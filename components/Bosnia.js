import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, SafeAreaView, ScrollView} from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            Bosnian National Anthem: "Državna himna Bosne i Hercegovine"
            </Text>
          </View>

          <View style={styles.container}>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics (Unofficial): {"\n"}
              {"\n"}
                Ti si svjetlost duše{"\n"}
                Vječne vatre plam{"\n"}
                Majko naša zemljo Bosno{"\n"}
                Tebi pripadam{"\n"}

                Divno plavo nebo{"\n"}
                Hercegovine{"\n"}
                U srcu su tvoje rijeke{"\n"}
                Tvoje planine{"\n"}

                Ponosna i slavna{"\n"}
                Krajina predaka{"\n"}
                Živjećeš u srcu našem{"\n"}
                Dov'jeka{"\n"}

                Pokoljenja tvoja{"\n"}
                Kazuju jedno{"\n"}
                Mi idemo u budućnost{"\n"}
                Zajedno! {"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
            English Translation:{"\n"}
            {"\n"}
              You're the light of the soul,{"\n"}
              Eternal fire's flame.{"\n"}
              Mother of ours, o land of Bosnia,{"\n"}
              I belong to you.{"\n"}

              The beautiful blue sky{"\n"}
              Of Herzegovina,{"\n"}
              In the heart are your rivers,{"\n"}
              Your mountains.{"\n"}

              Proud and famous{"\n"}
              Land of ancestors,{"\n"}
              You shall live in our hearts{"\n"}
              Ever more!{"\n"}

              Generations of yours{"\n"}
              Show up as one{"\n"}
              We go into the future{"\n"}
              Together!
            </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fl3h9UsTJFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
