import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
{/* Importing Image Picker library */}
import * as ImagePicker from 'expo-image-picker';
{/* Import Share Image library */}
import * as Sharing from 'expo-sharing'; 
{/*Importing the logo from the assets folder*/}
import logo from './assets/floppy.png'; 


export default function App() {

  {/*Allowing selection of photo in app*/}
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  
  return (
    <View style={styles.container}>

      {/*Adding Image */}
      <Image source={logo} style={{ width: 305, height: 159 }} /> 

      {/*Adding styles to the text */}
      <Text style={{color: '#888', fontSize: 18}}>To share a photo from your phone with a friend, just press the button below!</Text>

      {/*Adding Button */}
      <TouchableOpacity onPress={() => alert('Button is clicked!')} style={{ backgroundColor: 'green' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});