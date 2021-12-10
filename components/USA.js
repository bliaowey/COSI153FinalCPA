import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image,SafeAreaView,ScrollView } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
            American National Anthem: "The Star Spangled Banner"
            </Text>
          </View>
          <View style={styles.horizontal}>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, padding: 10}}>
              Lyrics: {"\n"}
              {"\n"}
                Say, can you see {"\n"}
                By the dawn's early light {"\n"}
                What so proudly we hailed {"\n"}
                At the twilight's last gleaming? {"\n"} {"\n"}
                Whose broad stripes and bright stars {"\n"}
                Through the perilous fight {"\n"}
                O'er the ramparts we watched, {"\n"}
                Were so gallantly, yeah, streaming? {"\n"} {"\n"}
                And the rockets' red glare {"\n"}
                The bombs bursting in air {"\n"}
                Gave proof through the night {"\n"}
                That our flag was still there {"\n"} {"\n"}
                O say, does that star-spangled banner yet wave {"\n"}
                O'er the land of the free and the home of the brave
            </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/w5x_9KEogM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor:'white',
  },
})
