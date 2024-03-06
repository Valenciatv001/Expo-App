// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
// import { jwtDecode } from "jwt-decode";
// import "core-js/stable/atob";



// const API_URL = "https://expoapp.onrender.com";



// const SignupScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignup = async () => {
//     if (!name || !email || !password) {
//       setError('All fields are compulsory');
//       return;
//     }else {
//       try {
//         const res = await axios.post(
//           `${API_URL}/api/auth/signup`,
//           {
//             username,
//             email,
//             password,
//           },
//           {
//             withCredentials: true,
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//             },
//           }
//         );

//         const token = res.data.token;

//         const decoded = jwtDecode(token);
//         setUser(decoded?.userInfo);
//         navigation.navigate("Main", {
//           user: decoded?.userInfo,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     // Implement your signup logic here, e.g., make API request

//     // For demonstration, navigate to Main screen on successful signup
//     navigation.navigate('Main');
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Signup Screen</Text>
//       <TextInput
//         placeholder="Name"
//         value={username}
//         onChangeText={setUsername}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       <Button title="Signup" onPress={handleSignup} />

//       {error ? <Text style={styles.errorText}>{error}</Text> : null}

//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.loginText}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     width: 300,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   loginText: {
//     marginTop: 20,
//     color: 'blue',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 10,
//   },
// });

// export default SignupScreen;





import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import axios from 'axios'; // Don't forget to import axios

const API_URL = "https://expoapp.onrender.com";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleSignup = async () => {
  //   if (!username || !email || !password) {
  //     setError('All fields are compulsory');
  //     return;
  //   } else {
  //     try {
  //       const res = await axios.post(
  //         `${API_URL}/api/auth/signup`,
  //         {
  //           username,
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

  //       // Decoding the JWT token to get user information
  //       const decoded = jwtDecode(token);
  //       const userInfo = decoded?.UserInfo; // Accessing the nested UserInfo object

  //       // For demonstration, navigate to Main screen on successful signup
  //       navigation.navigate('Main', {
  //         screen: 'Profile', // Navigate to the 'Profile' screen
  //         params: { user: userInfo }, // Pass the user data
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   // Implement your signup logic here, e.g., make API request

  //   // For demonstration, navigate to Main screen on successful signup
  //   navigation.navigate('Main');
  // };


const handleSignup = async () => {
  if (!username || !email || !password) {
    setError('All fields are compulsory');
    return;
  } else {
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/signup`,
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      // Access user information from the response
      const user = response.data.user;

      // For demonstration, navigate to Main screen with user data
      navigation.navigate('Main', {
        screen: 'Profile', // Navigate to the 'Profile' screen
        params: { user },
      });
    } catch (error) {
      console.log(error);
      setError('Signup failed. Please try again.');
    }
  }
};




  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
      <TextInput
        placeholder="Name"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
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
      <Button title="Signup" onPress={handleSignup} />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginText: {
    marginTop: 20,
    color: 'blue',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignupScreen;

