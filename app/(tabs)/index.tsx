// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { Image, StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity, Alert } from "react-native";
// import { TextInput } from "react-native-gesture-handler";

// export default function HomeScreen() {
//   const navigation = useNavigation();
//   const handleLogin = () => {
//     if (!email.includes('@')) {
//       Alert.alert("INvalid email")
//       return;
//     }
//     if (password)

//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.container}>
//         <ImageBackground source={require('../../assets/images/shoess.jpeg')} style={{height:'100%',width:'100%',}}>
//         <View style={styles.inputblock}>
//           <Text>PAge</Text>
//           <View>
//             <TextInput style={styles.form} placeholder="email" keyboardType="email-address">
//             </TextInput>
//             <TextInput style={styles.form} placeholder='password' secureTextEntry></TextInput>
//           </View>
//           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('(screen)', {screen: 'home'})}>
//             <Text style={{color:'white'}}>Login</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.createaccount} onPress={() => navigation.navigate('(tabs)', {screen: 'explore'})}>
//             <Text style={{ color:'red'}}>Create New Account</Text>
//           </TouchableOpacity>
//         </View>
//         </ImageBackground>
        
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: "#DFD5CD",
//     height: "100%",
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   container: {
//     height: "70%",
//     width: "80%",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//     elevation: 10,
//     backgroundColor: "white",
//     overflow: "hidden",
//   },
//   bagimage: {
//     height: "100%",
//     width: "100%",
//     borderRadius: 20,
//   },
//   inputblock:{
//     height: "100%",
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button:{
//     height: 50,
//     width: 200,
//     backgroundColor: "black",
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   createaccount:{
//     // height: "100%",
//     // width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//   },
//   form:{

//   },
// });



















import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from 'expo-router';

import LottieView from 'lottie-react-native'; // Import for Lottie animations in React Native
const animationData = require('../../assets/animations/imposter.json'); // Path to your animation JSON file

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = () => {
    navigation.navigate('(tabs)', { screen: 'explore' });
  };

  const handleLogin = () => {
    if (!email.includes('@') /* || !email.includes('.')*/  ) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Wrong Password !');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', `Logged in as ${email}`);
      navigation.navigate('(screen)', { screen: 'home' });
    }, 2000);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require('../../assets/images/shoebg.jpeg')} style={styles.backgroundImage}>
        {isLoading ? (
          <LottieView source={animationData} autoPlay loop style={{ height: 300, width: 300 }} />
        ) : (
          <View style={styles.inputBlock}>
            <Text style={styles.title}>Login</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createAccount} onPress={handleCreateAccount}>
              <Text style={styles.createAccountText}>Create New Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DFD5CD',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  backgroundImage: {
    height: 775,
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBlock: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 350,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'Black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: 200,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccount: {
    alignItems: 'center',
  },
  createAccountText: {
    color: 'yellow',
    fontSize: 16,
    marginTop: 15,
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 5,
  },
});

export default LoginScreen;
