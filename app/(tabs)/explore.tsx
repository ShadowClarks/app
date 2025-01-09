import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "expo-router";
import LottieView from "lottie-react-native";

const animationData = require("../../assets/animations/imposter.json");

const SignUpScreen = () => {
  const navigation = useNavigation(); // Fixed typo
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOldUser = () => {
    navigation.navigate("(tabs)", { screen: "index" });
  };

  const handleSignUp = () => {
    if (!email.includes('@')) {
      Alert.alert("Please enter a valid email");
      return;
    }
    if (!email.includes('@')) {
      Alert.alert("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Password must contain atleast 6 characters");
      return;
    }
    if (!confirmPassword || !username) {
      Alert.alert("Please fill out all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("(screen)", { screen: "home" });
    }, 2000);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require('../../assets/images/shoebg.jpeg')} style={styles.backgroundImage}>
      {isLoading ? (
        <LottieView source={animationData} autoPlay loop style={{ height: 300, width: 300 }} />
      ) : (
        <>
          <View style={styles.inputContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOldUser}>
            <Text style={styles.linkText}>Already have an account? Log in</Text>
          </TouchableOpacity>

          </View>
          
        </>
      )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DFD5CD",
  },
  backgroundImage: {
    height: 775,
    width: 500,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "Black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  input: {
    width: 250,
    padding: 10,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  linkText: {
    marginTop: 20,
    color: "white",
    backgroundColor: "grey",
    padding: 5,
    borderRadius: 5,
  },
  inputContainer: {
    width: 300,
    height: 500,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
});

export default SignUpScreen;
