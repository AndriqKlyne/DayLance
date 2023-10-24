import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-paper";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContainer1}>
          <Image
            style={styles.userImage}
            source={require("../assets/Images/default.jpg")}
          />
          <Text style={styles.Logo}>DayLance</Text>
        </View>
        <View style={styles.headerContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Text style={styles.buttonText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Content</Text>
        </View>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Messaging")}
        >
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TaskList")}
        >
          <Text style={styles.buttonText}>Task List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MapAccess")}
        >
          <Text style={styles.buttonText}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Text style={styles.buttonText}>User Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: "13%",
    width: "100%",
  },
  headerContainer1: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 10,
  },
  navbar: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    height: 40,
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "space-between",
  },
  userImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  searchContainer: {
    padding: 10,
    width: "100%",
  },
  searchBar: {
    height: 40,
  },
});

export default HomeScreen;
