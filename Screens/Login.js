import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    console.log("Login button pressed");
    navigation.navigate("Home");
  };
  const handleSignup = () => {
    console.log("Signup button pressed");
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={() => handleLogin()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSignup} onPress={() => handleSignup()}>
        <Text style={styles.buttonText}>Create an Account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom:100,
    padding: 10,
    top: 0,
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "column",

    padding: 10,
    width: "80%",
  },
  errorText: {
    color: "red",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonLogin: {
    borderWidth: 1,
    color: "black",
    width: "80%",
    height: 40,
    margin: 10,
    justifyContent: "center",
  },
  buttonSignup: {
    borderWidth: 1,
    color: "black",
    width: "80%",
    height: 40,
    margin: 10,
    justifyContent: "center",
  
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default LoginScreen;
