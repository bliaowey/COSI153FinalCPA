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
          <View style={styles.horizontal}>
            <Image
              style={{width: 200, height: 100}}
              source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABKCAMAAAC2AzvLAAAAllBMVEV0rN////9vqt6lx+nl1Mvfx7T69/fl0cPr3tj9/P37uQ3ixav3tQ7s3tX59vTIn4TTsp/17efOm2rQpHzjzbvfupbRr5nAhEDhwaWzcDK8f0Xbu6LNqZLGfwDuqgbLk1jIlWm1bhy3cynOoHHinQzWsZP159narHvbsozYrYLOqIqzbiqoXhDGjFfx6urSjhG1bQPBehAxAjR4AAABgElEQVRoge2X3XKCMBBGSSuEEEFDiAZFokKM2PLj+79cQy96b5wJ05k9N9zlTHY2+y1BAAAAAAAAAAD/kI9lCD6XIUDL4O7N0IAi794VqtCGbO3XpzfOcCoYZyLFQ+zPG5M84jdpbpKTHDmJnbxhwYzAIr+vBC2K0JM32kWUdlh1e94cO0qjR+bFi1gjJFeHr+/yoI4SK4cjXLyVZrLj11Od1KeyVzLWFfHgZWSg5nwZk/V6nYxXbShhzIM31p2SzZS0bd22yaSaRtHXW9rBm6aYl2MyPtvnmJz6EKepL2/Y2zLXbT0XmvvyUlvafrLe0XqnRqpO+/AyRqjRV3vh0V73cjZ0ID76ilQ6lqovf9/RhXPJdPXyIS5ehBSWR3Uo57nBpTAM+Xi/KHvMc/LY8H2n8Dwndw4x7JgLBRWre26zwTBvuWBbGuWE05uRjEc58ZeDKB7+cj/zmPto3nO2ZGN3Hb97zkyEGHII3re977HY3r7UfwoAAAAAAAAA/EN+ALikLD6YvpSbAAAAAElFTkSuQmCC'}}
            />
          </View>
          <View style={styles.container}>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
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
