import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView, SafeAreaView,Footer } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Slovenia from './Slovenia';
import USA from './USA';
import Canada from './Canada';
import NewZealand from './NewZealand';
import Bosnia from './Bosnia';
import LikesPage from './Likes';
import Monaco from './Monaco';
import Romania from './Romania';
import Serbia from './Serbia';
import Argentina from './Argentina';
import Italy from './Italy';
import France from './France'
import Australia from './Australia'
import UK from './UK';
import Croatia from './Croatia';
import Germany from './Germany';
import Russia from './Russia';
import Austria from './Austria';
import Mongolia from './Mongolia';

function HomeNav({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'stretch', boarderColor: 'white' }}>
      <Button
        title="Argentina"
        onPress={() => navigation.navigate('Argentina')}
      />
      <Button
        title="Australia"
        onPress={() => navigation.navigate('Australia')}
      />
      <Button
        title="Austria"
        onPress={() => navigation.navigate('Austria')}
      />
      <Button
        title="Bosnia and Herzegovina"
        onPress={() => navigation.navigate('Bosnia')}
      />
      <Button
        title="Canada"
        onPress={() => navigation.navigate('Canada')}
      />
      <Button
        title="Croatia"
        onPress={() => navigation.navigate('Croatia')}
      />
      <Button
        title="France"
        onPress={() => navigation.navigate('France')}
      />
      <Button
        title="Germany"
        onPress={() => navigation.navigate('Germany')}
      />
      <Button
        title="Italy"
        onPress={() => navigation.navigate('Italy')}
      />
      <Button
        title="Monaco"
        onPress={() => navigation.navigate('Monaco')}
      />
      <Button
        title="Mongolia"
        onPress={() => navigation.navigate('Mongolia')}
      />
      <Button
        title="New Zealand"
        onPress={() => navigation.navigate('New Zealand')}
      />
      <Button
        title="Romania"
        onPress={() => navigation.navigate('Romania')}
      />
      <Button
        title="Russia"
        onPress={() => navigation.navigate('Russia')}
      />
      <Button
        title="Serbia"
        onPress={() => navigation.navigate('Serbia')}
      />
      <Button
        title="Slovenia"
        onPress={() => navigation.navigate('Slovenia')}
      />
      <Button
        title="United Kingdom"
        onPress={() => navigation.navigate('United Kingdom')}
      />
      <Button
        title="United States"
        onPress={() => navigation.navigate('United States')}
      />
      <Button
          color='red' title='Go to Likes Page'
          onPress = {() => navigation.navigate('Likes Page')}
        />

    </View>
    </ScrollView>
  );
}

function SloveniaScreen({ navigation }) {
  return (
    <Slovenia/>
  );
}

function USAScreen({ navigation }) {
  return (
    <USA/>
  );
}

function CanadaScreen({ navigation }) {
  return (
    <Canada/>
  );
}

function NewZealandScreen({ navigation }) {
  return (
    <NewZealand/>
  );
}

function BosniaScreen({ navigation }) {
  return (
    <Bosnia/>
  );
}

function LikeScreen({navigation}){
  return(
    <LikesPage/>
  );
}

function MonacoScreen({navigation}){
  return(
    <Monaco/>
  );
}

function RomaniaScreen({navigation}){
  return(
    <Romania/>
  );
}

function SerbiaScreen({navigation}){
  return(
    <Serbia/>
  );
}

function ArgentinaScreen({navigation}){
  return(
    <Argentina/>
  );
}

function ItalyScreen({navigation}){
  return(
    <Italy/>
  );
}

function FranceScreen({navigation}){
  return(
    <France/>
  );
}

function AustraliaScreen({navigation}){
  return(
    <Australia/>
  );
}

function UKScreen({navigation}){
  return(
    <UK/>
  );
}

function CroatiaScreen({navigation}){
  return(
    <Croatia/>
  );
}

function GermanyScreen({navigation}){
  return(
    <Germany/>
  );
}

function RussiaScreen({navigation}){
  return(
    <Russia/>
  );
}

function AustriaScreen({navigation}){
  return(
    <Austria/>
  );
}

function MongoliaScreen({navigation}){
  return(
    <Mongolia/>
  );
}

const Tab = createNativeStackNavigator();

export default function App(){
  const [country, setCountry] = useState(0);
  return(
          <View style={styles.container}>
            <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
              <Text style={styles.header}>
              National Anthem Database
              </Text>
            </View>
            <View style={styles.container}>
                <Text style={{fontSize: 20, margin: 0,}}>
                Click on a country to see its national anthem:
                </Text>
            </View>
            <View style={{flex: 10, flexDirection: 'colomn'}}>
            <NavigationContainer style={{flex: 1, flexDirection: 'colomn'}}>
                  <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeNav} />
                    <Tab.Screen name="Argentina" component={ArgentinaScreen} />
                    <Tab.Screen name="Australia" component={AustraliaScreen}/>
                    <Tab.Screen name="Austria" component={AustriaScreen}/>
                    <Tab.Screen name="Bosnia" component={BosniaScreen} />
                    <Tab.Screen name="Canada" component={CanadaScreen} />
                    <Tab.Screen name="Croatia" component={CroatiaScreen} />
                    <Tab.Screen name="France" component={FranceScreen} />
                    <Tab.Screen name="Germany" component={GermanyScreen} />
                    <Tab.Screen name="Italy" component={ItalyScreen} />
                    <Tab.Screen name="Monaco" component={MonacoScreen} />
                    <Tab.Screen name="Mongolia" component={MongoliaScreen} />
                    <Tab.Screen name="New Zealand" component={NewZealandScreen} />
                    <Tab.Screen name="Romania" component={RomaniaScreen} />
                    <Tab.Screen name="Russia" component={RussiaScreen} />
                    <Tab.Screen name="Serbia" component={SerbiaScreen} />
                    <Tab.Screen name="Slovenia" component={SloveniaScreen} />
                    <Tab.Screen name="United Kingdom" component={UKScreen} />
                    <Tab.Screen name="United States" component={USAScreen} />
                    <Tab.Screen name="Likes Page" component={LikeScreen} />
                  </Tab.Navigator>
                </NavigationContainer>
            </View>
          </View>
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
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: 'stretch',
    flexDirection: 'colomn',
    backgroundColor: 'white',
  },
  textinput:{
      flex:0.5,
      margin:20,
      fontSize:20
    },
})
