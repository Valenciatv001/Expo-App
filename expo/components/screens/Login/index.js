import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";

const API_URL = "https://expoapp.onrender.com";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     setError("Fields are compulsory");
  //     return;
  //   } else {
  //     try {
  //       const res = await axios.post(
  //         `${API_URL}/api/auth/login`,
  //         {
  //           email,
  //           password,
  //         },
  //         {
  //           withCredentials: true,
  //           headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //           },
  //         }
  //       );

  //       const token = res.data.token;
  //       console.log(token)

  //       const decoded = jwtDecode(token);
  //       console.log(decoded)
  //       setUser(decoded?.userInfo);
  //       // navigation.navigate("Main", {
  //       //   user: decoded?.userInfo,
  //       // });
  //       navigation.navigate("Main", {
  //         screen: "Profile", // Navigate to the 'Profile' screen
  //         params: { user }, // Pass the user data
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
    
  // };

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Fields are compulsory");
      return;
    } else {
      try {
        const res = await axios.post(
          `${API_URL}/api/auth/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const token = res.data.token;
  
        // Decoding the JWT token to get user information
        const decoded = jwtDecode(token);
        const userInfo = decoded?.UserInfo; // Accessing the nested UserInfo object
        setUser(userInfo);
  
        // Navigating to the 'Main' screen and passing the user data
        navigation.navigate("Main", {
          screen: "Profile", // Navigate to the 'Profile' screen
          params: { user: userInfo }, // Pass the user data
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.createAccountText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  createAccountText: {
    marginTop: 20,
    color: "blue",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginScreen;
