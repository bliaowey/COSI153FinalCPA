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
            Mongolian National Anthem: "Mongol Ulsiin töriin duulal"
            </Text>
          </View>
          <View style={styles.horizontal}>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>
              Lyrics: {"\n"}
              {"\n"}
              Darhan manai tusgaar uls{"\n"}
              Dayaar mongoliin ariun golomt{"\n"}
              Dalai ih deedsiin gegeen üils{"\n"}
              Dandaa enhjij, üürd monhjino.{"\n"}
{"\n"}
              Hamag delhiin shudarga ulstai{"\n"}
              Hamtran negdsen ewee behjüülj{"\n"}
              Hatan zorig, bühii l chadlaaraa{"\n"}
              Hairtai Mongol ornoo manduulya{"\n"}
            </Text>
            <Text style={{fontSize: 20, padding: 10}}>
              English Translation: {"\n"}
              {"\n"}
              Mongolia, land sacred and beloved,{"\n"}
              We fellow Mongols shall be embraced.{"\n"}
              Let us help ev'ry good deed flourish{"\n"}
              Forevermore till the world's end.{"\n"}
{"\n"}
              Let us good will form{"\n"}
              With every friend, may that be norm.{"\n"}
              Let's build this our Mongol homeland,{"\n"}
              Our sweat and blood to lend.{"\n"}

            </Text>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FAmXMEHxPrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
