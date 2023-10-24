import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    console.log("Signup button pressed");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
            />
        <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNum}
            onChangeText={(text) => setPhoneNum(text)}
            />
            
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleSignup()}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    marginBottom: 70,
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
  button: {
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

export default SignupScreen;
