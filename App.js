import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, TouchableOpacity, SafeAreaView, SectionList, StatusBar} from 'react-native';
import * as Speech from 'expo-speech';
import { NavigationContainer, DefaultTheme,
  DarkTheme, LightTheme,
  useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const Stack = createNativeStackNavigator();

function CreditsPage({navigation}){
  const DATA = [
  {
    title: "Project Members",
    data: ["⚫ Abdul Rehman Aziz FA19-BCS-016", "⚫ M. Daniyal Javed FA19-BCS-061", "⚫ M. Ahmed Raza FA19-BCS-143"]
  },
  {
    title: "API",
    data: ["⚫ Speech from expo-speech"]
  },
  {
    title: "Components used",
    data: ["⚫ Status Bar",  "⚫ Section List", "⚫ Touchable Opacity", "⚫ Appearance Provider", "⚫ Navigation Container" ]
  }
  
];

const Item = ({ title }) => (
  <View style={styles.text1}>
    <Text style={styles.text1}>{title}</Text>
  </View>
);
  return(
    <View style={styles.container1}>
    <View style={styles.stretch}>
        <Image
          style={styles.img}
          source={{uri: 'https://geekflare.com/wp-content/uploads/2021/07/texttospeech.png'}}
        />
      </View>
      <Text  style={styles.title} ><b>Credits</b></Text>
     

    
    
    
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item  title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.title1}>{title}</Text>
      )}
    />
    </View>
  );
}

function HomeScreen({navigation}){
const onPress=() => navigation.navigate('Info Page');
  const [name, setName] = useState('');
  return(

    
    <View style= {styles.container1}>

    <View style={styles.stretch}>
        <Image
          style={styles.img}
          source={{uri: 'https://geekflare.com/wp-content/uploads/2021/07/texttospeech.png'}}
        />
      </View>
    <Text  style={styles.title} ><b>WELCOME</b></Text>
     <Text  style={ {marginTop: '-20px' ,color: 'white', fontSize: '40px', textAlign: 'center'}} >--------</Text>
    
    <Text  style={styles.text1} > This App can be used to pronounce words that some individual may find hard to pronounce and can help them learn the proper english accent with high fidelity audio</Text>
    
   
    <View style={styles.button} >
    
     <TouchableOpacity style={styles.buttonTO} onPress={onPress}>
        <View >
          <Text>Continue!</Text>
        </View>
      </TouchableOpacity>
    </View>

    </View>
  );
}


function ScreenPage({navigation}) {
  const [word, setWord] = useState('Write Something for me to pronounce');
  const onPress=() => navigation.navigate('Credits Page');
  
  const speak = () => {
    var thingToSay = word;
    Speech.speak(thingToSay);
  };
  return(
    <View style={styles.container1}>

   

    <View style={styles.stretch}>
        <Image
          style={styles.img}
          source={{uri: 'https://geekflare.com/wp-content/uploads/2021/07/texttospeech.png'}}
        />
      </View>

      <Text style={{color: 'blue', fontSize: '20px', padding: '20px', textAlign: 'center'}}><b>Enter the word/s to be pronounced here:</b></Text>
      <TextInput style={styles.input}
        placeholder=' e.g. Otorhinolaryngologist' 
        onChangeText={(value) => setWord(value)} />
        <View style={styles.button}>

      
      </View>
      <View style={{marginTop: '-50px', marginLeft:'130px'}}>
      <TouchableOpacity onPress={speak}>
        <Image
          style={{height: '70px', width: '70px' }}
          source={require('/assets/speech.png')}
        />
        </TouchableOpacity>
        </View>
      <TouchableOpacity style={styles.buttonTO} onPress={onPress}>
      <Text style={{marginLeft:''}}>Credits</Text>
      </TouchableOpacity>
      


    </View>
  );
}


function InfoPage({navigation}){
const onPress=() => navigation.navigate('Screen Page');
  return(

    
    <View style= {styles.container1}>

    <View style={styles.stretch}>
        <Image
          style={styles.img}
          source={{uri: 'https://geekflare.com/wp-content/uploads/2021/07/texttospeech.png'}}
        />
      </View>
    <Text  style={styles.title} ><b>Text to Speech Responder</b></Text>
     
    <Text style={styles.title1}> Overview:</Text>
    <Text  style={styles.text1} >This Application uses Text to Speech API that enables text to be converted into speech sounds imitative of the human voice. Using text to speech API, the app will read new messages aloud to you. </Text>
  
   
    <View style={styles.buttonTO} >
    
    <TouchableOpacity onPress={onPress} ><Text>Continue</Text></TouchableOpacity>
    </View>

    </View>
  );
}


export default function App() {
  const scheme = useColorScheme();

  return (
    
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  /> 
        <Stack.Screen name="Info Page" component={InfoPage}/>
        <Stack.Screen name="Screen Page" component={ScreenPage}/>
        <Stack.Screen name="Credits Page" component={CreditsPage}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  title: {
    fontFamily: "Helvetica",
    fontSize: 30,
    paddingTop: '20px',
    color: "blue",
    textAlign: "center"
  },

  title1: {
    fontFamily: "",
    fontSize: 24,
    paddingTop: '10px',
    color: "blue",
    paddingLeft: '10px',
  },

  text1: {
    fontFamily: "Helvetica",
    fontSize: 15,
    paddingTop: '5px',
    color: "",
    paddingLeft: '20px',
    paddingRight: '20px',
    textAlign: 'justify'
  },

  

  container1: {
    flex: 1,
    
    
    backgroundColor: 'lightgrey',

  },

  stretch: {
    
     justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: '100%',
    height: 50,
    padding:56
  },
  buttonTO:{
    marginTop:10,
    backgroundColor: '#85c1e9',
    padding:7,
    textAlign: 'center',
    borderStyle:'solid',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#777'

  },
  input: {
    marginLeft: 70,
    borderWidth: 1,
    borderRadius:25,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  button:{
    color: 'black',
    padding:25,
  }
});